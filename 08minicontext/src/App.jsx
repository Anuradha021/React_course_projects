
import './App.css'
import UserContext from './context/userContext'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {


  return (
    <UserContextProvider>
    <h1>mini conttext </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
