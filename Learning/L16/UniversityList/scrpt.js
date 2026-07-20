const URl = "http://universities.hipolabs.com/search?country="

const btn = document.getElementById("btn");
const inp = document.getElementById("inp");
const box = document.querySelector(".box");

btn.addEventListener("click",()=>{
    const APILINK = URl+ inp.value;
    inp.value="";
    console.log(APILINK);
    fetch(APILINK)
        .then((res)=>{
            return res.json()
        })
        .then((datas)=>{
            // console.log(datas);
            /////////////////////////////

            box.innerHTML="";
            const div1 = document.createElement("div");
            const head1 = document.createElement("h2");
            head1.style.width="40vw"
            head1.innerText="University Name"
            const head2 = document.createElement("h2");
            head2.innerText= "State"
            head2.style.width="20vw"
            const head3 = document.createElement("h2");
            head3.innerText="Web Page";
            head3.style.width="30vw"
            div1.appendChild(head1);
            div1.appendChild(head2);
            div1.appendChild(head3);
            div1.style.display="flex";
            div1.style.justifyContent="space-between"
            box.appendChild(div1);
            for(let data of datas){
                console.log(data);
                const div = document.createElement("div");
                const p1 = document.createElement('p');
                p1.innerText=data.name;
                p1.style.width="40vw"
                const p2 = document.createElement('p');
                p2.innerText= data["state-province"];
                p2.style.width="20vw"
                const p3 = document.createElement('p');
                p3.style.width="30vw"
                p3.innerText = data.web_pages[0];
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.style.border="2px solid green";
                div.style.display="flex";
                div.style.justifyContent="space-between"
                box.appendChild(div);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
})