import { Home, Navbar } from './components/index';

const App = () => {
  return (
    <div className='h-[100vh] w-[100vw] overflow-x-hidden'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App