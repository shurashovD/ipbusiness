import { makeAutoObservable } from 'mobx'

export class BusinessTaxFeeModel {
  private static _fixFee = 49500
  private static _maxFee = 277571
  common: number

  constructor(common: number = 0) {
    this.common = common

    makeAutoObservable(this, {}, { autoBind: true })
  }

  get fee() {
    return Math.max(
      BusinessTaxFeeModel._maxFee,
      BusinessTaxFeeModel._fixFee + Math.max(0, this.common - 300000) * 0.01,
    )
  }

  get tax() {
    return 0.06 * this.common
  }
}
