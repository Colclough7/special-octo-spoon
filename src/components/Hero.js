import React from 'react'



const Hero = ({logOutHandler,email,setEmail})=>{

    return(
        <section className="hero">
        <nav>
            <h2>Welcome {email}</h2>
            <span  className="heroBtn" onClick={logOutHandler}>Logo Out</span>
        </nav>
        </section>
    )
}

export default Hero