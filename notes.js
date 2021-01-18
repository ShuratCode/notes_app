const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>
{
    return "Your notes..."
}

const addNote = (title, body) =>
{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added")
    }
    else
    {
        console.log("Note title taken!")
    }

}

const removeNote = (title) =>
{
    const notes = loadNotes()
    if (notes.length === 0)
    {
        console.log("No notes found")
        saveNotes(notes)
    }
    else
    {
        const filteredNotes = notes.filter((note) => note.title !== title)
        if (filteredNotes.length !== notes.length)
        {
            console.log(chalk.green.inverse("Note title " + title + " Deleted"))
        }
        else
        {
            console.log(chalk.red.inverse("Can't find note with that title"))
        }

        saveNotes(filteredNotes)
    }
}

const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>
{
    try
    {
        const dataBuffer = fs.readFileSync('./notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e)
    {
        return []
    }
}

const listNotes = () =>
{
    list_of_notes = loadNotes()
    console.log(chalk.bold.underline("Your Notes: "))
    list_of_notes.forEach((note) => {
        console.log(note.title)
    })
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}