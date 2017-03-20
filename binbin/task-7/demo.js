var tree = [],
    transfer = [],
    btn = [];
tree = document.getElementsByTagName('div')[0];
btn = document.getElementsByTagName('input');

btn[0].onclick = function(){
  restart();
  beforeOrderTraverse(tree);
  animate();
};

btn[1].onclick = function(){
  restart();
  middleOrderTraverse(tree);
  animate();
};

btn[2].onclick = function(){
  restart();
  afterOrderTraverse(tree);
  animate();
};

function beforeOrderTraverse(tree) {
   if(tree !== null){
     transfer.push(tree);
     beforeOrderTraverse(tree.firstElementChild);
     beforeOrderTraverse(tree.lastElementChild);
   }
 }

 function middleOrderTraverse(tree) {
    if(tree !== null){
      middleOrderTraverse(tree.firstElementChild);
      transfer.push(tree);
      middleOrderTraverse(tree.lastElementChild);
    }
  }

  function afterOrderTraverse(tree) {
     if(tree !== null){
       afterOrderTraverse(tree.firstElementChild);
       afterOrderTraverse(tree.lastElementChild);
       transfer.push(tree);
     }
   }
 function restart (){
   for (variable of transfer) {
     variable.style.cssText = 'background:#fff';
   }
   transfer = [];
 }

 function animate (){
   var i = 0;
   var timer = setInterval(function(){
     if(i>=transfer.length){
       clearInterval(timer);
       return;
     }
     for (variable of transfer) {
       variable.style.cssText = 'background:#fff';
     }
     transfer[i].style.cssText = 'background:#ddd';
     i++;
   },500);
 }
