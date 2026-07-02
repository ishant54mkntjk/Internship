const container = document.querySelector("#container");
 container.style.border = "2px solid red";
 container.style.width= "500px";
 container.style.display="flex";
 container.style.alignItems="center";
 container.style.justifyContent="center";
 container.style.direction="row";
 container.style.gap="20px";


const button = document.querySelector("#button");

button.addEventListener("mouseenter", () => {
    button.style.border = "2px solid red";
});