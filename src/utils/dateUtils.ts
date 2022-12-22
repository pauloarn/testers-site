import { format } from 'date-fns'

export const dateToPattern = {
  dd: '##',
  MM: '##',
  yyyy: '####',
  'dd/MM': '##/##',
  'MM/yyyy': '##/####',
  'dd/MM/yyyy': '##/##/####'
}

export const formatDate = (
  date: number | string | null | undefined | Date,
  pattern?: keyof typeof dateToPattern
) => {
  if (!date) return ''
  const datePattern = pattern ?? 'dd/MM/yyyy'
  return format(new Date(date), datePattern)
}
