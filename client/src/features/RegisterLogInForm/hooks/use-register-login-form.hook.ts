import { DASHBOARD_PAGES } from '@/shared/config/pages-url.config'
import { authService } from '@/shared/services/auth/auth.service'
import { IAuthForm } from '@/shared/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const useRegisterLogInForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IAuthForm>({
    mode: 'onChange',
  })

  const [isLogInForm, setIsLogInForm] = useState(false)

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: async (data: IAuthForm) =>
      authService.main(isLogInForm ? 'login' : 'register', data),
    onSuccess() {
      toast.success('Successfuly log in!')
      reset()
      push(DASHBOARD_PAGES.HOME)
    },
  })

  const onSubmit = handleSubmit((data) => mutate(data))

  return {
    register,
    errors,
    onSubmit,
    setIsLogInForm,
  }
}
