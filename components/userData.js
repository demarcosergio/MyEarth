const firebase = require("firebase");
require("firebase/firestore");
let userData=[]; 
let user_institute;
/*
const users =  firebase.firestore().collection('users').get()   
.then(users?.forEach(doc => {
    console.log(doc?.id, '=>', doc?.data()); 
    userData.push(doc.data());     
}));
*/

    async function getAll(){
        
        try {
            let currentUserUID = firebase.auth().currentUser.uid;
            let doc = await firebase.firestore().collection('users').doc(currentUserUID).get();
            user_institute = doc.data().institute;
            //let users = await firebase.firestore().collection('users').get()
            const users =  await firebase.firestore().collection('users').get();
            userData= await[]; 
            
          
            users?.forEach(doc => {
                //console.log(doc?.id, '=>', doc?.data()); 
                if(doc.data().institute == user_institute){
                    userData.push(doc.data());
                }
                //userData.push(doc.data());
                //console.log('what is happening');
            });
            
        } catch (err){
        Alert.alert('There is an error.', err.message)
        }
    }
   
export {getAll,userData,user_institute}