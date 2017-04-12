window.onload = function(){
  let radio = document.getElementsByClassName('radio-input')[0];
  let sel = document.getElementById('select-city');
  let select = document.getElementsByTagName('input');
  let content = document.getElementsByTagName('tr');

  let choose = () => {
    const data = {
      beijing: ["北京大学", "清华大学", "北京航空航天大学"],
      shanghai: ["复旦大学", "上海交通大学", "同济大学"],
      hangzhou: ["浙江大学", "杭州电子科技大学", "浙江工业大学"]
    }
    let city = document.getElementById('select-city');
    let college = document.getElementById('select-college');
    let selected = city.options[city.selectedIndex].value;
    college.innerHTML = '';
    for (let i = 0; i < data[selected].length; i++) {
      let opt = document.createElement('option');
      opt.value = data[selected][i];
      opt.innerHTML = data[selected][i];
      document.getElementById('select-college').appendChild(opt);
    }
  }

  let showInput = () => {
    content[0].style.display = 'none';
    content[1].style.display = 'none';
    if(select[0].checked){
      content[0].style.display = 'block';
    }else {
      content[1].style.display = 'block';
    }
  };

  showInput();
  radio.addEventListener('change',showInput);
  sel.addEventListener('change',choose);
}
