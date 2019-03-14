# cmbo
Run multiple processes in one shell + stop all with ctrl+c.

cmbo is a simple cli tool useful for running multiple long-running processes. Output from scripts all go to stdout and ctrl+c stops everything at once.

## Usage
cmbo is available as an [npm package.](https://www.npmjs.com)

It's easiest to use cmbo with [npx](https://www.npmjs.com/package/npx). 

Use cmbo to run one or more commands by entering them as strings:
```bash
npx cmbo 'python -m SimpleHTTPServer' 'webpack -w'
```

Optionally, cmbo can be installed globally and added to your path:
```
npm i -g cmbo
```
