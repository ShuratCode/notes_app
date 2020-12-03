const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Shaked\n')
fs.appendFileSync('notes.txt', "This is a second line")

