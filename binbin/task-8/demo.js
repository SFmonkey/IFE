window.onload = function(){
  var nodeList = [],
      root = document.getElementsByTagName('div')[0],
      btn = document.getElementsByTagName('button'),
      BFindex = 0;

  var traverseBF = function(node){
    if(node){
      nodeList.push(node);
      traverseBF(node.nextElementSibling,nodeList);
      node = nodeList[BFindex++];
      traverseBF(node.firstElementChild,nodeList);
    }
  };

  var traverseDF = function(node){
    if(node){
      nodeList.push(node);
      for (var i = 0; i < node.children.length; i++) {
        traverseDF(node.children[i]);
      }
    }
  };

  var animate = function(){
    var i =0,
        input = document.getElementsByTagName('input')[0].value;
    var timer = setInterval(function(){
      var len = nodeList.length;
      for (var j = 0; j < len; j++) {
        nodeList[j].style.cssText = 'background:#fff';
      }
      if(i<len){
        if (nodeList[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "") == input) {
          nodeList[i].style.cssText = 'background: rgb(61,61,61)';
          clearInterval(timer);
          return;
        }
          nodeList[i].style.cssText = 'background:#ddd';
          i++;
      }else {
          clearInterval(timer);
      }
    },500);
  };

  var restart = function(){
    for (variable of nodeList) {
      variable.style.cssText = 'background:#fff';
    }
    nodeList = [];
    BFindex = 0;
  }

    btn[0].onclick = function(){
      restart();
      traverseBF(root);
      animate();
    }
    btn[1].addEventListener('click',function(){
      restart();
      traverseDF(root);
      animate();
    });
}
