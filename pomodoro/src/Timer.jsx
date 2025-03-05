import { useState, useRef, useEffect } from 'react'
import { Button } from 'primereact/button'
import './App.css'
export function Timer ({ time, id }) {
  const [tempo, setTempo] = useState(time)
  const [timer, setTimer] = useState(false)
  const intervalRef = useRef(null)
  const sound = new Audio('../public/complete.mp3')
  
  const actualizarTempo = () => {
    if (tempo > 0) {
      setTimer(true)
      intervalRef.current = setInterval(() => { setTempo(prevTempo => {
        if (prevTempo <= 1) {clearInterval(intervalRef.current); setTimer(false);} return prevTempo -1})}, 1000)
    } 
  }
  
    useEffect(() => {
      setTempo(time)
    },[time])


  const detenerTempo = () => {
    if (timer || tempo == 0) {
      setTimer(false)
      clearInterval(intervalRef.current)
    }
  }

  if(tempo === 0) {
    sound.play()
  }
  
  const minutos = Math.floor(tempo / 60)
  const segundos = tempo % 60
  return (
    <>
      <div className={`temp_container_${id}`}>
        <h1 className={`timer_${id}`}>{minutos}:{segundos < 10 ? '0' + segundos : segundos}  </h1>
        <Button className={`button_${id}`} onClick={timer ? detenerTempo : actualizarTempo}>{timer ? 'detener temporizador' : 'iniciar temporizador'}</Button>
      </div>
    </>
  )
}
