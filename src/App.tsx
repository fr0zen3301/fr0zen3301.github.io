import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {

  return (
    <div className="app">
      <ThemeSwitcher 
        maskImage="/public/shigure-ui.webp"
        switchDuration={1200}
        switchName="theme-transition"
      />
      <div className="content">
        <h1>2ynthethc</h1>
        <p>YouTube Channel</p>
      </div>
    </div>
  )
}

export default App
