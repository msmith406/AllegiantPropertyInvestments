


function DetailedProperty(PropertyObj, addressPart1, addressPart2, description) {
    this.PropertyObj = PropertyObj;
    this.addressPart1 = addressPart1;
    this.addressPart2 = addressPart2;
    this.description = description;
}

var MitchellDetailed = new DetailedProperty(Mitchell, "6304 Mitchell Creek Dr", "Flowery Branch, GA 30542", 
    "This completely updated stepless ranch is well located on a large private lot in a friendly subdivision."+
    " This low maintenance home has wide plank bamboo flooring, new lighting fixtures and a fresh coat of paint throughout."+
    " The sparkling kitchen offers brand new granite countertops, stainless steel appliances and new plumbing fixtures."+
    " The large backyard provides plenty of room to host guests, build that tree house or a game of hide and seek."+
    " Minutes from Greenspace, Park, NEGA Medical, Mall of GA, Lanier Islands, boat ramps, I-985 & 85. FHA offers accepted 6/27.");


    function processPropertyDetail(){
        document.getElementById("addr1").innerHTML=MitchellDetailed.addressPart1;
        document.getElementById("addr2").innerHTML=MitchellDetailed.addressPart2;
        document.getElementById("price").innerHTML=MitchellDetailed.PropertyObj.price;
        
        var img = document.createElement("img");
        img.src = MitchellDetailed.PropertyObj.picture;
        var src = document.getElementById("picture");
        src.appendChild(img);
        document.getElementById("description").innerHTML=MitchellDetailed.description;
    }

