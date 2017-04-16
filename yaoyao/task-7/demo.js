window.onload = function () {
  let tbody = document.getElementsByTagName('tbody')[0];
  let data = [
    ['姓名','语文','数学','英语','总分'],
    ['小明',80,90,70,240],
    ['小红',90,60,90,240],
    ['小亮',60,100,70,230]
  ]

  const init = () => {
    let content = '';
    tbody.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      content += '<tr>';
      for (let j = 0; j < data[i].length; j++) {
        content += '<td>'+ data[i][j];
        if( i===0 && j !==0 ){
          content += "<div class='sort'><div class='small'></div><div class='big'></div></div>";
        }
      }
      content += '</td></tr>';
    }
    tbody.innerHTML = content;

    let small = document.getElementsByClassName('small');
    let big = document.getElementsByClassName('big');

    for (let i = 0; i < data[0].length-1; i++) {
      small[i].addEventListener('click',function(){
        data = sort(i+1,'up');
        init();
      });
      big[i].addEventListener('click',function(){
        data = sort(i+1,'down');
        init();
      });
    }
  }
  const unique = (n,array) => {
    for (var i = 0; i < n.length; i++) {
      if(n[i][0] === (array[0])){
        return n;
      }
    }
    n.push(array);
  }

  const sort = (value,expression) => {
    let temp = [],
        result = [],
        sortNumber;
    for (let i = 1; i < data.length; i++) {
      temp.push(data[i][value]);
    }
    switch (expression) {
      case 'up':
          sortNumber = (a,b) => {
          return a-b
        }
        break;
      case 'down':
          sortNumber = (a,b) => {
          return b-a
        }
        break;
    }
    temp.sort(sortNumber);
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if(i===0 && j===0){
          result.push(data[i]);
        }
        if(data[j][value] === temp[i]){
          unique(result,data[j]);
        }
      }

    }
    return result;
  }

  init();
}
