
const bodylist=document.querySelector('.body')
fetch('https://my-json-server.typicode.com/talafarael/aaa/db').then(data=>data.json().then(res=>bild(res.products)))
function bild(res){console.log(res.length)
    var html = "";
    for (var i = 0; i < res.length; i++) {

      html +=`
      
      <div class="card" style="width: 18rem;">
      <img src="${res[i].photo_url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${res[i].name}</h5>
        <p class="card-text">${res[i].description} </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  
   `;
    }
    bodylist.innerHTML = html

}