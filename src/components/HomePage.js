import React from 'react'
import { useNavigate } from 'react-router-dom'
function HomePage() {
  const navigate = useNavigate();
  const goToNews=()=>{
    navigate("/business")
  }
  return (
    <div>
      <div className="myHome">
        <h2>Welcome to</h2>
        <h1>NewsMonkey</h1>
        <h3>&ldquo;Stay Informed, Stay Empowered&rdquo;</h3>
        <div className="myText">
            <p>Welcome to our news app, where you'll discover a world of information at your fingertips. Stay up-to-date
                with breaking news, diverse perspectives, and empowering stories that matter most to you. Get informed
                and inspired every day with our easy-to-use, personalized news experience.</p>
        </div>
        <div className="myButtons">
            <button onClick={goToNews} style={{fontSize:"18px",fontWeight:"600"}}>Go to News &rarr;</button>
        </div>
    </div>
    </div>
  )
}

export default HomePage
