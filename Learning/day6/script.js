const body =document.getElementsByTagName("body");
body.style.width="800px";
body.style.border="2px solid yellow";
body.style.display="flex";
body.style.alignItems="center";
body.style.justifyContent="center";

const heading =document.getElementById("heading");
heading.style.color="Green";
console.log(heading);

const parag =document.getElementsByTagName("p")
for(let elem of parag){
    elem.style.width="100px";
    elem.style.border="2px solid red";
    elem.style.display="flex";
    elem.style.justifyContent="center";
    elem.style.alignItems="center";
    elem.style.padding="20px";

}

const paragraph =document.getElementsByClassName("para");
paragraph.style.color="yellow"