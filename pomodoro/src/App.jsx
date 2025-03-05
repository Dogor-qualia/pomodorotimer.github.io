import { Timer } from './Timer'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './App.css'
import { useState } from 'react'
import { Button } from 'primereact/button'

function App () {
  const [pomodoro, setPomodoro] = useState('pomodoro')
  console.log(pomodoro)
  return (
    <>
      <div className='container'>
        <div className='button__container' >
          <Button className='button_pomodoro' onClick={ () => setPomodoro('pomodoro')}>POMODORO</Button>
          <Button className='button_short' onClick={ () => setPomodoro('short')}>SHORT</Button>
          <Button className='button_long' onClick={ () => setPomodoro('long')}> LONG</Button>
        </div>
        
        <div>
          {pomodoro === 'pomodoro' ? (<Timer id={"1"} time={1500}></Timer>) : 
          pomodoro === 'short' ? (<Timer id={'2'}time={300}></Timer>) :  
          (<Timer id={'3'} time={900}></Timer>)}
        </div>
        
      </div>
    </>
  )
}

export default App
