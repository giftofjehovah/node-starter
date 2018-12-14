const functions = require('firebase-functions')
const firebase = require('firebase-admin')

const config = {
  apiKey: 'AIzaSyAGoO96ia2-hRG20au-i3qIH23aiy8yvQ0',
  authDomain: 'byob-chatbot.firebaseapp.com',
  databaseURL: 'https://byob-chatbot.firebaseio.com'
}
firebase.initializeApp(config)
const db = firebase.database()

exports.getRoom = functions.https.onRequest((req, res) => {
  console.log(req.body)
  db.ref('/rooms')
    .once('value')
    .then(snapshot => console.log(snapshot.val()))
  res.json({ messages: [{ text: 'Hi man' }] })
})

exports.hello = functions.https.onRequest((req, res) => res.send(`Hello World!`))
