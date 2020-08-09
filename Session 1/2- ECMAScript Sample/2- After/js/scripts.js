/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

function showAlert() {
    var alertDetails = new NamedAlertDetails("Hello From The ECMAScript Sample !");
    alert(alertDetails.message);

    alert((new unamedAlertDetails()).customMessage());
}

//  named class
class NamedAlertDetails {
    constructor(message) {
        this.message = message;
    }
}

// unnamed Class
var unamedAlertDetails = class {
    // Constructor
    constructor() {}

    // Getter
    get message() {
        return this.message;
    }

    // Setter
    set message(text) {
        this.message = text;
    }

    // Method
    customMessage() {
        return "Custom Message";
    }
};