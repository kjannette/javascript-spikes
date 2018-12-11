const fs = require('fs');

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: "file", alias: "f", type: String}
]

const options = commandLineArgs(optionDefinitions);

const file = options.file;

const printLines = (err, data) => {
    console.log(data.toString());
};

fs.readFile(file, printLines);
