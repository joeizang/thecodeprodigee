import Container from '@mui/material/Container'
import './App.css'
import ContactMeSection from './components/ContactMeSection'
import FooterSection from './components/FooterSection'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import MainContent from './components/MainContent'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Container sx={{ fontFamily: 'Fira Sans' }}>
        <Nav />
        <MainContent>
          <HeroSection />
          <GallerySection />
          <ContactMeSection />
          <FooterSection />
        </MainContent>
      </Container>
    </>
  )
}

export default App
