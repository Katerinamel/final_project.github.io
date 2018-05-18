
function getElement() {
  var a = document.querySelectorAll(".new-class1#time1").length ? parseInt(document.querySelectorAll(".new-class1#time1")[0].innerText) : 0;    
  var b = document.querySelectorAll(".new-class2#time2").length ? parseInt(document.querySelectorAll(".new-class2#time2")[0].innerText) : 0;
  var c = document.querySelectorAll(".new-class3#time3").length ? parseInt(document.querySelectorAll(".new-class3#time3")[0].innerText) : 0;   

 result.innerText = a + b + c; 
};

// check.addEventListener('click', getElement, false);

setInterval(getElement, 400);