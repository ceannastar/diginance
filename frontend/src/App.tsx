
import './App.css'

import TapBar from './components/TapBar'

import Charts from './tabs/Charts'
import Home from './tabs/Home'

function App() {

  return (
    <>
      <div className='app'>
        <div style={{width: '100%', height: '100%', backgroundColor: 'rgba(22, 21, 20, 1)', maxWidth: 728, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="circle-blur">
            
          </div>
          <div style={{width: '90%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', overflow: 'auto'}}>
            <Charts />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
