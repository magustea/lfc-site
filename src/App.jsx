import Nav from "./components/Nav"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <div>

        <div className='bg-slate-200 h-screen lg:w-5/10 mx-auto'>

          <Nav />

          <div>

            <Home />
            
          </div>

        </div>

      </div>
      
    </>
  )
}

export default App
