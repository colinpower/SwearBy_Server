// #region Import and Setup
import admin from "firebase-admin";
import functions from "firebase-functions";
// #endregion

const createNewUser = functions.auth
    .user()
    .onCreate(async (user) => {

        return createUsersDocument(user);

    // }
});

export default createNewUser;

// #region createUsersDocument(user)
const createUsersDocument = async (user) => {

    //create their first loyalty program
    const object = {
        email: user.email,
        email_verified: user.emailVerified,
        name: {
            first: "",
            first_last: "",
            last: "",
        },
        phone: "",
        phone_verified: false,
        user_id: user.uid
    };

    return admin.firestore().collection("users").doc(user.uid).set(object);
};
// #endregion