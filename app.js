const chalk = require('chalk')
const getNotes = require('./notes')

const command = process.argv[2]

if (command === 'add')
{
    console.log('Adding node')
}
else if (command === 'remove')
{
    console.log('Remove note')
}