import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import { ReportPage } from './pages/report/ReportPage'
import { Context } from './lib/core/context'
import { ReportController } from './lib/core/Controller'
import { ProfitsPage } from './pages/profits/ProfitsPage'

const theme = createTheme({
  palette: { mode: 'dark' },
})

function App() {
  const [controller] = useState(new ReportController())

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Context.Provider value={{ controller }}>
          <Routes>
            <Route path="/" element={<ReportPage />} />
            <Route path="/profits" element={<ProfitsPage />} />
          </Routes>
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
