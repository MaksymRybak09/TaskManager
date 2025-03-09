import { DASHBOARD_PAGES } from '@/shared/config/pages-url.config'
import type { IAuthForm } from '@/shared/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const useRegisterLogInForm = (
  serviceMethod: (date: IAuthForm) => void,
  toastMessage: string,
) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IAuthForm>({
    mode: 'onChange',
  })

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: async (data: IAuthForm) => serviceMethod(data),
    onSuccess() {
      toast.success(toastMessage)
      reset()
      push(DASHBOARD_PAGES.HOME)
    },
  })

  const onSubmit = handleSubmit((data) => mutate(data))

  return {
    register,
    errors,
    onSubmit,
  }
}
