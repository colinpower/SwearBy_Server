import admin from "firebase-admin";
admin.initializeApp(functions.config().firebase);
import functions from "firebase-functions";




// ----- CALLABLE -----
// import requestEmailLink from "./request-email-link.js";
// export const request_email_link = requestEmailLink;

// ----- HTTPS -----
import sendMagicLink from "./auth-sendMagicLink.js";
export const send_magic_link = sendMagicLink;
