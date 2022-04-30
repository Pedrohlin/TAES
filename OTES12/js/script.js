const request = new XMLHttpRequest();
request.open("GET","https://api.codetabs.com/v1/loc?github=Pedrohlin/TAES");
request.send();
request.onload = ()=> {
    console.log(request);
    if(request.status === 200) {
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request.status}`);
    }
}