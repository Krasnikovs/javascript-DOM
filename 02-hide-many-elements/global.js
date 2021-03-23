window.addEventListener("load", function(){

  const hideButton = document.getElementById('button')
  hideButton.addEventListener('click', function(){

    var hideText = document.getElementsByClassName('hide_me')
    Array.from(hideText).forEach(function(hideText){
    hideText.style.display = 'none';
    })
  })
});