var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
  }
span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

var modal = document.getElementById("myModal2");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close2")[0];
btn.onclick = function() {
    modal.style.display = "block";
  }
span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var modal = document.getElementById("myModal3");
  var btn = document.getElementById("myBtn3");
  var span = document.getElementsByClassName("close3")[0];
  btn.onclick = function() {
      modal.style.display = "block";
    }
  span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }