import { observer } from 'mobx-react-lite'
import { Grid, Typography } from '@mui/material'

import { numberFormat } from 'src/lib/utils'
import { useController } from 'src/lib/core/context'

import { UCard } from './UCard'

export const TaxFee = observer(() => {
  const { tax, fee } = useController()

  return (
    <UCard title="Налоги и взносы">
      <Grid container spacing={1} columns={2} pt={2}>
        <Grid item xs={1}>
          <Typography>Налог ИП:</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{numberFormat(tax)}</Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography>Взносы ИП:</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{numberFormat(fee)}</Typography>
        </Grid>
      </Grid>
    </UCard>
  )
})
