import { Profit, ProfitForm, ProfitVariant } from './constants'

export const numberFormat = new Intl.NumberFormat('ru').format

export function monthDiff(d1: Date, d2: Date) {
  let months = (d2.getFullYear() - d1.getFullYear()) * 12
  months -= d1.getMonth()
  months += d2.getMonth()
  return months <= 0 ? 0 : months
}

export function profitFormToAddProfit(data: ProfitForm): Omit<Profit, 'id'> {
  const amount = +data.amount
  const variant = data.variant as ProfitVariant
  return { ...data, amount, expenseIds: [], variant }
}
