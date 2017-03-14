window.onload = function () {
  var $ = function (id) {
    return document.getElementById(id);
  }

  var temp = [];

  $('insert').onclick = function () {
    var content = $('content').value.trim();
    var eles = content.split(/[^0-9a-zA-z\u4e00-\u9fa5]+/).filter(function(e){
      if(e.length !== 0){
        return true;
      }else{
        return false;
      }
    });
    temp = temp.concat(eles);

    expSub();
  }

  $('btn').onclick = function (){
    var find = $('find').value.trim();
    expSub(find);
  }

  var expSub = function (sub) {
    $('display').innerHTML = temp.map(function(e){
      if(sub.length !== 0){
        e = e.replace(new RegExp(sub,"g"),"<span class='select'>" + sub + "</span>")
      }
      return '<div>' + e + '</div>';
    }).join("");
  }
}
