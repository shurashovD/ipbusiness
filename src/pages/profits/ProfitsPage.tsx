import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { useController } from '../../lib/core/context'
import { MainLayout } from '../../components/MainLayout'
import {
  PROFIT_COLUMNS,
  PROFIT_VARIANT_OPTIONS,
  Profit,
  ProfitForm as TProfitForm,
} from '../../lib/constants'
import { ProfitForm } from './ProfitForm'
import { numberFormat, profitFormToAddProfit } from '../../lib/utils'

const { format } = new Intl.DateTimeFormat('ru')

export const ProfitsPage = observer(() => {
  const navigate = useNavigate()
  const { addProfit, profits } = useController()
  const [selected, setSelected] = useState<Profit | null>(null)
  const [isCreated, setIsCreated] = useState(false)
  const open = !!selected || isCreated

  const handleEditClick = (id: number) => {
    const profit = profits.find(item => item.id === id)
    if (profit) {
      setSelected(profit)
    }
  }
  const handleDeleteClick = (id: number) => {
    const index = profits.findIndex(item => item.id === id)
    if (index !== -1) {
      profits.splice(index, 1)
    }
  }

  const handleSubmit = (data: Record<string, string>) => {
    const payload = profitFormToAddProfit(data as TProfitForm)
    const id = profits.length
    addProfit({ ...payload, id })
    handleClose()
  }

  const handleClose = () => {
    setIsCreated(false)
    setSelected(null)
  }

  return (
    <MainLayout>
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Box display="flex" alignItems="center" p={1}>
          <Button onClick={() => navigate('/')} style={{ textTransform: 'none' }}>
            Главная
          </Button>
          <Button
            style={{ marginLeft: 'auto' }}
            onClick={() => setIsCreated(true)}
            variant="outlined"
          >
            Добавить
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              {Object.entries(PROFIT_COLUMNS).map(([key, value]) => (
                <TableCell key={key}>{value}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{ overflowY: 'scroll' }}>
            {profits.map(item => (
              <TableRow key={item.id}>
                <TableCell>{format(new Date(item.date))}</TableCell>
                <TableCell>{numberFormat(item.amount)}</TableCell>
                <TableCell>{PROFIT_VARIANT_OPTIONS[item.variant]}</TableCell>
                <TableCell></TableCell>
                <TableCell>{item.comment}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditClick(item.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteClick(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Drawer open={open} onClose={handleClose} anchor="bottom">
        <ProfitForm edited={selected} onSubmit={handleSubmit} />
      </Drawer>
    </MainLayout>
  )
})
