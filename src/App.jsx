import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react";
import Home from './pages/Home';
import Product from './pages/Product';
import Navigation from "./pages/Navigation";
import Login from "./pages/Login";
import Privactroute from "./component/Privactroute";
import Logout from "./pages/Logout";
import Spinner from "./component/Spinner";
const Dashboard = lazy (()=> import("./pages/Dashboard"))
const Profile = lazy (()=> import("./pages/Profile"))
const Settings = lazy (()=> import("./pages/Settings"))


function App() {

  return (
  <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={
          <Privactroute>
            <Suspense fallback={<Spinner/>}>
              <Dashboard/>
            </Suspense>
          </Privactroute>}>
          <Route path="profile" element={
            <Suspense fallback={<Spinner/>}><Profile/></Suspense>
          } />
          <Route path="settings" element={
            <Suspense fallback={<Spinner/>}><Settings/></Suspense>
          } />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
  </>

   
  )
}

export default App
