// Packages
const fs = require('fs')
const path = require('path')

// Routes
const $views = './src/scripts/Views/'

export const Config = {
    views: _readFiles($views)
}

function _readFiles(dir) {
    const views = {};
  
    fs.readdirSync(dir).forEach(filename => {
      console.log(filename)
      const name = path.parse(filename).name
      views[name.toLowerCase()] = `${$views}${filename}`

    });

    return views;
  }

