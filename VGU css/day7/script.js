const container = document.querySelector("#container");
 container.style.border = "2px solid red";
 container.style.width= "500px";
 container.style.display="flex";
 container.style.alignItems="center";
 container.style.justifyContent="center";
 container.style.flexDirection = "column";
 container.style.gap="0px";


const button = document.querySelector("#button");

button.addEventListener("mouseenter", (e) => {
    button.style.border = "2px solid red";
    button.style.backgroundColor="lightgreen";
    button.style.color="blue";
    button.style.transform ="translateX(30px)";
    button.style.transform ="translateY(30px)";
});