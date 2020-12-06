import React from 'react'





const Login = (props)=>{
    const {email,
           setEmail,
           password,
           setPassword,
           loginHandler,
           signUpHandler,
           hasAccount,
           setHasAccount,
           emailError,
           passwordError
        } = props
return(
   <section className="login">
    <div className="loginContainer">
        <div className="headerContainer">
        <h1>WELCOME</h1>
        </div>
        <label>Username</label>
        <input 
            type="text" 
            autoFocus 
            required 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input 
            type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
            {hasAccount? (
                <div>
                <button className="loginBtn" onClick={loginHandler}>Sign in</button>
                <p>Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up.</span></p>
                </div>
            ):(
                <div>
                <button className="loginBtn" onClick={signUpHandler}>Sign up</button>
                <p>Have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in.</span></p>
                </div>
            )}
        </div>
    </div>
   </section>
)
}



export default Login