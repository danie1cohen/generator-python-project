'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('python-project')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you briefly describe this thing?',
        default: ""
      },
      {
        type: 'input',
        name: 'author',
        message: 'Who\'s the author of this baby?',
        default: ''
      },
      {
        type: 'input',
        name: 'downloadUrl',
        message: 'Where\'s this gonna be hosted?',
        default: ''
      },
      {
        type: 'input',
        name: 'email',
        message: 'What\'s your email?',
        default: ''
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var files = [
      'projectName/__init__.py',
      'projectName/projectName.py',
      'bin/',
      'docs/',
      'tests/__init__.py',
      'tests/projectName_tests.py',
      '.coveragerc',
      '.gitignore',
      '.travis.yml',
      'README.md',
      'requirements.txt',
      'setup.cfg',
      'setup.py',
    ];

    for (var i = 0; i < files.length; i++) {
      var templatePath = files[i];
      var destPath = templatePath;

      if (destPath.includes('projectName') === true) {
        destPath = destPath.replace(
            'projectName', this.props.projectName
        );
      }

      if ( destPath.endswith('/') ) {
        this.fs.mkdir(destPath);
      } else {
        this.fs.copyTpl(
          this.templatePath(templatePath),
          this.destinationPath(destPath),
          this.props
        );
      }

    }
  }

  install() {
    this.installDependencies();
  }
};
