#!/usr/bin/env node
const path = require('path');
const release = require('../utils/release');

release({
  "getLastRelease": path.join(__dirname, '../plugins/getLastRelease'),
  "verifyConditions": [
    "condition-circle",
    "@semantic-release/github"
  ],
  "publish": [
    "@semantic-release/github"
  ]
});
