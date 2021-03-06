import React from 'react';

const  WelcomeInfo = () => {
  return (
    <div id="welcome">
      {openOverlay()}
    <button className="xButton"
      onClick={closeOverlay} 
      style={{position: 'absolute', right: '2%', top: '3%', border: '0px', background: 'none', fontFamily: 'Quicksand', fontWeight: '600', fontSize: 
      '1.1em'}}> X </button>
    <div>
      <p>Welcome to travel destination keeper!</p>

      <p>Do you like travelling? Exploring new places? Living a life of an adventurer? 
      <p>Of course, we all do! :)</p>
      Unfortunately, with current situation our possibilities for an adventure are usually limited to going out for groceries, or taking a walk to the park.</p>

      <p>But all this will eventually end. And until it does - you can use all the time you want to plan your future travels :) This simple app allows you to search for places and add them to your "to visit" list.</p>
      <p>Feel free to move around and explore!</p>

      <p>The app uses Google Maps Javascript API as a provider for map, autocomplete and marker functionalities. It is developed using pure React. Decision to not use redux was aimed to enforce a strong design of parent/children strategy, plan data flow and distribute state adequately.</p>
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