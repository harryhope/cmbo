#!/usr/bin/env node
const program = require('commander')
const {spawn} = require('child_process')

program
  .version('0.1.0')
  .arguments('<commands...>')
  .action((commands) => {
    commands.map((command) =>
      spawn(command, {
        stdio: 'inherit',
        shell: true
      })
    )
  })
  .parse(process.argv)
