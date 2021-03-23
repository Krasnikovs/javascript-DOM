window.addEventListener("load", function(){

  const hideButton = document.getElementById('button')
  hideButton.addEventListener('click', function(){

    var showText = document.getElementsByClassName('show_me')
    Array.from(showText).forEach(function(showText){
    showText.style.display = 'block';
    })
  })
});