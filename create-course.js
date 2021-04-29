const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionList = document.querySelectorAll(".option");


selected.addEventListener("click" ,() => {
    optionsContainer.classList.toggle("active");
})


optionList.forEach ( o =>{
    o.addEventListener('click' , ()  => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    })
})



const selected1= document.querySelector(".selected1");
const optionsContainer1 = document.querySelector(".options-container1");

const option1List = document.querySelectorAll(".option1");


selected1.addEventListener("click" ,() => {
    optionsContainer1.classList.toggle("active1");
})


option1List.forEach ( o =>{
    o.addEventListener('click' , ()  => {
        selected1.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer1.classList.remove("active1");
    })
})





let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool-btn');
console.log(buttons);
for (let btn of buttons){
    console.log(btn);
    btn.addEventListener('click' ,() =>{
        let cmd =btn.dataset['command'];
        console.log(cmd);
        if(cmd === 'createlink'){
            let url = prompt("Enter the link here", "https:/\/\/")
            document.execCommand(cmd , false , url);
        } else {
            document.execCommand(cmd , false , null);
        }
    })
}




function createNewElement() {
    // First create a DIV element.
    var txtNewInputBox = document.createElement('div');
   

    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = "<input type='text' placeholder='Video url' id='newInputBox'>" ;
    

    // Finally put it where it is supposed to appear.
    document.getElementById("newElementId").appendChild(txtNewInputBox);
   
}


function createNewElement2() {
    // First create a DIV element.
    var txtNewInputBox = document.createElement('div');
   

    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = "<input type='text' placeholder='Video url' id='newInputBox'>" ;
    

    // Finally put it where it is supposed to appear.
    document.getElementById("newElementId2").appendChild(txtNewInputBox);
   
}

function createNewElement3() {
    // First create a DIV element.
    var txtNewInputBox = document.createElement('div');
   

    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = "<input type='text' placeholder='Video url' id='newInputBox'>" ;
    

    // Finally put it where it is supposed to appear.
    document.getElementById("newElementId3").appendChild(txtNewInputBox);
   
}


function createNewElement4() {
    // First create a DIV element.
    var txtNewInputBox = document.createElement('div');
   

    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = "<input type='text' placeholder='Video url' id='newInputBox1'>" +
    "<input class='number-input' placeholder='Order' id='newInputBox2' type='number'> " ; 
    

    // Finally put it where it is supposed to appear.
    document.getElementById("newElementId4").appendChild(txtNewInputBox);
   
}


