/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don't waste too much time looking for it. Contact support-api@ezmax.ca, we're here to help. We are developpers so we know programmers don't like bad documentation. If you don't find what you need in the documentation, let us know, we'll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.27
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
    instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
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

  describe('EzsigndocumentResponseCompound', function() {
    it('should create an instance of EzsigndocumentResponseCompound', function() {
      // uncomment below and update the code to test EzsigndocumentResponseCompound
      //var instane = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinition.EzsigndocumentResponseCompound);
    });

    it('should have the property fkiEzsignfolderID (base name: "fkiEzsignfolderID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfolderID
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsigndocumentDuedate (base name: "dtEzsigndocumentDuedate")', function() {
      // uncomment below and update the code to test the property dtEzsigndocumentDuedate
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiLanguageID (base name: "fkiLanguageID")', function() {
      // uncomment below and update the code to test the property fkiLanguageID
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentFilename (base name: "sEzsigndocumentFilename")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentFilename
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentName (base name: "sEzsigndocumentName")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentName
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property pkiEzsigndocumentID (base name: "pkiEzsigndocumentID")', function() {
      // uncomment below and update the code to test the property pkiEzsigndocumentID
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eEzsigndocumentStep (base name: "eEzsigndocumentStep")', function() {
      // uncomment below and update the code to test the property eEzsigndocumentStep
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsigndocumentFirstsend (base name: "dtEzsigndocumentFirstsend")', function() {
      // uncomment below and update the code to test the property dtEzsigndocumentFirstsend
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtEzsigndocumentLastsend (base name: "dtEzsigndocumentLastsend")', function() {
      // uncomment below and update the code to test the property dtEzsigndocumentLastsend
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentOrder (base name: "iEzsigndocumentOrder")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentOrder
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentPagetotal (base name: "iEzsigndocumentPagetotal")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentPagetotal
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentSignaturesigned (base name: "iEzsigndocumentSignaturesigned")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentSignaturesigned
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property iEzsigndocumentSignaturetotal (base name: "iEzsigndocumentSignaturetotal")', function() {
      // uncomment below and update the code to test the property iEzsigndocumentSignaturetotal
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentMD5initial (base name: "sEzsigndocumentMD5initial")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentMD5initial
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sEzsigndocumentMD5signed (base name: "sEzsigndocumentMD5signed")', function() {
      // uncomment below and update the code to test the property sEzsigndocumentMD5signed
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property objAudit (base name: "objAudit")', function() {
      // uncomment below and update the code to test the property objAudit
      //var instance = new EZmaxApiDefinition.EzsigndocumentResponseCompound();
      //expect(instance).to.be();
    });

  });

}));