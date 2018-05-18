
document.getElementById('target-drag1').addEventListener('dragstart', function(e){
    dragStart1(e);
  });
  
document.getElementById('target-drag2').addEventListener('dragstart', function(e){
  dragStart2(e);
});

document.getElementById('target-drag3').addEventListener('dragstart', function(e){
  dragStart3(e);
});

  document.getElementById('sec_1-1').addEventListener('dragenter', function(e){
    _dragEnter(e);
  });
  document.getElementById('sec_1-2').addEventListener('dragenter', function(e){
    _dragEnter(e);
  });
  document.getElementById('sec_2-1').addEventListener('dragenter', function(e){
    _dragEnter(e);
  });
  document.getElementById('sec_2-2').addEventListener('dragenter', function(e){
    _dragEnter(e);
  });
  document.getElementById('sec_2-3').addEventListener('dragenter', function(e){
    _dragEnter(e);
  });
  document.getElementById('sec_1-1').addEventListener('drop', function(e){
    _drop(e);
  });
  document.getElementById('sec_1-2').addEventListener('drop', function(e){
    _drop(e);
  });
  document.getElementById('sec_2-1').addEventListener('drop', function(e){
    _drop(e);
  });
  document.getElementById('sec_2-2').addEventListener('drop', function(e){
    _drop(e);
  });
  document.getElementById('sec_2-3').addEventListener('drop', function(e){
    _drop(e);
  });
  document.getElementById('sec_1-1').addEventListener('dragover', function(e){
    _dragOver(e);
  });
  document.getElementById('sec_1-2').addEventListener('dragover', function(e){
    _dragOver(e);
  });
  document.getElementById('sec_2-1').addEventListener('dragover', function(e){
    _dragOver(e);
  });
  document.getElementById('sec_2-2').addEventListener('dragover', function(e){
    _dragOver(e);
  });
  document.getElementById('sec_2-3').addEventListener('dragover', function(e){
    _dragOver(e);
  });
  
  var dropped1 = document.getElementById('float1');
  var dropped2 = document.getElementById('float2');
  var dropped3 = document.getElementById('float3');
  var section_1 = document.getElementById('set-ittinery__sec-1-1');
  var section_2 = document.getElementById('set-ittinery__sec-1-2');  
  
 
  

  function _dragEnter(event){     
       event.preventDefault();
       return true;
  }
  function _drop(event){
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));

    event.stopPropagation();
    return false;
  }
  function _dragOver(event){
      event.preventDefault();
  }

  
  function dragStart1(event) {
    event.dataTransfer.effectAllowed = 'move'; 
    document.getElementById('time1').className= "new-class1";
    event.dataTransfer.setData("Text", event.target.getAttribute('id'));
    dropped1.style.cssFloat = window.getComputedStyle(dropped1).cssFloat=== 'right' ? 'left' : 'right';
    
    section_1.style.display = window.getComputedStyle(section_1).display=== 'inline' ? 'none' : 'none';
    section_2.style.display = window.getComputedStyle(section_2).display=== 'inline' ? 'none' : 'none';

    return true;
  }

  function dragStart2(event) {
    event.dataTransfer.effectAllowed = 'move'; 
    event.dataTransfer.setData("Text", event.target.getAttribute('id'));
    document.getElementById('time2').className= "new-class2";
    dropped2.style.cssFloat = window.getComputedStyle(dropped2).cssFloat=== 'right' ? 'left' : 'right';
    section_1.style.display = window.getComputedStyle(section_1).display=== 'inline' ? 'none' : 'none';
    section_2.style.display = window.getComputedStyle(section_2).display=== 'inline' ? 'none' : 'none';

    return true;
  }

  function dragStart3(event) {
    event.dataTransfer.effectAllowed = 'move'; 
    event.dataTransfer.setData("Text", event.target.getAttribute('id'));
    document.getElementById('time3').className= "new-class3";
    dropped3.style.cssFloat = window.getComputedStyle(dropped3).cssFloat=== 'right' ? 'left' : 'right';
    section_1.style.display = window.getComputedStyle(section_1).display=== 'inline' ? 'none' : 'none';
    section_2.style.display = window.getComputedStyle(section_2).display=== 'inline' ? 'none' : 'none';

    return true;
  }

  
 