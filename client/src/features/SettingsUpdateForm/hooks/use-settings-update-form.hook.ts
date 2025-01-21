import { useProfile } from '@/shared/hooks/users/use-profile.hook'
import { userService } from '@/shared/services/user/user.service'
import { TypeUserForm } from '@/shared/types/user.types'
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
  } = useForm<TypeUserForm>({
    mode: 'onChange',
  })

  const { profile, isSuccess } = useProfile()
  useEffect(() => {
    if (isSuccess && profile) {
      reset({
        name: profile.user.name,
        email: profile.user.email,
        workInterval: profile.user.workInterval,
        breakInterval: profile.user.breakInterval,
        intervalsCount: profile.user.intervalsCount,
      })
    }
  }, [isSuccess])

  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: (data: TypeUserForm) => userService.update(data),
    onSuccess: () => {
      toast.success('Profile updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
  })

  const onSubmit: SubmitHandler<TypeUserForm> = (data) => {
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
