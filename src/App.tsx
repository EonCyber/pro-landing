import Contact from "./components/Pages/Contact/Contact"
import Home from "./components/Pages/HomePage/Home"
// import Footer from "./components/Shared/Footer/Footer"
import Header from "./components/Shared/ui/Header/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from "./components/Shared/ui/Themes/theme-provider"
import { AnimatePresence } from 'framer-motion'
import { Toaster } from "@/components/ui/toaster"
import Footer from "./components/Shared/ui/Footer/Footer"
import { routesPaths } from "./components/Shared/api/routes/routes"

function App() {

  return (
    <ThemeProvider defaultTheme="light">
      <AnimatePresence>
        <Router>
          <Header />
          <div className="min-h-[900px]">
            <Routes>
              <Route path={routesPaths.home} element={<Home />}></Route>
              <Route path={routesPaths.contact} element={<Contact />}></Route>
            </Routes>
          </div>  
          <Toaster />
          <Footer />
        </Router>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
