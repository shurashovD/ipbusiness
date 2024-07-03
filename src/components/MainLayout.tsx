import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

export const MainLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {children}
    </Box>
  )
}
