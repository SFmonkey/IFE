window.onload = function(){
  let pos = {
      x : 0 ,
      y : 0 ,
      deg : 0
    };
  let btn = document.getElementsByTagName('input')[1];
  let div = document.getElementById('div');

  const table = () => {
    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    let content = '';
    for (let i = 0; i < 11; i++) {
      content += '<tr>';
      for (let j = 0; j < 11; j++) {
        if(i === 0 && j !== 0){
          content += '<td>' + j + '</td>';
        }else if (i !== 0 && j === 0) {
          content += '<td>' + i + '</td>';
        }else {
          content += '<td></td>';
        }
      }
      content += '</tr>';
    }
    tbody.innerHTML = content;
  }

  const create = () => {
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
  }

  pos.x = parseInt(Math.random() * 10) + 1;
  pos.y = parseInt(Math.random() * 10) + 1;

  const init = () => {
    table();
    create();
    current();
  }

  const current = () => {
    div.style.transform = 'rotate( '+ pos.deg + 'deg )';
    div.style.top = pos.x * 60 + 'px';
    div.style.left = pos.y * 60 + 'px';
  }

  const dir = (expression) => {
    switch (expression) {
      case 'top':
        if( pos.x > 1 )
        pos.x --;
        break;
      case 'lef':
        if( pos.y > 1 )
        pos.y --;
        break;
      case 'bot':
        if( pos.x < 10 )
        pos.x ++;
        break;
      case 'rig':
        if( pos.y < 10 )
        pos.y ++;
        break;
    }
    div.style.top = pos.x * 60 + 'px';
    div.style.left = pos.y * 60 + 'px';
  }

  const handle = (value) => {
    switch (value) {
      case 'TRA TOP':
        dir('top');
        break;
      case 'TRA LEF':
        dir('lef');
        break;
      case 'TRA RIG':
        dir('rig');
        break;
      case 'TRA BOT':
        dir('bot');
        break;
      case 'MOV LEF':
        rotate(270);
        go();
        break;
      case 'MOV TOP':
        rotate(180);
        go();
        break;
      case 'MOV RIG':
        rotate(180);
        go();
        break;
      case 'MOV BOT':
        rotate(180);
        go();
        break;
      default:
        throw '没有这个命令!'
    }
  }

  const rotate = (value) => {
    pos.deg = (pos.deg + value) % 360;
    let current = document.getElementById('div');
    current.style.transform = current.style.webkitTransform = current.style.msTransform ='rotate('+ pos.deg +'deg)';
  }

  const go = () => {
    switch (pos.deg) {
      case 90:
        if( pos.y < 10 )
        pos.y ++;
        break;
      case 180:
        if( pos.x < 10 )
        pos.x ++;
        break;
      case 270:
        if( pos.y > 1 )
        pos.y --;
        break;
      case 0:
        if( pos.x > 1)
        pos.x --;
        break;
    }
      current();
  }

  btn.addEventListener('click',function(){
    let value = document.getElementsByTagName('input')[0].value.replace(/(^\s+)|(\s+$)/g,'').toUpperCase();
    handle(value);
  });

  init();
}
