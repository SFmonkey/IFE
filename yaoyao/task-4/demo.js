window.onload = function(){
  let pos = {
      x : 0 ,
      y : 0 ,
      deg : 0
    };
  let btn = document.getElementsByTagName('input')[1];
  let tag = document.getElementById('tag');
  let div = document.createElement('div');
  let head = document.createElement('div');
  let body = document.createElement('div');

  const create = () => {
    div.className = 'div';
    head.className = 'head';
    body.className = 'body';
    div.style.position = 'absolute';
    div.appendChild(head);
    div.appendChild(body);
    tag.appendChild(div);
  }

  pos.x = parseInt(Math.random() * 10) + 1;
  pos.y = parseInt(Math.random() * 10) + 1;

  const init = () => {
    create();
    current();
  }

  const current = () => {
    div.style.transform = 'rotate( '+ pos.deg + 'deg )';
    div.style.top = pos.x * 60 + 'px';
    div.style.left = pos.y * 60 + 'px';
  }

  const handle = (value) => {
    switch (value) {
      case 'GO':
        go();
        break;
      case 'TUN LEF':
        rotate(270);
        break;
      case 'TUN RIG':
        rotate(90);
        break;
      case 'TUN BAC':
        rotate(180);
        break;
      default:
        throw '没有这个命令!'
    }
  }

  const rotate = (value) => {
    pos.deg = (pos.deg + value) % 360;
    let current = document.getElementsByClassName('head')[0].parentNode;
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

  init(pos.x,pos.y);
}
