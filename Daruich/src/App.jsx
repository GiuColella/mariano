import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Registro from './components/registro/Registro'

function App() {

  return (
    <BrowserRouter>
    
      <Routes>

        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/registro' element={<Registro/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
