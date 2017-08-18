'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha

// Created by Gaurav Verma for demonstartion to cover Chrome ver 60 on mac and comparing with a progressive version

var capsConfig = {
 'chrome': {
   'browser' : 'Chrome',
   'browser_version' : '42.0',
   'os' : 'OS X',
   'os_version' : 'Yosemite',
   'resolution' : '1024x768'
 },
 'chrome_win': {
   'browser' : 'Chrome',
   'browser_version' : '59.0',
   'os' : 'Windows',
   'os_version' : '10'
 },
 'firefox': {
   'browser' : 'Firefox',
   'browser_version' : '55.0',
   'os' : 'Windows',
   'os_version' : '10',
   'resolution' : '1024x768'
 },
 'ie11': {
   'browser' : 'Edge',
   'browser_version' : '15',
   'os' : 'Windows',
   'os_version' : '10',
   'resolution' : '1024x768'
 },
 'mac': {
   'browser' : 'Chrome',
   'browser_version' : '59.0',
   'os' : 'OS X',
   'os_version' : 'Sierra',
   'resolution' : '1024x768'
 },
 'windows': {
   'browser' : 'Edge',
   'browser_version' : '15.0',
   'os' : 'Windows',
   'os_version' : '10',
   'resolution' : '1024x768'
 },
 'iphone5': {
   'browser' : 'Chrome',
   'browser_version' : '42.0',
   'os' : 'OS X',
   'os_version' : 'Yosemite',
   'chromeOptions': {
     'mobileEmulation': {
       'deviceName': 'Apple iPhone 5'
     }
   }
 }
};

var selectedCaps = process.env.SELECTED_CAPS || undefined;
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;

var providerPrefix = process.env.PROVIDER_PREFIX ? process.env.PROVIDER_PREFIX + '_' : '';
var testName = selectedCaps ? providerPrefix + selectedCaps : providerPrefix + 'OneFC';

var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'http://52.221.180.215/index.html';

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
     //.webdrivercss(testName + '.home', {
      .webdrivercss(testName + '_' + caps.os + '_' + caps.os_version,{ 
       name: '1',
       exclude: [],
       remove: [],
       hide: [],
       screenWidth: selectedCaps == 'chrome' ? [320,640,960,1200,1366,800,1024,1280,1440,1600,1680,1920] : undefined,
     }, resultsCallback)
     .call(done);
 });
});