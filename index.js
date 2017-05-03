/* eslint-env node */
'use strict';
/*
var BabelTranspiler = require('broccoli-babel-transpiler');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var path = require('path');

var concat = require('broccoli-concat');
*/
module.exports = {
  name: 'ember-autonumeric',
  isDevelopingAddon(){
    return true;
  },

/*

  treeForAddon: function() {
    // get the base addon tree
    var addonTree = this._super.treeForAddon.apply(this, arguments);

     // transpile the impagination sources into ES5. However, we want
     // to leave the ES6 module declaration in place because they'll be
     // handled later by ember-cli.
     var src = require.resolve('autonumeric');
     src = path.join(src, '..');

     var src = new Funnel(src);//('node_modules/ember-autonumeric/node_modules/autonumeric/src');

     var transpiled = new BabelTranspiler(MergeTrees([src]), {
       //loose: true,
       moduleIds: true,
       modules: 'amdStrict'
       //blacklist: ['es6.modules']
     });

    // take the transpiled impagination sources and put them into
    // `modules/impagination/{dataset|record|page}.js` so that the
    // ember-cli build will pick them up.

    var autonumeric = new Funnel(transpiled, {
      destDir: 'modules/autonumeric'
    });

    return new MergeTrees([addonTree, autonumeric]);
  },*/
/*
  included: function(app) {
    this._super.included.apply(this, arguments);

    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/autonumeric.js');
  }

*/
  /*,
  options: {
    nodeAssets: {
      'autonumeric': {
        vendor: {
          srcDir: '',
          destDir: 'autonumeric',
          include: [
           'src/AutoNumeric.js',
           'src/AutoNumericDefaultSettings.js',
           'src/AutoNumericEnum.js',
           'src/AutoNumericEvents.js',
           'src/AutoNumericHelper.js',
           'src/AutoNumericOptions.js',
           'src/AutoNumericPredefinedOptions.js',
           'src/main.js'
          ]
        }
      }
    }
  },
  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/autonumeric/src/AutoNumeric.js');
    this.import('vendor/autonumeric/src/AutoNumericDefaultSettings.js');
    this.import('vendor/autonumeric/src/AutoNumericEnum.js');
    this.import('vendor/autonumeric/src/AutoNumericEvents.js');
    this.import('vendor/autonumeric/src/AutoNumericHelper.js');
    this.import('vendor/autonumeric/src/AutoNumericOptions.js');
    this.import('vendor/autonumeric/src/AutoNumericPredefinedOptions.js');
    this.import('vendor/autonumeric/src/main.js');
  }*/
};
