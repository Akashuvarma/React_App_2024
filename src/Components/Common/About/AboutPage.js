import React from "react";
import './About.css'
function AboutPage() {
  return (
    <>
      <div className="About">
        <div className="broken-wall-container">
          <img
            src='https://media.istockphoto.com/id/535536045/photo/broken-concrete-wall-isolated-on-black-background.jpg?s=1024x1024&w=is&k=20&c=tm7izAThxFXerx_RKeK81vKtHQTdRG7RxsSF1vOhyIw='
            alt="Broken Wall"
            className="broken-wall-image"
          />
        </div>
        <div className="content">
          <h2>About Us</h2>
          <p>We are a team dedicated to creating awesome React applications.</p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
