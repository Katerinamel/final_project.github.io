var target = document.getElementById('target');
var canvas = document.getElementById('canvas');
target.addEventListener('click', function() {
 canvas.style.display = window.getComputedStyle(canvas).display === 'none' ? 'inline-block' : 'none';
});

var target1 = document.getElementById('target1');
var canvas1 = document.getElementById('canvas1');
target1.addEventListener('click', function() {
 canvas1.style.display = window.getComputedStyle(canvas1).display === 'none' ? 'inline-block' : 'none';
});

var target2 = document.getElementById('target2');
var canvas2 = document.getElementById('canvas2');
target2.addEventListener('click', function() {
 canvas2.style.display = window.getComputedStyle(canvas2).display === 'none' ? 'inline-block' : 'none';
});


var pagination1 = document.getElementById('page-1-pagination');
var pagination2 = document.getElementById('page-2-pagination');
var pagination3 = document.getElementById('page-3-pagination');

var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');

pagination2.addEventListener('click', function() {
 page1.style.display = window.getComputedStyle(page1).display === 'inline-block' ? 'none'  : 'none';
 page2.style.display = window.getComputedStyle(page2).display === 'none' ? 'inline-block' : 'none';
 page3.style.display = window.getComputedStyle(page3).display === 'none' ? 'none' : 'none' ;
});

pagination3.addEventListener('click', function() {
 page1.style.display = window.getComputedStyle(page1).display === 'inline-block' ? 'none' : 'none';
 page2.style.display = window.getComputedStyle(page2).display === 'inline-block' ? 'none' : 'none';
 page3.style.display = window.getComputedStyle(page3).display === 'none' ? 'inline-block' : 'none';
});
pagination1.addEventListener('click', function() {
  page1.style.display = window.getComputedStyle(page1).display === 'none' ? 'inline-block' : 'none';
  page2.style.display = window.getComputedStyle(page2).display === 'inline-block' ? 'none' : 'none';
  page3.style.display = window.getComputedStyle(page3).display === 'inline-block' ? 'none' : 'none';
 });

var target3 = document.getElementById('target3');
var canvas3 = document.getElementById('canvas3');
target3.addEventListener('click', function() {
 canvas3.style.display = window.getComputedStyle(canvas3).display === 'none' ? 'inline-block' : 'none';
});

var target4 = document.getElementById('target4');
var canvas4 = document.getElementById('canvas4');
target4.addEventListener('click', function() {
 canvas4.style.display = window.getComputedStyle(canvas4).display === 'none' ? 'inline-block' : 'none';
});

var target5 = document.getElementById('target5');
var canvas5 = document.getElementById('canvas5');
target5.addEventListener('click', function() {
 canvas5.style.display = window.getComputedStyle(canvas5).display === 'none' ? 'inline-block' : 'none';
});

var target6 = document.getElementById('target6');
var canvas6 = document.getElementById('canvas6');
target6.addEventListener('click', function() {
 canvas6.style.display = window.getComputedStyle(canvas6).display === 'none' ? 'inline-block' : 'none';
});
var target7 = document.getElementById('target7');
var canvas7 = document.getElementById('canvas7');
target7.addEventListener('click', function() {
 canvas7.style.display = window.getComputedStyle(canvas7).display === 'none' ? 'inline-block' : 'none';
});
var target8 = document.getElementById('target8');
var canvas8 = document.getElementById('canvas8');
target8.addEventListener('click', function() {
 canvas8.style.display = window.getComputedStyle(canvas8).display === 'none' ? 'inline-block' : 'none';
});

