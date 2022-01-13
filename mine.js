let obbj=[
    {
        Name : "nike",
        Description : "nike story",
        Photo : "photo11.png",
        Create_add : new Date(2022/01/01),
        Category : "Sport",
        Active : true,
        Visit : 1000,
    },
   {
    Name : "nike",
    Description : "nike story",
    Photo : "photo11.png",
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

        
        let pth;
        if (elm.Photo = "photo11.png") {
          pth = "photo11.png";
        } else {
          pth = "";
        }
        document.getElementById("photoss").innerHTML=pth;
      

});
