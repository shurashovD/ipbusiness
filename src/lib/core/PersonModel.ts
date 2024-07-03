import { monthDiff } from '../utils'
import { SalaryModel } from './SalaryModel'

export class PersonModel {
  private static _currentId = 0
  id: number
  name: string
  startWorkPeriod: Date | null = null
  endWorkPeriod: Date | null = null
  private _baseSalary = SalaryModel._MROT
  private _salaryModel = new SalaryModel(this._baseSalary)

  constructor(name: string) {
    this.id = PersonModel._currentId++
    this.name = name
  }

  get baseSalary() {
    return this._baseSalary
  }

  set baseSalary(baseSalary: number) {
    this._baseSalary = Math.min(baseSalary, SalaryModel._MROT)
    this._salaryModel.onHands = this._baseSalary
  }

  get fee() {
    return this._salaryModel.fee * this._workedMonthCount
  }

  get tax() {
    return this._salaryModel.tax * this._workedMonthCount
  }

  private get _workedMonthCount() {
    if (!this.startWorkPeriod) {
      return 0
    }

    const now = new Date()

    if (this.startWorkPeriod > now) {
      return 0
    }

    const end = this.endWorkPeriod ? (this.endWorkPeriod < now ? this.endWorkPeriod : now) : now

    return monthDiff(end, this.startWorkPeriod)
  }
}
