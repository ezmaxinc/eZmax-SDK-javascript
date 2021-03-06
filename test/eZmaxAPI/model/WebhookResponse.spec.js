/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/eZmaxAPI/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/eZmaxAPI/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EZmaxApiDefinition);
  }
}(this, function(expect, EZmaxApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinition.WebhookResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WebhookResponse', function() {
    it('should create an instance of WebhookResponse', function() {
      // uncomment below and update the code to test WebhookResponse
      //var instane = new EZmaxApiDefinition.WebhookResponse();
      //expect(instance).to.be.a(EZmaxApiDefinition.WebhookResponse);
    });

    it('should have the property pkiWebhookID (base name: "pkiWebhookID")', function() {
      // uncomment below and update the code to test the property pkiWebhookID
      //var instance = new EZmaxApiDefinition.WebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property eWebhookModule (base name: "eWebhookModule")', function() {
      // uncomment below and update the code to test the property eWebhookModule
      //var instance = new EZmaxApiDefinition.WebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property eWebhookEzsignevent (base name: "eWebhookEzsignevent")', function() {
      // uncomment below and update the code to test the property eWebhookEzsignevent
      //var instance = new EZmaxApiDefinition.WebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property pksCustomerCode (base name: "pksCustomerCode")', function() {
      // uncomment below and update the code to test the property pksCustomerCode
      //var instance = new EZmaxApiDefinition.WebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property sWebhookUrl (base name: "sWebhookUrl")', function() {
      // uncomment below and update the code to test the property sWebhookUrl
      //var instance = new EZmaxApiDefinition.WebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property sWebhookEmailfailed (base name: "sWebhookEmailfailed")', function() {
      // uncomment below and update the code to test the property sWebhookEmailfailed
      //var instance = new EZmaxApiDefinition.WebhookResponse();
      //expect(instance).to.be();
    });

    it('should have the property eWebhookManagementevent (base name: "eWebhookManagementevent")', function() {
      // uncomment below and update the code to test the property eWebhookManagementevent
      //var instance = new EZmaxApiDefinition.WebhookResponse();
      //expect(instance).to.be();
    });

  });

}));
