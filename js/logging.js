let a = document.querySelector('.vis');
let b = document.querySelector('.invis');
let b1 = document.querySelectorAll('.login')[0];
let b2 = document.querySelectorAll('.login')[1];

b1.onclick = function() {
  a.classList.toggle('invis');
  a.classList.toggle('vis');
  b.classList.toggle('vis');
  b.classList.toggle('invis');
  
};

b2.onclick = function() {
  a.classList.toggle('invis');
  a.classList.toggle('vis');
  b.classList.toggle('vis');
  b.classList.toggle('invis');
  
};