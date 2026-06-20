import Header from './components/Header/Header'
import RoutineBuilder from './components/RoutineBuilder/RoutineBuilder'
import Footer from './components/Footer/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      {/* Animated blob background */}
      <div className="app-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />
      </div>

      {/* Noise texture overlay */}
      <div className="app-noise" aria-hidden="true" />

      {/* Main app content */}
      <div className="app-content">
        <Header />
        <main className="main-content" id="main">
          <RoutineBuilder />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
