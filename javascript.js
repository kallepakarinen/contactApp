/**
 * Created by ekoodi on 14.3.2017.
 */
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

function tableFill() {
   var person = JSON.parse(localStorage.getItem("contacts"));
    var localStorageObjectLength = Object.keys(person).length;
    var fillTable = "";
    var i;
    var tableStart = "<tr><td class='mdl-data-table__cell--non-numeric'>";
    var tableMid = "</td><td>";
    var tableEnd = "</td></tr>";
   var googleMap = "<p><a target='_blank' href='http://maps.google.com/?q=";
    var tableHeader = tableStart + "Firstname" + tableMid + "Lastname" + tableMid +  "Phone" + tableMid + "Address" + tableEnd;
    for (i = 0; i < localStorageObjectLength; i++) {
        var fullAddress = person[i].address + " " + person[i].city;
     var tableDeleteButton = "<button type='button' id=" + i + "; onclick='deleteTableButton(this.id)' class='mdl-button mdl-js-button mdl-button--raised'>Delete</button>";
     var tableUpdateButton = "<button type='button' id=" + i + "; onclick='updateTableButton(this.id)' class='mdl-button mdl-js-button mdl-button--raised'>Update</button>";
        fillTable += tableStart + person[i].firstName + tableMid + person[i].lastName + tableMid + person[i].phone + tableMid + googleMap + fullAddress + "'>" + fullAddress + "</a></p>" + tableMid + tableDeleteButton + tableMid + tableUpdateButton + tableEnd;
    }
    return tableHeader + fillTable;
}

function onLoadPage() {
    document.getElementById("myTable").innerHTML = tableFill();
}

function deleteTableButton(clicked_id) {
    var persons = JSON.parse(localStorage.getItem("contacts"));
    var x = parseInt(clicked_id);
    var index = persons.indexOf(persons[x]);
    if (index > -1) {
        persons.splice(index, 1);
    }
    localStorage.setItem("contacts", JSON.stringify(persons));
    document.getElementById("myTable").innerHTML = tableFill();
}

function updateTableButton(clicked_id) {
    var x = parseInt(clicked_id);
    var persons = JSON.parse(localStorage.getItem("contacts"));
    var index = persons.indexOf(persons[x]);
    if (ContactInput().firstName == "" || ContactInput().lastName == "" || ContactInput().address == "" || ContactInput().city == ""){
        alert("Fill all textfields");

    }
    else{
    if (index > -1) {
     persons[x] = ContactInput();
    }
    }
    localStorage.setItem("contacts", JSON.stringify(persons));
    document.getElementById("myTable").innerHTML = tableFill();

}

function saveButton() {
    var person = JSON.parse(localStorage.getItem("contacts"));
    if (typeof person !== 'undefined' && person !== null) {
         person.push(ContactInput());
        localStorage.setItem("contacts", JSON.stringify(person));
    }else{
        contacts.push(ContactInput());
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    document.getElementById("myTable").innerHTML = tableFill();
}

/**
 * Created by ekoodi on 15.3.2017.
 */
