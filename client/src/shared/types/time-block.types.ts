export interface ITimeBlock {
  id: string
  createdAt?: string
  updatedAt?: string
  name: string
  color?: string
  duration: number
  order: number
}

export type TimeBlockFormState = Partial<
  Omit<ITimeBlock, 'createdAt' | 'updatedAt'>
>
