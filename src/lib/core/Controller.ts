import { makeAutoObservable, reaction } from 'mobx'

import { BusinessTaxFeeModel } from './BusinessTaxFeeModel'
import { PersonModel } from './PersonModel'
import { Profit } from '../constants'

export class ReportController {
  persons: PersonModel[] = []
  profits: Profit[] = []
  private _businessTaxFeeModel = new BusinessTaxFeeModel()

  constructor() {
    try {
      const profitsStr = localStorage.getItem('profits') || ''
      this.profits = JSON.parse(profitsStr)
    } catch (e) {
      console.log(e)
    }

    makeAutoObservable(this, {}, { autoBind: true })

    reaction(
      () => ({ common: this.common }),
      ({ common }) => {
        this._businessTaxFeeModel.common = common
      },
      { fireImmediately: true },
    )

    reaction(
      () => ({ profits: this.profits.length }),
      () => {
        localStorage.setItem('profits', JSON.stringify(this.profits))
      },
    )
  }

  get balance() {
    return 0
  }

  get businessProfit() {
    return (this.common - this.fee - this.tax) * 0.5
  }

  get common() {
    return this.profits
      .filter(({ variant }) => variant === 'Contract')
      .reduce((acc, { amount }) => acc + amount, 0)
  }

  get casheByHands() {
    return 0
  }

  get casheCard() {
    return 0
  }

  get ducks() {
    return this.common - this.fee - this.tax - this.businessProfit - this.salaryFee - this.salaryTax
  }

  get salary() {
    return this.persons.reduce((acc, { baseSalary }) => acc + baseSalary, 0)
  }

  get salaryFee() {
    return this.persons.reduce((acc, { fee }) => acc + fee, 0)
  }

  get salaryTax() {
    return this.persons.reduce((acc, { tax }) => acc + tax, 0)
  }

  get tax() {
    return this._businessTaxFeeModel.tax
  }

  get fee() {
    return this._businessTaxFeeModel.fee
  }

  public addProfit(profit: Profit) {
    this.profits.push(profit)
  }
}
