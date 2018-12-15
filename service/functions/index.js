const functions = require('firebase-functions')
const firebase = require('firebase-admin')

firebase.initializeApp(functions.config().firebase)
const db = firebase.database()

exports.getRoom = functions.https.onRequest((req, res) => {
  const roomSelected = req.body.viewRoomDetailSelected
  db.ref(`/roomDetails/${roomSelected}`)
    .once('value')
    .then(snapshot => {
      const roomDetails = snapshot.val()
      const attributesToSet = {
        noOfGuest: roomDetails.noOfGuest,
        description: roomDetails.description,
        amenities: roomDetails.amenities.join(', '),
        roomName: roomDetails.roomName
      }
      res.json({ set_attributes: attributesToSet })
    })
})

exports.hello = functions.https.onRequest((req, res) => res.send(`Hello World!`))
