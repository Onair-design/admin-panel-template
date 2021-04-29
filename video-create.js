function createNewElement() {
    // First create a DIV element.
    var txtNewInputBox = document.createElement('div');
   

    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = "<input type='text' placeholder='Video url' id='newInputBox'>" + 
    "<input width='5%' type='text' placeholder='00:00:00' id='newInputBox'>";
    

    // Finally put it where it is supposed to appear.
    document.getElementById("newElementId").appendChild(txtNewInputBox);
   
}


