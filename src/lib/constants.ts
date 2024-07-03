export type Agent = {
  id: number
  name: string
}

export type ExpenseVariant =
  | 'Private'
  | 'BroCard'
  | 'BroAccount'
  | 'Cashe'
  | 'MyCardTransaction'
  | 'Salary'
  | 'SalaryTax'
  | 'SalaryFee'
  | 'BusinessTax'
  | 'BusinessFee'
  | 'CommonCard'
  | 'CommonAccount'

export type CasheOutStatus = 'Card' | 'Cashe' | 'Complete'

export interface CommonExpense {
  agentId?: number
  amount: number
  date: number
  comment?: string
  id: number
  variant: ExpenseVariant
}

export interface CasheExpense extends CommonExpense {
  variant: 'Cashe' | 'MyCardTransaction'
  status: CasheOutStatus
}

export type Expense = CommonExpense | CasheExpense

export const EXPENSE_VARIANT_OPTIONS: Record<ExpenseVariant, string> = {
  BroAccount: 'За Виталика с РС',
  BroCard: 'За Виталтика с карты',
  BusinessFee: 'Взносы ИП',
  BusinessTax: 'Налог ИП',
  Cashe: 'Снятие наличных с РС ИП',
  CommonAccount: 'Траты на бизнес с РС',
  CommonCard: 'Траты на бизнес с карты',
  MyCardTransaction: 'Перевод себе на карту',
  Private: 'Мои покупки',
  Salary: 'Зарплата',
  SalaryFee: 'Зарплата взносы',
  SalaryTax: 'Зарплата налог',
}

export type ProfitVariant = 'Cashe' | 'Contract'

export interface Profit {
  amount: number
  comment?: string
  date: string
  expenseIds: number[]
  id: number
  variant: ProfitVariant
}

export const PROFIT_COLUMNS: Record<keyof Omit<Profit, 'id'> | 'action', string> = {
  date: 'Дата',
  amount: 'Сумма',
  variant: 'Вид',
  expenseIds: 'Связи',
  comment: 'Комментарий',
  action: 'Действие',
}

export const PROFIT_VARIANT_OPTIONS: Record<ProfitVariant, string> = {
  Cashe: 'Наличные',
  Contract: 'По договору',
}

type ProfitValuesNames = keyof Omit<Profit, 'id' | 'expenseIds'>

export type ProfitForm = Record<ProfitValuesNames, string>

export const REQUIRED = 'Обязательное'
