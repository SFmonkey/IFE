window.onload = function(){
  var nodeList = [],
      div = document.getElementsByTagName('div'),
      root = document.getElementsByTagName('div')[0],
      btn = document.getElementsByTagName('button'),
      BFindex = 0,
      selectDiv ;

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

  var stopHandler = function(event) {
      window.event?window.event.cancelBubble = true:event.stopPropagation();
  }
  var retraverse = function(){
    div = document.getElementsByTagName('div');
    for (var i = 0; i < div.length; i++) {
      (function(){
        var p =i;
        div[i].onclick = function(e) {
          for (var i = 0; i < div.length; i++) {
            div[i].style.cssText = 'background:#fff';
          }
          div[p].style.cssText = "background:#bbb";
          stopHandler(e);
          selectDiv = this;
        }
      })();
    }
  }

  var deleteDiv = function(){
    var parentDiv;
    if(selectDiv === undefined){
      console.log('请选择一个节点');
    }
    parentDiv = selectDiv.parentNode;
    parentDiv.removeChild(selectDiv);
  }

  var addDiv = function(){
    var input = document.getElementsByTagName('input')[1].value;
    var newDiv;
    if(selectDiv === undefined){
      console.log('请选择一个节点');
    }
    newDiv = document.createElement('div');
    newDiv.innerHTML = input;
    newDiv.className = 'child2';
    newDiv.style.cssText = 'background:#fff';
    selectDiv.appendChild(newDiv);
  }

    for (var i = 0; i < div.length; i++) {
        (function(){
          var p =i;
          div[i].onclick = function(e) {
            for (var i = 0; i < div.length; i++) {
              div[i].style.cssText = 'background:#fff';
            }
            div[p].style.cssText = "background:#bbb";
            stopHandler(e);
            selectDiv = this;
          }
        })();
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
    btn[2].addEventListener('click',function(){
      deleteDiv();
      retraverse();
    });
    btn[3].addEventListener('click',function(){
      addDiv();
      retraverse();
    })
}
