'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=iphone5 mocha
//gaurav verma

var capsConfig = { 
'chrome_win10': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1366x768'
  },
'chrome_win7': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '800x600'
  },
'chrome_mac_Sierra': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
  'IE11_win10': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1024x768'
  },
'IE11_win7': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '800x600'
  },
'Firefox_win10': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x800'
  },
'Firefox_win7': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  },
'Firefox_Mac_Sierra': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
'Safari_Mac_Sierra': {
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

  console.log(testName + '_' + caps.os + '_' + caps.os_version + '_' + caps.resolution);

   it('should show the home page',function(done) {
   client
     .url(baseUrl)
     .webdrivercss(testName + '_' + caps.os + '_' + caps.os_version, {
       name: '1',
       exclude: [],
       remove: [],
       hide: [],
       screenWidth: selectedCaps == '__' ? [350,640, 960, 1200,1366,800,1024,1280,1440,1600,1680,1920] : undefined,
     }, resultsCallback)
     .call(done);
 });

});
