'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=iphone5 mocha
//gaurav verma

var capsConfig = { 'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1366x768'
  },
'chrome2': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1024x768'
  },
'chrome3': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x800'
  },
'chrome4': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x1024'
  },
'chrome5': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1440x900'
  },
'chrome6': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1680x1050'
  },
'chrome7': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1600x1200'
  },
'chrome8': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1200'
  },
'chrome9': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1080'
  },
'chrome10': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '2048x1536'
  },
'IE1': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1024x768'
  },
'IE2': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x800'
  },
'IE3': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x1024'
  },
'IE4': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1440x900'
  },
'IE5': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1680x1050'
  },
'IE6': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1600x1200'
  },
'IE7': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1200'
  },
'IE8': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1080'
  },
'IE9': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '2048x1536'
  },
'IE10': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1366x768'
  },
'Firefox1': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1024x768'
  },
'Firefox2': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x800'
  },
'Firefox3': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x1024'
  },
'Firefox4': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1440x900'
  },
'Firefox5': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1680x1050'
  },
'Firefox6': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1600x1200'
  },
'Firefox7': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1200'
  },
'Firefox8': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1080'
  },
'Firefox9': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '2048x1536'
  },
'Firefox10': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1366x768'
  },
'IE22': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '800x600'
  },
'IE23': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  },
'IE24': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x800'
  },
'IE25': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x1024'
  },
'IE26': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1366x768'
  },
'IE27': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1440x900'
  },
'IE28': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1680x1050'
  },
'IE29': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1600x1200'
  },
'IE30': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1200'
  },
'IE31': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1080'
  },
'IE32': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '2048x1536'
  },
'chrome22': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '800x600'
  },
'chrome23': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  },
'chrome24': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x800'
  },
'chrome25': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x1024'
  },
'chrome26': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1366x768'
  },
'chrome27': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1440x900'
  },
'chrome28': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1680x1050'
  },
'chrome29': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1600x1200'
  },
'chrome30': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1200'
  },
'chrome31': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1080'
  },
'chrome32': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '2048x1536'
  },
'Firefox33': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '800x540'
  },
'Firefox34': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  },
'Firefox35': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x800'
  },
'Firefox36': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x1024'
  },
'Firefox37': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1366x768'
  },
'Firefox38': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1440x900'
  },
'Firefox39': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1680x1050'
  },
'Firefox41': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1540x1200'
  },
'Firefox42': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1200'
  },
'Firefox43': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1080'
  },
'Firefox44': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '2048x1536'
  },
'chrome44': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
'chrome45': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x960'
  },
'chrome46': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x1024'
  },
'chrome47': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1600x1200'
  },
'chrome48': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1920x1080'
  },
'Firefox77': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
'Firefox78': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x960'
  },
'Firefox79': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x1024'
  },
'Firefox80': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1600x1200'
  },
'Firefox81': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1920x1080'
  },
'Safari77': {
    'browser' : 'Safari',
    'browser_version' : '10.1',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
'Safari78': {
    'browser' : 'Safari',
    'browser_version' : '10.1',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x960'
  },
'Safari79': {
    'browser' : 'Safari',
    'browser_version' : '10.1',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x1024'
  },
'Safari80': {
    'browser' : 'Safari',
    'browser_version' : '10.1',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1600x1200'
  },
'Safari81': {
    'browser' : 'Safari',
    'browser_version' : '10.1',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1920x1080'
  }
  
};

var selectedCaps = process.env.SELECTED_CAPS || undefined;
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;

var providerPrefix = process.env.PROVIDER_PREFIX ? process.env.PROVIDER_PREFIX + '_' : '';
var testName = selectedCaps ? providerPrefix + selectedCaps : providerPrefix + 'OneFC';

var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'http://52.221.192.62/ui-html/index.html'; 

var resultsCallback = process.env.DEBUG ? console.log : shoovWebdrivercss.processResults;

describe('Visual monitor testing', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show the home page',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(testName + '.chrome', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: selectedCaps == 'chrome' 
      }, resultsCallback)
      .call(done);
  });



  
});
