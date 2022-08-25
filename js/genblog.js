var request = new XMLHttpRequest;
request.open('GET', './BLOG/1.md', true);

request.onload = function () {
    console.log(request.responseText);
};

request.send(null);