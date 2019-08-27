#!/usr/bin/env python

try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

config = {
    'description': '<%= projectName %>',
    'author': '<%= author %>',
    'url': '<%= downloadUrl %>',
    'download_url': '<%= downloadUrl %>',
    'author_email': '<%= email %>',
    'version': '0.0.1',
    'install_requires': [],
    'packages': ['<%= projectName %>'],
    'scripts': [],
    'name': '<%= projectName %>'
}

setup(**config)
