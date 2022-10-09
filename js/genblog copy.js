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
  <div id="blogPostTitle_${i}" class="blogPostTitle">
    <a href="/read.html?id=${i}">
      ${title}
    </a>
  </div>
  <div id="blogPostInfo_${i}" class="blogPostInfo">
    <span id="blogPostDate_${i}" class="blogPostDate">${date}</span>
    <span class="blogPostSep"> | </span>
    <span id="blogPostTime_${i}" class="blogPostTime">${time}</span>
    <span class="blogPostSep"> | </span>
    <span id="blogPostAuthor_${i}" class="blogPostAuthor">${author}</span>
    <span class="blogPostSep"> | </span>
    <span id="blogPostTags_${i}" class="blogPostTags">
`
  for(let k = 0; k < tags.length; ++k) {
    blogHTML += `<a>${tags[k]}<\a> `
  }
  blogHTML += `</span>
  </div>
  <div id="blogPostContent_${i}" class="blogPostContent">
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
  let content = document.querySelector('#content')
  content.insertAdjacentHTML("beforeend", blogHTML)
}

