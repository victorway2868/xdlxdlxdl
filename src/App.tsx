import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DownloadsPage from './pages/DownloadsPage'
import PluginsPage from './pages/PluginsPage'
import TutorialsPage from './pages/TutorialsPage'
import EquipmentPage from './pages/EquipmentPage'
import DebugPage from './pages/DebugPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="downloads" element={<DownloadsPage />} />
        <Route path="plugins" element={<PluginsPage />} />
        <Route path="tutorials" element={<TutorialsPage />} />
        <Route path="equipment" element={<EquipmentPage />} />
        <Route path="debug" element={<DebugPage />} />
      </Route>
    </Routes>
  )
}

export default App
