import { FC } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { FormikProps } from 'formik'

type Props = {
  formik: FormikProps<{ [key: string]: string }>
  name: string
  textFieldProps: TextFieldProps
}

export const FormikTextField: FC<Props> = ({ formik, name, textFieldProps }) => {
  return (
    <TextField
      {...textFieldProps}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  )
}
