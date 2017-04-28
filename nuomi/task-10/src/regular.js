const regphone = (val) => {
  return /^1[34578]\d{9}$/.test(val);
};

const repWord = (val) => {
  return /\b([a-zA-Z]+)\b\s+\1\b/.test(val);
};

const regEmail = (val) => {
  return /^\w+([_]\w+)*@\w+([-]\w+)*\.\w+([.]\w+)*$/.test(val);
};

const regURL = (val) => {
  return /^([http|https]:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-:@&?=+,.!/~*%$]*)?$/.test(val);
};

const regPassword = (val) => {
  return /^[a-zA-Z]\w{5,17}$/.test(val);
};

const regChinese = (val) => {
  let pattern = /([\u4e00-\u9fff])/gi;
  let result = val.match(pattern);
  return result.join('');
};

const regHtml = (val) => {
  let pattern = /<(.*)>(.*)<\/(\1)>|<(.*)\/>/gi;
  return pattern.test(val);
};

// String.prototype.trim = (val) => {
//   return val.replace(/^(\s*)|(\s*)$/,'');
// };

const regSpaceLine = (val) => {
  let pattern = /\n[\s|]*\r/gi;
  return pattern.test(val);
}
