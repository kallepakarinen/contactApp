/**
 * Created by ekoodi on 20.3.2017.
 */
///get inputs and set values
contactsApp.contact = function (firstName, lastName, phone, address) {
    return {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address
    }
    console.log(this);
};


