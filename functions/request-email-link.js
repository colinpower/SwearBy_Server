// // #region Import and Setup
// import admin from "firebase-admin";
// import functions from "firebase-functions";
// import sgMail from "@sendgrid/mail";
// import dotenv from "dotenv";
// import { getAuth } from "firebase-admin/auth";
// // #endregion

// dotenv.config();

// const sg_token = process.env.SENDGRID_API_KEY;

// const requestEmailLink = functions.https.onCall(async (data, context) => {
 
//     // Message text passed from the client.
//     const email = data.email;

//     // Create the email link
//     const link = await createEmailLink(email)

//     // Create the email content
//     const email_content = createEmailContent(email, link);
    
//     // Set up SendGrid
//     sgMail.setApiKey(sg_token);

//     // Send the email
//     return sgMail.send(email_content).then(() => {
//                     console.log('Email sent')
//                     return { text: "SUCCESS" };
//                 })
//                 .catch((error) => {
//                     console.error(error)
//                     return { text: "ERROR" };
//                 })

// });

// export default requestEmailLink



// // #region createEmailLink(email)
// const createEmailLink = async (email) => {

//     const actionCodeSettings = {
//         url: 'https://swearby.page.link/sign-in',
//         handleCodeInApp: true,
//         iOS: {
//           bundleId: 'UncommonInc.SwearBy',
//         },
//         dynamicLinkDomain: 'swearby.page.link',
//       };
    
//     return getAuth().generateSignInWithEmailLink(email, actionCodeSettings);
// };
// // #endregion

// // #region createEmailContent(email, link)

// const createEmailContent = (email, link) => {

//     var object = {
//         to: email,
//         from: 'info@uncommon.app', // Change to your verified sender
//         subject: 'Your sign-in link',
//         text: 'and easy to do anywhere, even with Node.js',
//         html: '<a href="' + link + '">link text</a>',
//     };
    
//     return object
// };
// // #endregion

