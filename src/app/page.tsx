'use client'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Temas/Tema'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Revendedores from './componentes/Revendedores'


export default function Home() {
  return (
    <main style={{fontFamily: 'bernard-mt'}}>
      <ThemeProvider theme={theme}>
        <Header />
        <Revendedores />
        <Footer />
      </ThemeProvider>
    </main>
  )
}
