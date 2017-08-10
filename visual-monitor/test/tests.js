'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=iphone5 mocha

var capsConfig = { 'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1366x768'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1024x768'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x800'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x1024'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1440x900'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1680x1050'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1600x1200'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1200'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1080'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '2048x1536'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1024x768'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x800'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x1024'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1440x900'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1680x1050'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1600x1200'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1200'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1080'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '2048x1536'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1366x768'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1024x768'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x800'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1280x1024'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1440x900'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1680x1050'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1600x1200'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1200'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1080'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '2048x1536'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1366x768'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '800x600'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x800'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x1024'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1366x768'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1440x900'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1680x1050'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1600x1200'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1200'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1080'
  },
'IE': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '2048x1536'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '800x600'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x800'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x1024'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1366x768'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1440x900'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1680x1050'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1600x1200'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1200'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1080'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '2048x1536'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '800x540'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x800'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1280x1024'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1366x768'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1440x900'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1680x1050'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1540x1200'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1200'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1080'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '2048x1536'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x960'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x1024'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1600x1200'
  },
'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '60.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1920x1080'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x960'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x1024'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1600x1200'
  },
'Firefox': {
    'browser' : 'Firefox',
    'browser_version' : '54.0',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1920x1080'
  },
'Safari': {
    'browser' : 'Safari',
    'browser_version' : '10.1',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1024x768'
  },
'Safari': {
    'browser' : 'Safari',
    'browser_version' : '10.1',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x960'
  },
'Safari': {
    'browser' : 'Safari',
    'browser_version' : '10.1',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1280x1024'
  },
'Safari': {
    'browser' : 'Safari',
    'browser_version' : '10.1',
    'os' : 'Mac',
    'os_version' : 'Sierra',
    'resolution' : '1600x1200'
  },
'Safari': {
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
      .webdrivercss(testName + '.home', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [640, 960, 1200] : undefined,
      }, resultsCallback)
      .call(done);
  });
});
