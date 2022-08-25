var ind = 1;
var request = new XMLHttpRequest;
console.log("./BLOG/"+toString(ind)+".md");
request.open('GET', "./BLOG/"+toString(ind)+".md", true);

let ok = true;
request.onload = function () {
  
  if(request.status != 200) {
    ok = false;
  }
  if(ok) {
    a.push(request.responseText);
    console.log(request.responseText);
  }
};
  // if(ok == false) {
  //   break;
  // }

  // request.send(null);
  // ind+=1;
  // console.log(ind);
// }

// for(var i = 0; i < a.length; ++i) {
//   let v = a[i].split('\n')

//   console.log(v);
// }
// console.log