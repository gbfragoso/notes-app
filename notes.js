const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    try {
        data = fs.readFileSync('notes.json');
        dataJSON = data.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

const addNote = (title, body) => {
    notes = getNotes();
    const hasDuplicated = notes.find(note => note.title === title);

    if(hasDuplicated == undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNewNote(notes);
        console.log(chalk.green.inverse("Note added"));
    } else {
        console.log(chalk.red.inverse("Duplicated title"));
    }
}

const saveNewNote = (notes) => {
    const noteJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', noteJSON);
};

const removeNote = (title) => {
    notes = getNotes();
    const notRemoved = notes.filter(note => note.title != title)

    if(notes.length > notRemoved.length) {
        console.log(chalk.green.inverse("Title " + title + " removed."));
        saveNewNote(notRemoved);
    } else {
        console.log(chalk.red.inverse("Title " + title + " not found."));
    }
};

const listNotes = () => {
    notes = getNotes();

    console.log(chalk.green.inverse("Your notes:"));
    notes.forEach(element => {
        console.log("Title: " + element.title);     
    });
}

const readNote = (title) => {
    notes = getNotes();
    const note = notes.find((note) => note.title === title);

    if(note != undefined) {
        console.log(chalk.green.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse(title + ' not found'));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}