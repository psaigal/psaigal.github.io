 function processForm() {

    var listItem = document.getElementById("ToDo").value;
    if (listItem.length === 0) {
                alert("Please enter a valid input");
                return;
                }
	var listed = '<h3><input type="checkbox" />' + listItem + '</h3>';
    
    document.getElementById("List").innerHTML += listed;

}

