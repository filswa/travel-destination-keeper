import React from 'react';

const  WelcomeInfo = () => {
  return (
    <div 
      id="welcome"
    >
    {openOverlay()}
    <button className="xButton"
      onClick={closeOverlay} 
      style={{position: 'absolute', right: '2%', top: '3%', border: '0px', background: 'none', fontFamily: 'Quicksand', fontWeight: '600', fontSize: 
      '1.1em'}}> X </button>

    <div>
      <p>Welcome to travel destination keeper!</p>

      <p>Do you like travelling? Exploring new places? Living a life of an adventurer? 
      <p>Of course, we all do! :)</p>
      Unfortunately, with current situation our possibilities for an adventure are usually limited to going out for groceries, or taking a walk to the park, or forest (so rebel!).</p>

      <p>But all this will eventually end. And until it does - you can use all the time you have to plan your future travels :) This simple app allows you to search for places and add them to your "to visit" list. Feel free to move around and explore!</p>

      <p>The app uses Google Maps Javascript API as a provider for map, autocomplete and marker functionalities. It is developed using pure React. Decision to not use redux was aimed to enforce a design of parent/children strategy, plan data flow and distribute state adequately.</p>
    </div>
  </div>
  )
};

export default WelcomeInfo;

function openOverlay() {
  var canvas = document.createElement("canvas");
  canvas.className = "highlight";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext("2d");
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  document.body.appendChild(canvas);
  window.overlayCanvas = canvas;
}

function closeOverlay() {
  let elem = document.getElementById("welcome")
  window.overlayCanvas.style.opacity = 0;
  delete window.overlayCanvas;
  setTimeout(function() {
    elem.parentNode.removeChild(elem);
  }, 0);
}