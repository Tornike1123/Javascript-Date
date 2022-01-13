let obbj=[
    {
        Name : "nike",
        Description : "nike story",
        Photo : src = "photo11.png",
        Create_add : new Date(2022/01/01),
        Category : "Sport",
        Active : true,
        Visit : 1000,
    },
   {
    Name : "nike",
    Description : "nike story",
    Photo : src = "photo11.png",
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
    document.getElementById("time").innerHTML=nike2;
    let vis;
    if (elm.Visit > 100) {
        vis = "პოპულარული";
        
    }else{
        vis = "არაა პოპულარული";
    }
    document.getElementById("seen").innerHTML=vis;

    let sprt;
    if (elm.Category = "Sport" && elm.Active == true ) {
        sprt = "Sport";
    
    }else{
        sprt = 'sport';
    }
    document.getElementById("sport11").innerHTML=sprt;

    let phot = Document.getElementById("photoss").innerHTML = photoss;
    if (phot.src.match("")) {
        phot.src = "photo11.png";
    }else{
        phot.src = "photo11.png";
    }

});
