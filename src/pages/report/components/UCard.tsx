import { FC, ReactNode } from 'react'
import { Divider, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  children?: ReactNode
  title: string
  to?: string
}

export const UCard: FC<Props> = ({ children, title, to }) => {
  const navigate = useNavigate()

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography
        color={({ palette }) => (to ? palette.primary.main : palette.text.primary)}
        variant="h6"
        onClick={() => (to ? navigate(to) : {})}
        sx={{ cursor: to ? 'pointer' : 'default' }}
      >
        {title}
      </Typography>
      <Divider />
      {children}
    </Paper>
  )
}
