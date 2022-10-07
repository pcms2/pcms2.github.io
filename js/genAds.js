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

let a = [];
let zzz = 1;
while(1) {
  let res = loadFile(`/img/banner120/${zzz}.png`)
  if(res == null) {
    break;
  }
  a.push(`/img/banner120/${zzz}.png`);
  zzz++;
}


let textBanner = `
<img src="${a[getRandomInt(a.length)]}">
`

let banner = document.querySelector('#banner120x500')
banner.insertAdjacentHTML("afterbegin", textBanner)