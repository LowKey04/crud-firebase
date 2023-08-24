require('dotenv').config()
const { initializeApp, aplicationDefault } = require('firebase-admin/app')
const { getFirestore } =require('firebase-admin/firestore')

initializeApp({
    credential: aplicationDefault()
})

const db=getFirestore()

module.exports ={
    db
}