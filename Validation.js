var form = document.getElementById('Form');
/*Click anywhere outside and Form will Close*/
  window.onclick = function(event) {
    if (event.target == form) {
      form.style.display = "none";
    }
  }