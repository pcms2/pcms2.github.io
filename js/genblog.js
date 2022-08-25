var request = new XMLHttpRequest;
request.open('GET', './BLOG/', true);

request.onload = function () {
    console.log(request.responseText);
};

request.send(null);