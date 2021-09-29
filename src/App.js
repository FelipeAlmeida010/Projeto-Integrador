import './App.css';
import Navbar2 from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Routes from "./Routes/Routes"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthContextProvider } from './Context/AuthContext';
import Sidebar from './components/Navbar/Sidebar';
import { useState } from "react"


function App(props) {

   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
      setIsOpen(!isOpen)
   }

   return (

      <AuthContextProvider>
          <Router>
             
             <Routes />

          </Router>
      </AuthContextProvider>

   );
}

export default App;
