/**
 * Created by ekoodi on 14.3.2017.
 */
function loadPage() {
    document.getElementById("myTable").innerHTML = tableFill();
}

///send inputs -> contact.js
function ContactInput(){
    return contactsApp.contact(
        document.getElementById('input-fn').value,
        document.getElementById('input-ln').value,
        document.getElementById('input-phone').value,
        document.getElementById('input-address').value,
        document.getElementById('input-city').value
    );
}

function inputResetBubbleGum(){                                                 ///that must be better way
    document.getElementById("input-fn").value = "";
    document.getElementById("input-ln").value = "";
    document.getElementById("input-phone").value = "";
    document.getElementById("input-address").value = "";
    document.getElementById("input-city").value = "";
}

function tableFill() {
   var person = JSON.parse(localStorage.getItem("contacts"));
    var localStorageObjectLength = Object.keys(person).length;
    var fillTable = "";
    var i;
    var tableStart = "<tr><td class='mdl-data-table__cell--non-numeric'>";
    var tableMid = "</td><td>";
    var tableEnd = "</td></tr>";
   var googleMap = "<p><a target='_blank' href='http://maps.google.com/?q=";
    var tableHeader = tableStart + "Firstname" + tableMid + "Lastname" + tableMid +  "Phone" + tableMid + "Address" + tableMid + "" + tableMid + "" + tableEnd;
    for (i = 0; i < localStorageObjectLength; i++) {
        var fullAddress = person[i].address + " " + person[i].city;
     var tableDeleteButton = "<button type='button' id=" + i + "; onclick='deleteTableButton(this.id)' class='mdl-button mdl-js-button mdl-button--raised'>Delete</button>";
     var tableUpdateButton = "<button type='button' id=" + i + "; onclick='updateTableButton(this.id)' class='mdl-button mdl-js-button mdl-button--raised'>Update</button>";
        fillTable += tableStart + person[i].firstName + tableMid + person[i].lastName + tableMid + person[i].phone + tableMid + googleMap + fullAddress + "'>" + fullAddress + "</a></p>" + tableMid + tableDeleteButton + tableMid + tableUpdateButton + tableEnd;
    }
    return tableHeader + fillTable;
}

function deleteTableButton(clicked_id) {
    if (confirm('Are you sure you want to delete this contact?')) {
        var persons = JSON.parse(localStorage.getItem("contacts"));
        var x = parseInt(clicked_id);
        var index = persons.indexOf(persons[x]);
        if (index > -1) {
            persons.splice(index, 1);
        }
        localStorage.setItem("contacts", JSON.stringify(persons));
     loadPage();
    }
}

function checkIfInputEmpty(){
   if(ContactInput().firstName == "" || ContactInput().lastName == "" || ContactInput().address == "" || ContactInput().city == ""){
       return true;
   }
}

function updateTableButton(clicked_id) {
    if (confirm('Are you sure you want to update this contact?')) {
        var x = parseInt(clicked_id);
        var persons = JSON.parse(localStorage.getItem("contacts"));
        var index = persons.indexOf(persons[x]);
        if (checkIfInputEmpty() == true) {
            alert("Fill all textfields");
        }
        else {
            if (index > -1) {
                persons[x] = ContactInput();
            }
            localStorage.setItem("contacts", JSON.stringify(persons));
            inputResetBubbleGum();
        }
        loadPage();
    }
}

function saveButton() {
    var person = JSON.parse(localStorage.getItem("contacts"));
if(checkIfInputEmpty() !== true) {
    if (typeof person !== 'undefined' && person !== null) {
        person.push(ContactInput());
        localStorage.setItem("contacts", JSON.stringify(person));
    } else {
        contacts.push(ContactInput());
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    alert("1 contact added");
    inputResetBubbleGum();
    loadPage();
}else{
    alert("Fill all textfields");
}
}

/**
 * Created by ekoodi on 15.3.2017.
 */
