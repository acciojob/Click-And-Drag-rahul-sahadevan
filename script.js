// Your code here.
let startX, scrollLeft;

document.querySelector('.items').addEventListener('mousedown', function (e) {
  startX = e.pageX - this.offsetLeft;
  scrollLeft = this.scrollLeft;
  this.style.cursor = 'grabbing';
});

document.querySelector('.items').addEventListener('mousemove', function (e) {
  if (!startX) return;
  const x = e.pageX - this.offsetLeft;
  const walk = (x - startX) * 3;
  this.scrollLeft = scrollLeft - walk;
});

document.querySelector('.items').addEventListener('mouseup', function () {
  startX = null;
  this.style.cursor = 'grab';
});