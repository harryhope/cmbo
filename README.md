# cmbo
Run multiple processes in one shell + stop all with ctrl+c.

cmbo is a simple cli tool useful for running multiple long-running processes. Output from scripts all go to stdout and ctrl+c stops everything at once.

## Usage
cmbo is available as an [npm package.](https://www.npmjs.com)
```
npm i -g cmbo
```

Once installed, use cmbo to run one or more commands by entering them as strings:
```bash
cmbo 'python -m SimpleHTTPServer' 'webpack -w'
```
