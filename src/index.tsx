import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { GlobalStyle } from "./style/global"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <ToastContainer autoClose={2000} theme="dark" />
         <GlobalStyle />
         <App />
      </BrowserRouter>
   </React.StrictMode>
)
