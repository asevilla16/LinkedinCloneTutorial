import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Login from './auth/Login';
import Widgets from './Components/Widget/Widgets';
import { logout, login, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      let loggedUser = {
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoUrl
      }; 

      if(userAuth){
        dispatch(login(loggedUser))
      } else {
        dispatch(logout());
      }
    });
  }, [])

  return (
    <div className="App">

      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}

    </div>
  );
}

export default App;
