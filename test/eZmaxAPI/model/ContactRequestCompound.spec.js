/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.41
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
    instance = new EZmaxApiDefinition.ContactRequestCompound();
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

  describe('ContactRequestCompound', function() {
    it('should create an instance of ContactRequestCompound', function() {
      // uncomment below and update the code to test ContactRequestCompound
      //var instane = new EZmaxApiDefinition.ContactRequestCompound();
      //expect(instance).to.be.a(EZmaxApiDefinition.ContactRequestCompound);
    });

    it('should have the property objContactinformations (base name: "objContactinformations")', function() {
      // uncomment below and update the code to test the property objContactinformations
      //var instance = new EZmaxApiDefinition.ContactRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiContacttitleID (base name: "fkiContacttitleID")', function() {
      // uncomment below and update the code to test the property fkiContacttitleID
      //var instance = new EZmaxApiDefinition.ContactRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinition.ContactRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sContactFirstname (base name: "sContactFirstname")', function() {
      // uncomment below and update the code to test the property sContactFirstname
      //var instance = new EZmaxApiDefinition.ContactRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sContactLastname (base name: "sContactLastname")', function() {
      // uncomment below and update the code to test the property sContactLastname
      //var instance = new EZmaxApiDefinition.ContactRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property sContactCompany (base name: "sContactCompany")', function() {
      // uncomment below and update the code to test the property sContactCompany
      //var instance = new EZmaxApiDefinition.ContactRequestCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtContactBirthdate (base name: "dtContactBirthdate")', function() {
      // uncomment below and update the code to test the property dtContactBirthdate
      //var instance = new EZmaxApiDefinition.ContactRequestCompound();
      //expect(instance).to.be();
    });

  });

}));
