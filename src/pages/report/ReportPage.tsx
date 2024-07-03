import { Grid } from '@mui/material'

import { MainLayout } from 'src/components/MainLayout'

import { Profits } from './components/Profits'
import { TaxFee } from './components/TaxFee'
import { Salary } from './components/Salary'

export const ReportPage = () => {
  return (
    <MainLayout>
      <Grid container spacing={3} p={3}>
        <Grid item xs={12} lg={6}>
          <Profits />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TaxFee />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Salary />
        </Grid>
      </Grid>
    </MainLayout>
  )
}
