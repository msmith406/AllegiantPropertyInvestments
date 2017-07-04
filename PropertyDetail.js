


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

var WarrenDetailed = new DetailedProperty(Warren, "4127 Warren Rd", "Flowery Branch, GA 30542", "Split level with 3 bedrooms, "
+"2 baths, two car garage, deck across the back of house, private wooded backyard. "
+"<b>This property is currently being renovated.</b>");

var OliverDetailed = new DetailedProperty(OliverCrest, "3617 Oliver Crest Rd", "Gainesville, GA 30506", 
"Perfect opportunity for first time home buyer or savvy investor. Easy to maintain all brick ranch home on almost 1/2 acre lot. "
+"Fenced level yard perfect for pets and entertaining. With some TLC this home will clean up nicely. "
+"<b>This property is currently being renovated.</b>")

function processPropertyDetail(propertyDet){
    document.getElementById("addr1").innerHTML=propertyDet.addressPart1;
    document.getElementById("addr2").innerHTML=propertyDet.addressPart2;
    document.getElementById("price").innerHTML=propertyDet.PropertyObj.price;
    
    var img = document.createElement("img");
    img.src = propertyDet.PropertyObj.picture;
    var src = document.getElementById("picture");
    src.appendChild(img);
    document.getElementById("description").innerHTML=propertyDet.description;
}

