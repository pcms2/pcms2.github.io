var a = []
while(1) {
  var request = new XMLHttpRequest;
  request.open('GET', `./BLOG/${i}.md`, true);

  let ok = true;
  request.onload = function () {
    
    if(request.status != 200) {
      ok = false;
    }
    a.push(request.responseText);
  };

  request.send(null);
  i+=1;
  console.log(i);
}

// for(var i = 0; i < a.length; ++i) {
//   let v = a[i].split('\n')

//   console.log(v);
// }
console.log