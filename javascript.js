/**
 * Created by ekoodi on 14.3.2017.
 */
///send inputs -> contact.js
function ContactInput(){
    return contactsApp.contact(
        document.getElementById('input-fn').value,
        document.getElementById('input-ln').value,
        document.getElementById('input-phone').value,
        document.getElementById('input-address').value
    );
}
function tableFill() {
   var person = JSON.parse(localStorage.getItem("contacts"));
    var localStorageObjectLength = Object.keys(person).length;
    var fillTable = "";
    var i;
    var tableStart = "<tr><td>";
    var tableMid = "</td><td>";
    var tableEnd = "</td></tr>";
    var tableHeader = tableStart + "Firstname" + tableMid + "Lastname" + tableMid +  "Phone" + tableMid + "Address" + tableEnd;
    for (i = 0; i < localStorageObjectLength; i++) {
        tableDeleteButton = "<button type='button' id=" + i + "; onclick='deleteTableButton(this.id)' class='btn btn-info btn-block'>Delete</button>";
        fillTable += tableStart + person[i].firstName + tableMid + person[i].lastName + tableMid + person[i].phone + tableMid + person[i].address + tableMid + tableDeleteButton + tableEnd;
    }
    return tableHeader + fillTable;
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

function saveButton() {
    if (typeof(Storage) !== "undefined") {
        contacts.push(ContactInput());
        localStorage.setItem("contacts", JSON.stringify(contacts));
        document.getElementById("myTable").innerHTML = tableFill();
    } else {
        document.getElementById("result").innerHTML = 'Somethings wrong';
    }
}

/**
 * Created by ekoodi on 15.3.2017.
 */
