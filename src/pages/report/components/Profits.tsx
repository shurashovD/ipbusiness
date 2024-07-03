import { observer } from 'mobx-react-lite'
import { Grid, Typography } from '@mui/material'

import { useController } from 'src/lib/core/context'
import { numberFormat } from 'src/lib/utils'

import { UCard } from './UCard'

export const Profits = observer(() => {
  const { common } = useController()

  return (
    <UCard title="Доходы" to="/profits">
      <Grid container spacing={1} columns={2} pt={2}>
        <Grid item xs={1}>
          <Typography>По договору:</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{numberFormat(common)}</Typography>
        </Grid>
      </Grid>
    </UCard>
  )
})
