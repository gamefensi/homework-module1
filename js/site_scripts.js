var numOfPartners = 6;
var logos = [];
var fileNames = [
    "bustour",
    "cabinrental",
    "campingadv",
    "collegetours",
    "rentalbike",
    "tourgroup",
];
var imageList = [];
var image;
var openList = "<li class='partner'>";
var closeList = "</li>";

//Create a loop to create 6 images starting with index of 0
for (var i = 0; i < numOfPartners; i++) {
    logos.push("<img src='images/partner-" + fileNames[i] + ".png'>"); //Assemble file name into an image element and store in an array
    image = openList + logos[i] + closeList; //Assemble everything
    imageList.push(image); //Store the fully assembled code of each image list
}

//Display all six image codes stored in the array
document.getElementById("partners").innerHTML = imageList.join("");