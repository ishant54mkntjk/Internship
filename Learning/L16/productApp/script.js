const btn = document.getElementById("btn");
const inp = document.getElementById("inp")
const URL = "https://dummyjson.com/products/search?q=";
const box = document.querySelector(".box");
let productDATAS;
btn.addEventListener("click",()=>{
    //////////////
    if(inp.value!=""){
        box.innerHTML="";
        const APILINK = URL+inp.value;
        inp.value="";
        fetch(APILINK)
            .then((res)=>{
                return res.json()
            })
            .then((datas)=>{
                productDATAS=datas.products;
                console.log(datas.products);
                for(let data of productDATAS){
                    const card = document.createElement("div");
                    card.classList.add("card");
                    const img = document.createElement("img");
                    img.setAttribute("src",data.images[0]);
                    img.style.height="150px";
                    card.appendChild(img);

                    const p1 = document.createElement("p");
                    p1.innerText="Name: "+data.title;
                    card.appendChild(p1);

                    const p2 = document.createElement("p");
                    p2.innerText="Price: "+data.price;
                    card.appendChild(p2);

                    card.style.border="1px solid black"

                    box.appendChild(card);

                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    
})

const a1 = document.getElementById("a1");

a1.addEventListener("click",(req,res)=>{

})