import { DASHBOARD_PAGES } from '@/shared/config/pages-url.config'
import { authService } from '@/shared/services/auth/auth.service'
import type { IAuthForm } from '@/shared/types/auth.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
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

  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user?.name) {
      authService.signIn({
        email: session.user.email ?? '',
        name: session.user.name ?? '',
      })
      push(DASHBOARD_PAGES.HOME)
    }
  }, [session, push])

  return {
    register,
    errors,
    onSubmit,
  }
}
