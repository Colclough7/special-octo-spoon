import React,{useState,useEffect} from 'react';
import fire from './fire';
import './App.css';
import Login from './components/Login';
import Hero from './components/Hero'




function App() {
  //STATE
  const [user,setUser] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [emailError,setEmailError] = useState('')
  const [passwordError,setPasswordError] = useState('')
  const [hasAccount,setHasAccount] = useState(false)
  //STATE ENDS
  //CLEAR INPUTS
  const clearInputs = ()=>setEmail('') && setPassword('')
  const clearErrors = ()=>setEmailError('') && setPasswordError('')
  //END CLEAR INPUTS
  //HANDLERS
  const loginHandler = ()=>{
    clearErrors()
    fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err=>{
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message)
              break
            case "auth/wrong-password":
              setPasswordError(err.message)
              break
            
          }
        })
  }

  const signUpHandler = ()=>{
    clearErrors()
    fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err=>{
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message)
              break
            case "auth/wreak-password":
              setPasswordError(err.message)
              break
            
          }
        })
  }

  const logOutHandler = ()=>{
    fire.auth().signOut()
  }

  const authListener =()=>{
    fire.auth().onAuthStateChanged(user=>{
      user?(setUser(user)&&clearInputs()):(setUser(""))
    })
  }
  //HANDLERS END
  //USEEFFECTS
  useEffect(() => {
    authListener()
  }, [])
  //END USEEFFECTS
  return (
    <div>
    {user?(
      <Hero logOutHandler={logOutHandler} email={email} setEmail={setEmail}/>
    ):(
<Login email={email}
           setEmail={setEmail} 
           password={password} 
           setPassword={setPassword}
           loginHandler={loginHandler}
           signUpHandler={signUpHandler}
           hasAccount={hasAccount}
           setHasAccount={setHasAccount}
           emailError={emailError}
           passwordError={passwordError}
           />
    )}
    </div>
  );
}

export default App;
