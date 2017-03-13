window.onload = function(){
  temp = [];

  var dis = document.getElementById('display');

  var $ = function(tag){
    return document.getElementsByTagName(tag);
  };

  var leftInsert = function(){
    if(!range()){
      if(temp.length >= 60){
        alert('over length!');
      }else{
        temp.unshift($('input')[0].value);
        display(temp);
      }
    }
  };

  var rightInsert = function(){
    if(!range()){
      if (temp.length >= 60) {
        alert('over length!');
      }else {
        temp.push($('input')[0].value);
        display(temp);
      }
    }
  };

  var leftOut = function(){
    if(!range()){
      if (!isEmpty(temp)) {
        temp.shift();
        display(temp);
      }else{
        alert('the queue is empty!');
      }
    }
  };

  var rightOut = function(){
    if(!range()){
      if(!isEmpty(temp)){
        temp.pop();
        display(temp);
      }else {
        alert('the queue is empty!');
      }
    }
  };

  var isEmpty = function(data){
    return (data.length === 0);
  };

  var display = function(data){
    var n = '';
    for (var i = 0; i < data.length; i++) {
      n += "<span style='height:"+ data[i] +"px;'></span>";
    }
    dis.innerHTML = n;
    delEvent();
  };

  var deleted = function(i){
    temp.splice(i,1);
    display(temp);
  };

  var delEvent = function(){
    for (var i = 0; i < dis.children.length; i++) {
      (function(){
        var p = i;
        dis.children[i].onclick = function(){
          deleted(p);
        }
      })()
    };
  }

  var range = function(){
    var num = parseInt($('input')[0].value,10);
    if( num >= 10 && num <= 100){
      return false;
    }
    $('input')[0].value = "Error";
    return true;
  }

  var swap = function(eles1,eles2){
    var tempMaopao = eles1.offsetHeight;
    eles1.offsetHeight = eles2.offsetHeight;
    eles1.style.height = eles2.offsetHeight + "px";
    eles2.offsetHeight = tempMaopao;
    eles2.style.height = tempMaopao + "px";
  }

  var swapZ = function(a,b){
    var tempT = 0;
    tempT = temp[a];
    temp[a] = temp[b];
    temp[b] = tempT;
  }

  var maopao = function(){
    var eles = $('span'),
        tempMaopao = 0,
        i = temp.length-1,
        j=0;
    var maopaoID = setInterval(function(){
      if(i==1){
        clearInterval(maopaoID);
      }
      if(j==i){
        j=0;
        i--;
      }
      if(eles[j].offsetHeight>eles[j+1].offsetHeight){
        swap(eles[j],eles[j+1]);
        swapZ(j,j+1);
      }
      j++;
    },100);
  }

  var xuanze = function(){
    var eles = $('span'),
        flag = 0,
        len = eles.length,
        i = 0,
        j = 1;
    var xuanzeID = setInterval(function(){
      if(i==len-1){
        clearInterval(xuanzeID);
      }
      if(j==len){
        swap(eles[flag],eles[i]);
        swapZ(flag,i);
        i++;
        flag = i;
        j = i+1;
      }
      if(eles[j] && eles[flag].offsetHeight>eles[j].offsetHeight){
        flag = j;
      }
      j++;
    },100);
  }

  var charu = function(){
      var eles = $('span'),
      len = eles.length,
      outer = true,
      inner = false,
      tempT = 0,
      tempZ = 0,
      i=1,
      j=0;

      var charuID = setInterval(function(){
        if(outer) {
            if(i == len) {
                clearInterval(charuID);
                return ;
            }
            if(eles[i].offsetHeight < eles[i-1].offsetHeight) {
                tempT = eles[i].offsetHeight;
                tempZ = temp[i];
                j = i - 1;
                outer = false;
                inner = true;
            } else {
                i++;
            }
        }
        if(inner) {
            if(j < 0 || eles[j].offsetHeight < tempT) {
                eles[j+1].style.height = tempT + "px";
                eles[j+1].offsetHeight = tempT;
                temp[j+1] = tempZ;
                i++;
                inner = false;
                outer = true;
            } else {
                eles[j+1].style.height = eles[j].style.height;
                eles[j+1].offsetHeight = eles[j].offsetHeight;
                temp[j+1]=temp[j];
                j--;
            }
        }
      },100);
  }

  $('input')[1].onclick = leftInsert;
  $('input')[2].onclick = rightInsert;
  $('input')[3].onclick = leftOut;
  $('input')[4].onclick = rightOut;
  $('input')[5].onclick = maopao;
  $('input')[6].onclick = xuanze;
  $('input')[7].onclick = charu;

}
