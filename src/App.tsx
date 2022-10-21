import "./App.css"
import { TechProvider } from "./contexts/TechContext"
import { UserProvider } from "./contexts/UserContext"
import Routes from "./Routes"

export function App() {
   return (
      <div className="App">
         <UserProvider>
            <TechProvider>
               <Routes />
            </TechProvider>
         </UserProvider>
      </div>
   )
}
