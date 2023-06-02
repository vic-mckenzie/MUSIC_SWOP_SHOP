function cartFunction(){
  // Get the modal
  var modal = document.getElementById("cartModal");

  // Get the button that opens the modal
  var btn = document.getElementById("cartBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("cartClose")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function addCartFunction(){
  // Get the modal
  var modal = document.getElementById("cartModal");

  // Get the button that opens the modal
  var btn = document.getElementById("addCartBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("cartClose")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


function menuFunction(){
  // Get the modal
  var modal = document.getElementById("menuModal");

  // Get the button that opens the modal
  var btn = document.getElementById("menuBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("menuClose")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function searchFunction(){
  // Get the modal
  var modal = document.getElementById("searchModal");

  // Get the button that opens the modal
  var btn = document.getElementById("searchBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("menuClose")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}




// MENU ITEMS
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}


// PRODUCT PAGE VIEW
function changeImageFront(){
  var img = document.getElementById('product-guitar-image');
  img.setAttribute('src','../ASSETS/guitar-closeup.png'); 
}

function changeImageFull(){
  var img = document.getElementById('product-guitar-image');
  img.src = "../ASSETS/guitar-full-black.png";
}

function changeImageBack(){
  var img = document.getElementById('product-guitar-image');
  img.src = "../ASSETS/guitar-full-back-black.png";
}

