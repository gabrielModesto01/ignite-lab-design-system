import './styles/global.css'
import { Text } from './components/Text'

export function App() {
  return (
    <>
      <h1 className='font-bold text-2xl text-violet-500'>Hello World</h1>
      
      <button className='font-medium bg-cyan-500 px-4 py-2 rounded text-white hover:bg-cyan-300 mt-6 text-sm  '>
        Enviar
      </button>
    </>
    
  )
}