import { useProfile } from '@/shared/hooks/users/use-profile'
import { userService } from '@/shared/services/user/user.service'
import type { UserForm } from '@/shared/types/user.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const useSettingsUpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserForm>({
    mode: 'onChange',
  })

  const { user, isSuccess } = useProfile()
  useEffect(() => {
    if (isSuccess && user) {
      reset({
        name: user.name,
        email: user.email,
        workInterval: user.workInterval,
        breakInterval: user.breakInterval,
        intervalsCount: user.intervalsCount,
      })
    }
  }, [isSuccess, user, reset])

  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: (data: UserForm) => userService.update(data),
    onSuccess: () => {
      toast.success('Profile updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
  })

  const onSubmit: SubmitHandler<UserForm> = (data) => {
    const { password, ...rest } = data

    mutate({
      ...rest,
      password: password || undefined,
    })
  }

  return {
    register,
    errors,
    handleSubmit,
    isPending,
    onSubmit,
  }
}
