


function Property(name, picture, bed, bath, size, price, link) {
    this.name = name;
    this.picture = picture;
    this.bed = bed;
    this.bath = bath;
    this.size = size;
    this.price = price;
    this.link = link;
}


var Mitchell = new Property("Mitchell Creek", "images/MitchellCreek.jpg", "3", "2",
    "1188", "$167,000", "Mitchell.html");
var OliverCrest = new Property("Oliver Crest", "images/oliverCrest.jpg", "3", "1.5",
    "1040", "Coming Soon", "#");
var Warren = new Property("Warren Road", "images/WarrenRd.jpg", "3", "2", "1092", "Coming Soon", "#");
var Newton = new Property("Newton Drive", "images/Newton.jpg", "4", "3", "1977", "SOLD", "#");
var Tanglewood = new Property("Tanglewood", "images/tanglewood.jpg", "3", "2.5", "1852", "SOLD", "#");
var MountainRidge = new Property("Mountain Ridge", "images/mountainRidge.jpg", "3", "2.5", "2446", "SOLD", "#");

var card1 = ["propertyName1", "specs1", "picture1"];
var card2 = ["propertyName2", "specs2", "picture2"];
var card3 = ["propertyName3", "specs3", "picture3"];
var card4 = ["propertyName4", "specs4", "picture4"];
var card5 = ["propertyName5", "specs5", "picture5"];
var card6 = ["propertyName6", "specs6", "picture6"];


var houseArray = [Mitchell, OliverCrest, Warren, Newton, Tanglewood, MountainRidge];
var cardsArray = [card1, card2, card3, card4, card5, card6];
var soldArray = [Newton, Tanglewood, MountainRidge];


function CreateHouseCard(House, idArray) {

    var color = getColor(House.price);

    document.getElementById(idArray[0]).innerHTML = House.name;
    document.getElementById(idArray[0]).href = House.link;

    document.getElementById(idArray[1]).innerHTML = House.bed + " bed | " + House.bath + " bath | "
                                                    + House.size + " sq.ft.";
    document.getElementById(idArray[1]).href = House.link;

    document.getElementById(idArray[2]).innerHTML = "<div class='ui " + color + " huge ribbon label' >"
                                                    + House.price + "</div> ";
    var img = document.createElement("img");
    img.src = House.picture;
    var src = document.getElementById(idArray[2]);
    src.href = House.link;
    src.appendChild(img);

}

function LoadHouses(Houses, Cards, numOnPage) {
    for (i = 0; i < numOnPage; i++) {
        CreateHouseCard(Houses[i], Cards[i]);
    }
}


//Sets the banner color over the image
function getColor(price) {
    var color = "teal";
    if (price == "SOLD") {
        color = "orange";
    } else if (price == "Coming Soon") {
        color = "olive";
    }
    return color;
}



$(document).ready(function(){});

function processBuy() {
    LoadHouses(houseArray, cardsArray, 6);
}

function processIndex(){
    LoadHouses(houseArray, cardsArray, 2);
}

function processPastProjects(){
    LoadHouses(soldArray, cardsArray, soldArray.length);
}