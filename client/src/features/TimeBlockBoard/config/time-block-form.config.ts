import * as yup from 'yup'

export const timeBlockFormSchema = yup.object({
  id: yup.string().optional(),
  name: yup.string().optional(),
  duration: yup.number().min(10).optional(),
  order: yup.number().optional(),
})
