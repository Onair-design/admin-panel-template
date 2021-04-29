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
    txtNewInputBox.innerHTML = "";
    

    // Finally put it where it is supposed to appear.
    document.getElementById("newElementId").appendChild(txtNewInputBox);
   
}




var state = false;
function toggle(){
    if(state){
        document.getElementById('password').
        setAttribute("type", "password");
        state = false;
    }
    else{
     document.getElementById('password').
        setAttribute("type", "text");
        state = true;
    }
}



var state = false;
function toggle2(){
    if(state){
        document.getElementById('password2').
        setAttribute("type", "password");
        state = false;
    }
    else{
     document.getElementById('password2').
        setAttribute("type", "text");
        state = true;
        
    }
}


