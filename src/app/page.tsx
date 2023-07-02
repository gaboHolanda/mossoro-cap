'use client'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Temas/Tema'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import AboutUs from './componentes/AboutUs'
import Revendedor from './componentes/Revendedores/index';

const revendedores = [
  {
    numeros: ['(84) 99630-0190' , '(84) 99630-0232'],
    descricao: 'Distribuidora de Peças e Acessórios para Motocicletas',
    image: '/logo_motolub.png',
    imageLabel: 'logo moto lub',
    nome: 'MotoLub Distribuidora'
  }
]

export default function Home() {
  return (
    <main style={{fontFamily: 'pt-sans-caption'}}>
      <ThemeProvider theme={theme}>
        <Header />    
        <AboutUs />
        <Revendedor />
        <Footer />
      </ThemeProvider>
    </main>
  )
}
