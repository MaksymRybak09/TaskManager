import * as yup from 'yup'

export const registerFormSchema = yup.object({
  name: yup.string().optional(),
  email: yup.string().email('Email must be a valid email'),
  password: yup.string().min(6, 'Password must be at least 6 characters'),
})

export const logInFormSchema = yup.object({
  email: yup.string().email('Email must be a valid email'),
  password: yup.string().min(6, 'Password must be at least 6 characters'),
})
