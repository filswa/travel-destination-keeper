import React from 'react';

const WelcomeInfo = () => {
  return (
    <div id="welcome">
      {openOverlay()}
    <button className="xButton"
      onClick={closeOverlay} 
      style={{position: 'absolute', right: '2%', top: '3%', border: '0px', background: 'none', fontFamily: 'Quicksand', fontWeight: '600', fontSize: 
      '1.1em'}}> X </button>
    <div className="welcomeTextContainer">
      <p>Welcome to travel destination keeper!</p>

      <p>Do you like travelling? Exploring new places?<br></br>Of course, we all do! :)</p>

      <p>This simple app allows you to search for places and add them to your "to visit" list. Feel free to move around and explore!</p>

      <p>The app uses Google Maps Javascript API as a provider for Map</p>
      <p>source: <a href="https://github.com/filswa/travel-destination-keeper"> https://github.com/filswa/travel-destination-keeper</a></p>
    </div>
  </div>
  )
};

export default WelcomeInfo;

function openOverlay() {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "canvas")

  canvas.className = "highlight";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let ctx = canvas.getContext("2d");
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  document.body.appendChild(canvas);
  window.overlayCanvas = canvas;
  canvas.onclick = closeOverlay;
}

function closeOverlay() {
  let welcomeDiv = document.getElementById("welcome")
  let canvas = document.getElementById("canvas")

  window.overlayCanvas.style.opacity = 0;
  delete window.overlayCanvas;
  canvas.parentNode.removeChild(canvas)
  welcomeDiv.parentNode.removeChild(welcomeDiv);
}