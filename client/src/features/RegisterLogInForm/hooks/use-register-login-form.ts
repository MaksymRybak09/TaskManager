import { DASHBOARD_PAGES } from '@/shared/config/pages-url.config'
import type { IAuthForm } from '@/shared/types/auth.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export const useRegisterLogInForm = (
  serviceMethod: (date: IAuthForm) => void,
  schema: any,
) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IAuthForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: async (data: IAuthForm) => serviceMethod(data),
    onSuccess() {
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
