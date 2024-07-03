import { FC, ReactNode } from 'react'
import { Select, SelectProps } from '@mui/material'
import { useFormik } from 'formik'

type Props = {
  children?: ReactNode
  formik: ReturnType<typeof useFormik<Record<string, string>>>
  name: string
  selectProps: SelectProps
}

export const FormikSelect: FC<Props> = ({ children, formik, name, selectProps }) => {
  return (
    <Select
      {...selectProps}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
    >
      {children}
    </Select>
  )
}
