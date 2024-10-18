import './App.css'
import Navbar from './components/Navbar'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-900 via-teal-600 to-teal-900">
      <Navbar />
      <HomePage/>
      <GalleryPage />
    </div>
  )
}

export default App
