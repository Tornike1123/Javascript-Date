let obbj=[
    {
        Name : "nike",
        Description : "nike story",
        Photo : "",
        Create_add : new Date(2022/01/01),
        Category : "Sport",
        Active : true,
        Visit : 1000,
    },
   {
    Name : "nike",
    Description : "nike story",
    Photo : "",
    Create_add : new Date(),
    Category : "Sport",
    Active : true,
    Visit : 1000,
   }
]
obbj.forEach(elm => {
    let nike2;
    if (elm.Create_add = new Date()) {
        nike2 = new Date();
        
    }else{
        nike2 = "2022/01/01";
    }
   
    let vis;
    if (elm.Visit > 100) {
        vis = "პოპულარული";
        
    }else{
        vis = "არაა პოპულარული";
    }
    

    let sprt;
    if (elm.Category = "Sport" && elm.Active == true ) {
        sprt = "Sport";
    
    }else{
        sprt = 'sport';
    }
    

        
    let img;
    if (elm.Photo == '') {
        img = "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
    }else{
        img = elm.Photo;
    }

    let cards = `<div class="card" style="width: 18rem;">
    <img id="photoss" src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 id="time" class="card-title">${vis}</h5>
      <p id="seen" class="card-text">${sprt}</p>
      <p id="sport11">${nike2}</p>
    </div> 
  </div>
  `
       document.getElementById("app").innerHTML += cards;
      

});
