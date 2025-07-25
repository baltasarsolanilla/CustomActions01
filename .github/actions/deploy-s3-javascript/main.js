const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@action/exec');

function run() {
  core.notice('Hello from my JavaScript Custom Action');
}

run();
