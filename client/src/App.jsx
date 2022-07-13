import { Navbar, Welcome, Footer, Loader, Services, Transactions } from "./components";
import './App.css'

const App = () => {

  return (
    <div className="App">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      {/* <Services /> */}
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
