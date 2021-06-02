/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.45
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
    instance = new EZmaxApiDefinition.ContactinformationsRequestCompound();
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

  describe('ContactinformationsRequestCompound', function() {
    it('should create an instance of ContactinformationsRequestCompound', function() {
      // uncomment below and update the code to test ContactinformationsRequestCompound
      //var instane = new EZmaxApiDefinition.ContactinformationsRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinition.ContactinformationsRequestCompound);
    });

    it('should have the property a_objAddress (base name: "a_objAddress")', function() {
      // uncomment below and update the code to test the property a_objAddress
      //var instance = new EZmaxApiDefinition.ContactinformationsRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objPhone (base name: "a_objPhone")', function() {
      // uncomment below and update the code to test the property a_objPhone
      //var instance = new EZmaxApiDefinition.ContactinformationsRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objEmail (base name: "a_objEmail")', function() {
      // uncomment below and update the code to test the property a_objEmail
      //var instance = new EZmaxApiDefinition.ContactinformationsRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property a_objWebsite (base name: "a_objWebsite")', function() {
      // uncomment below and update the code to test the property a_objWebsite
      //var instance = new EZmaxApiDefinition.ContactinformationsRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iAddressDefault (base name: "iAddressDefault")', function() {
      // uncomment below and update the code to test the property iAddressDefault
      //var instance = new EZmaxApiDefinition.ContactinformationsRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iPhoneDefault (base name: "iPhoneDefault")', function() {
      // uncomment below and update the code to test the property iPhoneDefault
      //var instance = new EZmaxApiDefinition.ContactinformationsRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEmailDefault (base name: "iEmailDefault")', function() {
      // uncomment below and update the code to test the property iEmailDefault
      //var instance = new EZmaxApiDefinition.ContactinformationsRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property iWebsiteDefault (base name: "iWebsiteDefault")', function() {
      // uncomment below and update the code to test the property iWebsiteDefault
      //var instance = new EZmaxApiDefinition.ContactinformationsRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
