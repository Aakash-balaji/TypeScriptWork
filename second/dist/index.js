"use strict";
class userInputComponents {
    constructor() {
        this.antiCSRFToken = generateAntiCSRFToken();
    }
    handleUserInput(input) {
        const sanitizedInput = sanitizeInput(input);
        // sendRequestToServer(sanitizedInput, this.antiCSRFToken);
        if (sanitizedInput !== '') {
            sendRequestToServer(sanitizedInput, this.antiCSRFToken);
        }
        else {
            console.error('Error: Invalid input. Request not sent to the server.');
        }
    }
}
function generateAntiCSRFToken() {
    return 'randomTOken123';
}
// function sanitizeInput(input:string):string{
//     return input.replace(/<script.*?>.*?<\/script>/gi, '');
// }
function sanitizeInput(input) {
    // Check if the input starts and ends with a script tag
    const isScriptTag = /^<script.*?>.*?<\/script>$/i.test(input);
    // If it's a script tag, reject the input
    if (isScriptTag) {
        console.error('Error: Input cannot start and end with a script tag.');
        return '';
    }
    // Otherwise, perform the general sanitization
    return input.replace(/<script.*?>.*?<\/script>/gi, '');
}
function sendRequestToServer(input, antiCSRFToken) {
    console.log(`sending requesst to server with input ${input} and anit-CSRF token: ${antiCSRFToken}`);
}
const userInput = new userInputComponents();
userInput.handleUserInput('alert("XSS attack!");');
