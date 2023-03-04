// #region Import and Setup
import admin from "firebase-admin";
import functions from "firebase-functions";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import { getAuth } from "firebase-admin/auth";

dotenv.config();

const sg_token = process.env.SENDGRID_API_KEY;
// #endregion

const sendMagicLink = functions.firestore
  .document('auth_email_link/{doc_id}')
  .onCreate(async (snap, context) => {

    const doc = snap.data();
    const email = doc.email;
    
    const link = await createEmailLink(email)
    const email_content = createEmailContent(email, link);

    sgMail.setApiKey(sg_token);

    return sgMail.send(email_content).then(() => {
                    console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })
});

export default sendMagicLink;

// #region createEmailLink(email)
const createEmailLink = async (email) => {

    const actionCodeSettings = {
        url: 'https://swearby.page.link/sign-in',
        handleCodeInApp: true,
        iOS: {
          bundleId: 'UncommonInc.SwearBy',
        },
        dynamicLinkDomain: 'swearby.page.link',
      };
    
    return getAuth().generateSignInWithEmailLink(email, actionCodeSettings);
};
// #endregion

// #region createEmailContent(email, link)

const createEmailContent = (email, link) => {

    var object = {
        to: email,
        from: 'info@uncommon.app', // Change to your verified sender
        subject: 'Sign in to SwearBy App',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<a href="' + link + '">link text</a>',
    };
    
    return object
};
// #endregion

