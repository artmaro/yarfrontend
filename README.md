[![GitHub license](https://img.shields.io/badge/license-MIT-purple.svg)](https://raw.githubusercontent.com/artmaro/artmaro.github.io/develop/LICENSE)
[![Build Status](https://travis-ci.org/artmaro/artmaro.github.io.svg?branch=develop)](https://travis-ci.org/artmaro/artmaro.github.io)

# [Yappi days](https://yappidays.ru)

Source code of [YappiDays.ru](https://yappidays.ru)

## Preview

[![YappiDays Preview](https://preview.ibb.co/bsm3wp/screencapture_yappidays_ru_2018_09_22_21_46_57.png)](https://yappidays.ru/)

**[View Live](https://yappidays.ru/)**

## Download and Installation

To begin develop this site, just clone the repo:
```
git clone https://github.com/artmaro/artmaro.github.io.git
cd artmaro.github.io
git checkout develop
```

## Usage

```
npm install
npm run develop  // start developer sever
npm run build  // build site to .html .css and .js files
```

### Basic Usage

After downloading, simply edit the HTML and SCSS files included with the site in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open `index.html` file in master branch.

### Advanced Usage

After installation, run `npm install` and then run `npm run develop` which will open up a preview of the site in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `webpack.config.js` to see which tasks are included with the dev environment.

#### webpack Tasks

- `webpack --mode production` the default task that builds everything
- `webpack-dev-server --mode development --open` opens the project in your default browser and live reloads when changes are made

## Bugs and Issues

Have a bug or an issue with this site? [Open a new issue](https://github.com/artmaro/artmaro.github.io/issues) here on GitHub

## Copyright and License

Copyright 2018 Evgeny Kokuykin and Vladislav Tupikin. Code released under the [MIT](https://raw.githubusercontent.com/artmaro/artmaro.github.io/develop/LICENSE) license.
