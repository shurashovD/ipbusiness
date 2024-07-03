import { createContext, useContext } from 'react'
import { ReportController } from './Controller'

export const Context = createContext<{ controller: ReportController } | null>(null)

export const useController = () => {
  return useContext(Context)!.controller
}
