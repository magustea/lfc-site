import Nav from "./components/Nav"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <div>

        <div className='h-screen lg:w-5/10 mx-auto'>

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
