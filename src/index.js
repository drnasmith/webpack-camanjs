import _ from 'lodash'
import profile from 'images/profile.jpg'
var caman = require('caman')

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  function addCanvas() {
      console.log("LODASH:")
      console.log(_)
      console.log("CAMAN:")
      console.log(Caman)
        Caman("#canvas-id", profile, function () {
        // manipulate image here
        this.brightness(5).render();
      });      
  }
  document.body.appendChild(component());

  document.getElementById('addImage').addEventListener("click", function() {
    console.log("Click Me")
    addCanvas()
  })