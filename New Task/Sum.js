let btnCLicked = 0; //reset
let sum = 0; //reset
let btnId = 3; //increase
let colorArray = ["red", "blue", "green"];
let colorIndex = 2; //reset

function addFunction(id) {
    let value = document.getElementById(id).innerHTML;
    btnCLicked++;
    sum += parseInt(value);
    if (btnCLicked == 2) {
        addNewButton(sum);
    }
    console.log(id + "clicked")
    //debugger ;
}
function addNewButton(val) {
    //debugger ;
    let btn = document.createElement("BUTTON");
    btn.innerHTML = val;
    btn.classList.add("btn");
    btn.id = "btn" + btnId;
    //btn.onclick = addFunction(btn.id);
    //debugger ;
    //$(btn.id).click( addFunction(btn.id));
    btn.addEventListener("click", function () {
        addFunction(btn.id);
    });

    btn.style.backgroundColor = colorArray[colorIndex];
    colorIndex++;
    if (colorIndex >= 3)
        colorIndex = 0;

    sum = 0;
    btnCLicked = 0;
    btnId++;

    // btn.var btn = document.createElement("BUTTON"); 
    //
    document.getElementById("here").appendChild(btn);
}
