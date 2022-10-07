function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

let b = [];
let zzzz = 1;
while(1) {
  let res = loadFile(`/img/banner120/${zzzz}.png`)
  if(res == null) {
    break;
  }
  b.push(`/img/banner120/${zzzz}.png`);
  zzzz++;
}


let textBanner = `
<img src="${b[getRandomInt(b.length)]}">
`

let banner = document.querySelector('#banner120x500')
banner.insertAdjacentHTML("afterbegin", textBanner)