let ind = 1;
let request = new XMLHttpRequest;
console.log("./BLOG/"+ind+".md");
request.open('GET', "./BLOG/"+ind+".md", true);

let a = []
let ok = true;
request.onload = function () {
  alert(1111)
  if(request.status != 200) {
    ok = false;
  }
  if(ok) {
    a.push(request.responseText);
    console.log(request.responseText);
  }
};

// console.log(a)
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