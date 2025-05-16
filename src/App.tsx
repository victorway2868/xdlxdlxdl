import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DownloadsPage from './pages/DownloadsPage'
import TutorialsPage from './pages/TutorialsPage'
import EquipmentPage from './pages/EquipmentPage'
import DebugPage from './pages/DebugPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="downloads" element={<DownloadsPage />} />
        <Route path="tutorials" element={<TutorialsPage />} />
        <Route path="equipment" element={<EquipmentPage />} />
        <Route path="debug" element={<DebugPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
