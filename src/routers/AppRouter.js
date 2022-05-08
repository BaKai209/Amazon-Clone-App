import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { DashBoardRouter } from "./DashboardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
    const [checked, setChecked] = useState(true)
    const [isloggedIn, setIsloggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            if(user?.uid){
                setIsloggedIn(true);
                console.log('hola');
            }
            else{
                setIsloggedIn(false)
            }
            setChecked(false)
        })
    
      
     }, [setIsloggedIn, setChecked]);

     if(checked) {
        return (
          <div style={{
            position: 'absolute',
            backgroundColor: 'rgb(238,127,55)',
            background: 'linear-gradient(90deg, rgba(238,127,55,1) 0%, rgba(245,113,0,1) 48%, rgba(244,176,53,1) 87%, rgba(245,113,0,1) 100%)',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0'
          }}>
            <div 
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            >
            <img width='200px' height='100px' src="https://www.brandinglittlebrands.com/wp-content/uploads/2017/03/risotto-logo-design-branding-ristorante-300x200.png" alt='Loader'/>
            </div>
          </div>
        )
      }

    return(
        <BrowserRouter>
       <Routes>
           <Route path="/login" element={
               <PublicRouter isAuth={isloggedIn}>
                   <Login />
               </PublicRouter>
           }></Route>

<Route path="/register" element={
               <PublicRouter isAuth={isloggedIn}>
                   <Register />
               </PublicRouter>
           }></Route>

<Route path="/*" element={
               <PrivateRouter isAuth={isloggedIn}>
                   <DashBoardRouter />
               </PrivateRouter>
           }></Route>
       </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;