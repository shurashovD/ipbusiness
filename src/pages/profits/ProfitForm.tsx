import { FC, useEffect } from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem } from '@mui/material'
import { useFormik } from 'formik'
import { number, object, string } from 'yup'

import { FormikTextField } from '../../components/FormikTextField'
import { FormikSelect } from '../../components/FormikSelect'
import {
  ProfitForm as TProfitForm,
  REQUIRED,
  PROFIT_VARIANT_OPTIONS,
  Profit,
} from '../../lib/constants'

type Props = {
  edited: Profit | null
  onSubmit(data: Record<string, string>): void
}

const DEFAULT_INITIAL_VAULES: TProfitForm = {
  amount: '',
  comment: '',
  date: '2024-07-01',
  variant: '',
}

export const ProfitForm: FC<Props> = ({ edited, onSubmit }) => {
  const formik = useFormik<Record<string, string>>({
    initialValues: DEFAULT_INITIAL_VAULES,
    onSubmit,
    validationSchema: object({
      amount: number().required(REQUIRED).positive(),
      date: string().required(REQUIRED),
      variant: string().required(REQUIRED),
    }),
  })

  useEffect(() => {
    if (edited) {
      const { amount, date, variant, comment } = edited
      formik.setValues({
        amount: amount.toString(),
        comment: comment || '',
        date,
        variant,
      })
    } else {
      formik.setValues(DEFAULT_INITIAL_VAULES)
    }
    // eslint-disable-next-line
  }, [edited])

  return (
    <Grid container spacing={2} p={1} py={2} component="form" onSubmit={formik.handleSubmit}>
      <Grid item xs="auto">
        <FormikTextField
          formik={formik}
          name="date"
          textFieldProps={{ label: 'Дата', type: 'date', size: 'small' }}
        />
      </Grid>
      <Grid item xs="auto">
        <FormikTextField
          formik={formik}
          name="amount"
          textFieldProps={{ label: 'Сумма', type: 'number', size: 'small' }}
        />
      </Grid>
      <Grid item xs="auto">
        <FormControl style={{ width: '300px' }} size="small">
          <InputLabel>Вид</InputLabel>
          <FormikSelect
            formik={formik}
            name="variant"
            selectProps={{ defaultValue: 'Contract', label: 'Вид', size: 'small' }}
          >
            {Object.entries(PROFIT_VARIANT_OPTIONS).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            ))}
          </FormikSelect>
        </FormControl>
      </Grid>
      <Grid item xs>
        <FormikTextField
          formik={formik}
          name="comment"
          textFieldProps={{ fullWidth: true, label: 'Комментарий', size: 'small' }}
        />
      </Grid>
      <Grid item xs="auto">
        <Button variant="contained" color="primary" type="submit">
          OK
        </Button>
      </Grid>
    </Grid>
  )
}
