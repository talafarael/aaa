
const bodylist=document.querySelector('.body')
fetch('https://my-json-server.typicode.com/talafarael/aaa/db').then(data=>data.json().then(res=>bild(res.products)))
function bild(res){console.log(res.length)
    var html = "";
    for (var i = 0; i < res.length; i++) {

      html +=`<div><h1> ${res[i].description} </h1>
        <img src="${res[i].photo_url}"></div>`;
    }
    bodylist.innerHTML = html

}