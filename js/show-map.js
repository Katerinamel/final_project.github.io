
  var hidden_area=document.getElementById("map-static");
    var hidden_map=document.getElementById("map");
function showMap(){
  
    hidden_area.style.display = window.getComputedStyle(hidden_area).display=== 'block' ? 'none' : 'none';
    hidden_map.style.display = window.getComputedStyle(hidden_map).display=== 'none' ? 'block' : 'none';
}

findonmap.addEventListener('click', showMap, false)
