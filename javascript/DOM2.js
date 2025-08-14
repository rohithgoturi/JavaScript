let divs = document.querySelectorAll(".box");

console.dir(divs);

//accessing individual divs using indexes\
divs[0].innerText = "New1";
divs[1].innerText = "New2";
divs[2].innerText = "New3";

//accessing all divs using for of loop
for(div of divs){
    div.innerText = "Div1";
    div.innerText = "Div2";
    div.innerText = "Div3";
}