window.onload = function(){
  let btn = document.getElementById('btn');
  let cover = document.getElementsByClassName('cover')[0];
  let leak = document.getElementsByClassName('leak')[0];
  let confirm = document.getElementById('confirm');
  let cancel = document.getElementById('cancel');
  let header = document.getElementsByClassName('header')[0];
  let resize = document.getElementById('resizable');

  const show = () => {
    cover.style.visibility = 'visible';
  }

  const hidden = () => {
    cover.style.visibility = 'hidden';
  }

  const stopHandler = (event) => {
    window.event?window.event.cancelBubble=true:event.stopPropagation();
  }

  const drag = (event) => {
    let disX = event.clientX - leak.offsetLeft,
    disY = event.clientY - leak.offsetTop;
    header.style.cursor = 'move';
    document.onmousemove = function (event) {
      let changeX = event.clientX - disX;
      let changeY = event.clientY - disY;
      leak.style.top = changeY +'px';
      leak.style.left = changeX +'px';
    }
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }

  const resizable = () => {
    let disX = event.clientX - leak.clientWidth,
        disY = event.clientY - leak.clientHeight;
    document.onmousemove = function (event) {
      let changeX = event.clientX - disX;
      let changeY = event.clientY - disY;
      leak.style.width = changeX  +'px';
      leak.style.height = changeY +'px';
    }
    document.onmouseup = function (event) {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }

  btn.addEventListener('click',show);
  cover.addEventListener('click',hidden);
  leak.addEventListener('click',() => {
    stopHandler();
  })
  confirm.addEventListener('click',hidden);
  cancel.addEventListener('click',hidden);
  header.addEventListener('mousedown',drag);
  resize.addEventListener('mousedown',resizable);
}
