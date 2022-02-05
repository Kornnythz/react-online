import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from "axios";


function PrivateRoute({ children, ...rest }) {

  //   const [isAuth ,setIsAuth ] = React.useState(false)

  //   const checkToken = async () => {
  //       try{
  //           const token = JSON.parse(localStorage.getItem('token'))
  //           if(token){
  //               const apiURLProfile = 'https://api.codingthailand.com/api/profile'
  //               const responseProfile = await axios.get(apiURLProfile,
  //                   {
  //                       headers: {
  //                           Authorization: 'Bearer ' + token.access_token
  //                       }
  //                   })
  //               if(responseProfile.data.message == "success"){
  //                   setIsAuth(true)
  //               }
  //           }else{
  //               setIsAuth(false)
  //           }
  //       }catch (error){
  //           setIsAuth(false)
  //       }
  // }

  //   React.useEffect(() =>{
  //       checkToken()
  //     },[])

  let isAuth = false

  const token = JSON.parse(localStorage.getItem('token'))

  if(token){
      isAuth = true
  }
      

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;