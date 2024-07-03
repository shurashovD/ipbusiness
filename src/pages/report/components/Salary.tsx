import { observer } from 'mobx-react-lite'
import { Grid, Typography } from '@mui/material'

import { numberFormat } from 'src/lib/utils'
import { useController } from 'src/lib/core/context'

import { UCard } from './UCard'

export const Salary = observer(() => {
  const { salary, salaryFee, salaryTax } = useController()

  return (
    <UCard title="З/п">
      <Grid container spacing={1} columns={2} pt={2}>
        <Grid item xs={1}>
          <Typography>На руки:</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{numberFormat(salary)}</Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography>Налог:</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{numberFormat(salaryTax)}</Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography>Взносы:</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{numberFormat(salaryFee)}</Typography>
        </Grid>
      </Grid>
    </UCard>
  )
})
