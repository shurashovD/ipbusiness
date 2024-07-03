import { makeAutoObservable } from 'mobx'

export class SalaryModel {
  static _MROT = 20240.1
  onHands = 0

  constructor(onHands: number | void) {
    this.onHands = onHands || this.onHands

    makeAutoObservable(this, {}, { autoBind: true })
  }

  private get _salary() {
    return this.onHands / 0.87
  }

  get fee() {
    return this._salary * 0.3 - this.feeSale
  }

  get feeSale() {
    if (this._salary <= SalaryModel._MROT) {
      return 0
    }

    return (this._salary - SalaryModel._MROT) * 0.15
  }

  get tax() {
    return this._salary - this.onHands
  }
}
