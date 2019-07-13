var div = document.getElementById('article');
window.addEventListener('scroll',function(){ myfunction(); })
function myfunction() {var articles = document.querySelectorAll('.article');
for (var i = 0; i < articles.length; i++) {
  if (window.scrollY >= '513') {
    articles[i].classList.remove('feader');
  }else if (window.scrollY < '213') {
    articles[i].classList.add('feader');
  }
} }
