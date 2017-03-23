window.onload = function(){
  var sub = document.getElementById('sub'),
      tips = document.getElementById('tips'),
      inp = document.getElementById('input');

  var verification = function(){
    var input = document.getElementById('input').value.replace(/(^\s*)|(\s*$)/g,""),
        len = 0,
        temp = [];

    temp = input.split("");
    for (variable of temp) {
      if (variable.charCodeAt()<=0xFF) {
        len++;
      }else {
        len +=2;
      }
    }
    if (len>=4 && len<=16) {
      tips.innerText = '名称格式正确';
      tips.style.color = '#87d182';
      inp.style.border = "1px solid #87d182";
    }else if(len===0){
      tips.innerText = '姓名不能为空';
      tips.style.color = '#ff0000';
      inp.style.border = "1px solid #ff0000";
    }else{
      tips.innerText = '长度为4~16个字符';
      tips.style.color = "#aeaeae";
      inp.style.border = "1px solid #aeaeae"
    }
  }

  sub.addEventListener('click',verification);
}
