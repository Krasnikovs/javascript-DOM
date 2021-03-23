// Your JavaScript goes here.
window.addEventListener("load", function(){

    const toggleButton = document.getElementById('button')
    toggleButton.addEventListener('click', function(){

    var toggleText = document.getElementsByClassName('toggle_me')
    Array.from(toggleText).forEach(function(toggleText){
    if(toggleText.style.display === 'none') {
        toggleText.style.display = 'block';
    } else {
        toggleText.style.display = 'none'
    }
    })
  })
});
