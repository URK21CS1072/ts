const firebaseConfig = {
    apiKey: "AIzaSyDLAejGJ6EkNxHirZ-FddfJRaVH-N9w6v4",
    authDomain: "techsavants-bdf20.firebaseapp.com",
    projectId: "techsavants-bdf20",
    storageBucket: "techsavants-bdf20.appspot.com",
    messagingSenderId: "946186267157",
    appId: "1:946186267157:web:90019e46b74cd4bbbcfc1c",
    measurementId: "G-3CM8X2JZDN"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

function countDocuments(collectionName, elementId) {
    let collectionRef = db.collection(collectionName);
    collectionRef.get()
        .then(snapshot => {
            const count = snapshot.size; // Get the count of documents in the collection
            document.getElementById(elementId).innerText = count;
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
}

countDocuments('garbage_objects', 'garbage-count');
countDocuments('speed_bump', 'speed-bumps-count');
countDocuments('tl', 'tl-count');
countDocuments('unlined_objects', 'unlined-objects-count');

// Calculate and display the total count of all documents
const totalCountElement = document.getElementById('total-count');
const collections = ['garbage_objects', 'speed_bump', 'tl', 'unlined_objects'];
let totalDocuments = 0;

collections.forEach(collection => {
    db.collection(collection).get()
        .then(snapshot => {
            totalDocuments += snapshot.size;
            totalCountElement.innerText = totalDocuments;
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
});