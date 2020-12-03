const getNotes = require("./notes")
const validator = require('validator')

const note = getNotes()
console.log(note)

console.log(validator.isURL('https/mead.io'))