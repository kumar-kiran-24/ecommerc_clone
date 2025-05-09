import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Nav'
import Hero from './Hero'
import FAQ from './faq.jsx'
import Footer from './footer.jsx'
import ModelViewer from './model.jsx'
import Homepage from './homepage.jsx'
import ShopPage from './shoppage.jsx'

function App() {
  return (
    <main className="blackBackground">
      <Router>
        {/* Group shop-1 */}
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        
        {/* Group shop-2 */}
        <Footer />
      </Router>
    </main>
  )
}

export default App
