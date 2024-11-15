let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    // Attach delete functionality to each new delete button
    delbtn.addEventListener("click", function() {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});



// get fact bolte

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let fact = await getfact();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";
// async function getfact() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("Error:", e);
//         return "No fact found";
//     }
// }