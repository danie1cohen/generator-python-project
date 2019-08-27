'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-python-project:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ projectName: "test_project" });
  });

  it('creates files', () => {
    assert.file(['requirements.txt']);
  });


  it('sets projectName folder', () => {
    assert.file(['test_project/__init__.py']);
  });

});
