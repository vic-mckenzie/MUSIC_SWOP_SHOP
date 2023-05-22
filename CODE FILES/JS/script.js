function validateForm() {
    let registeredNames = ["alice", "bob", "carol", "dave"];
    let inputName = document.querySelector('#name').value;
    if (registeredNames.indexOf(inputName) == -1){
        alert('name is not in our list');
        return false
    }
}

function validateForm() {
    let inputDate = document.querySelector('#when').value;
    let parsedDate = Date.parse(inputDate);
    if (parsedDate <= Date.now() ) {
        alert("Please choose a future date for delivery")
        //dont do alert - make new element if you want to slay
        return false
    }
}