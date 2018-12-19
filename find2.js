const cli = require('command-line-args');
const glob = require('glob');

const optionDefs = [
    {name: 'root', type: String, multiple: true, defaultOption: true},
    {name: 'name', type: String, multiple: true},
    {name: 'print', type: Boolean}
]

const options = cli(optionDefs);

let nameGlob = `**/${options.name}`

glob(nameGlob, {cwd: options.root[0]},
    (er, files) => {
        if (options.print) {
            console.log(files)
        }
    })
