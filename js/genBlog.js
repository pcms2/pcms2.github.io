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

function zalupa(v) {
  let date="";
  for(let k = 1; k < v.length; ++k) {
    date+=v[k];
    if(k != v.length-1) {
      date+=" ";
    }
  }
  return date;
}

let a = [];
let zzz = 1;
while(1) {
  let res = loadFile(`BLOG/${zzz}.txt`)
  if(res == null) {
    break;
  }
  a.push(res);
  zzz++;
}

for(let i = a.length-1; i >= 0; --i) {
  let b = a[i].split('\n');
  // console.log(b);
  let date = null;
  let time = null;
  let title = null;
  let author = null;
  let tags = [];
  let j = 0;
  for(;j < b.length; ++j) {
    let v = b[j].split(' ');
    // console.log(v);
    if(v[0] == 'Author:') {
      author=zalupa(v);
      // alert(author);
    }
    else if(v[0] == "Date:") {
      date=zalupa(v);
    }
    else if(v[0] == "Title:") {
      title=zalupa(v);
    }
    else if(v[0] == "Time:") {
      time=zalupa(v);
    }
    else if(v[0] == "Tag:") {
      tags.push(zalupa(v));
    }
    else if(v[0] == "*/") {
      break;
    }
  }
  // console.log(tags);
  let blogHTML = `
  <div id="blogPost_${i}" class="blogPost">
  <a href="/view?id=${i}" id="blogPostTitle_${i}" class="blogPostTitle">
    ${title}
  </a>
  <div id="blogPostInfo_${i}" class="blogPostInfo">
    <span class="blogPostInfoItem blogPostDate">${date}</span>
    <span class="blogPostInfoItem blogPostTime">${time}</span>
    <span class="blogPostInfoItem blogPostAuthor">${author}</span>
  </div>
  <div class="blogPostContent">
    <p>
` 
  ++j;
  for(; j < b.length; ++j) {
    if(b[j] == "") {
      blogHTML+="</p><p>"
    }
    else {
      blogHTML+= b[j];
    }
  }
  blogHTML += `
  </p>
  </div>
</div>
`
  let content = document.querySelector('#contentCenter')
  content.insertAdjacentHTML("beforeend", blogHTML)
}

