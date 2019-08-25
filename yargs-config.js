const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    description: 'Adiciona uma nova nota',
    builder: {
        title:{
            describe: 'Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
});

yargs.command({
    command: 'remove',
    description: 'Remove uma nota',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
});

yargs.command({
    command: 'list',
    description: 'Lista as notas',
    handler: () => notes.listNotes()
});

yargs.command({
    command: 'read',
    description: 'Lê uma nota',
    builder: {
        title: {
            describe: "Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
});

module.exports=yargs;