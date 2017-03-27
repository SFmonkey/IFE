window.onload = function(){
  var input = document.getElementsByTagName('input'),
      subm = document.getElementById('submit');
      tips = document.getElementsByClassName('tips'),
      inf = [['名称格式正确','名称不能为空','必填,长度为4~16个字符'],['密码格式正确','密码不能为空','必填,长度为4~16个字符'],['确认密码正确','密码不能为空','密码不匹配'],['邮箱格式正确','邮箱不能为空','邮箱格式错误'],['手机格式正确','手机不能为空','手机号码格式错误']];

  function verification(value,tag){
    var test,
        psd = document.getElementById('psd').value;
    value = value.replace(/(^\s*)|(\s*$)/g,'');
    switch (tag) {
      case 0:
        test = /^[a-zA-Z0-9]{4,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,'xx'));
      break;
      case 1:
        test = /^[\w]{4,16}$/.test(value);
      break;
      case 2:
        if(psd===value){
          test = true;
        }else {
            test = false;
        }
        break;
      case 3:
        test = /^([\w]+[-\_|\.]?)*[\w]+@([\w]+[-\_|\.]?)*[\w]+\.[a-zA-z]{2,3}/.test(value);
      break;
      case 4:
        test = /^[1][0-9]{10}$/.test(value);
      break;
    }
      return test;
  }
  function changeState(len,p){
    if(len===0){
      tips[p].innerText = inf[p][1];
      tips[p].style.color = '#ff0000';
      input[p].style.border = "1px solid #ff0000";
    }else {
      var test = verification(input[p].value,p);
      if (test) {
        tips[p].innerText = inf[p][0];
        tips[p].style.color = '#87d182';
        input[p].style.border = "1px solid #87d182";
      }else{
        tips[p].innerText = inf[p][2];
        tips[p].style.color = "#aeaeae";
        input[p].style.border = "1px solid #aeaeae"
      }
    }
  }
  for (var i = 0; i < tips.length; i++) {
    tips[i].style.display = 'none';
  }
  for (var i = 0; i < input.length-1; i++) {
      (function(){
        var p = i;
        input[i].onfocus = function(){
          tips[p].style.display = 'block';
        }
      })();
      (function(){
        var p = i;
        input[i].onblur = function(){
          var len = input[p].value.replace(/(^\s*)|(\s*$)/g,'').length;
          changeState(len,p);
        }
      })();
  }
  function sub(){
    var value=[],
        temp = document.getElementsByTagName('input');
    for (var i = 0; i < temp.length-1; i++) {
      value.push(temp[i].value);
    }
    value.forEach(function(currentValue,index,array){
      var len = currentValue.replace(/(^\s*)|(\s*$)/g,'').length;
      for (var i = 0; i < tips.length; i++) {
        tips[i].style.display = 'block';
      }
      changeState(len,index);
    });
  }
  subm.addEventListener('click',sub);
}
