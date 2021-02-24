/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.31
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
    instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
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

  describe('FranchisereferalincomeRequest', function() {
    it('should create an instance of FranchisereferalincomeRequest', function() {
      // uncomment below and update the code to test FranchisereferalincomeRequest
      //var instane = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be.a(EZmaxApiDefinition.FranchisereferalincomeRequest);
    });

    it('should have the property fkiFranchisebrokerID (base name: "fkiFranchisebrokerID")', function() {
      // uncomment below and update the code to test the property fkiFranchisebrokerID
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchisereferalincomeprogramID (base name: "fkiFranchisereferalincomeprogramID")', function() {
      // uncomment below and update the code to test the property fkiFranchisereferalincomeprogramID
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiPeriodID (base name: "fkiPeriodID")', function() {
      // uncomment below and update the code to test the property fkiPeriodID
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property dFranchisereferalincomeLoan (base name: "dFranchisereferalincomeLoan")', function() {
      // uncomment below and update the code to test the property dFranchisereferalincomeLoan
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property dFranchisereferalincomeFranchiseamount (base name: "dFranchisereferalincomeFranchiseamount")', function() {
      // uncomment below and update the code to test the property dFranchisereferalincomeFranchiseamount
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property dFranchisereferalincomeFranchisoramount (base name: "dFranchisereferalincomeFranchisoramount")', function() {
      // uncomment below and update the code to test the property dFranchisereferalincomeFranchisoramount
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property dFranchisereferalincomeAgentamount (base name: "dFranchisereferalincomeAgentamount")', function() {
      // uncomment below and update the code to test the property dFranchisereferalincomeAgentamount
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property dtFranchisereferalincomeDisbursed (base name: "dtFranchisereferalincomeDisbursed")', function() {
      // uncomment below and update the code to test the property dtFranchisereferalincomeDisbursed
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property tFranchisereferalincomeComment (base name: "tFranchisereferalincomeComment")', function() {
      // uncomment below and update the code to test the property tFranchisereferalincomeComment
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property fkiFranchiseofficeID (base name: "fkiFranchiseofficeID")', function() {
      // uncomment below and update the code to test the property fkiFranchiseofficeID
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

    it('should have the property sFranchisereferalincomeRemoteid (base name: "sFranchisereferalincomeRemoteid")', function() {
      // uncomment below and update the code to test the property sFranchisereferalincomeRemoteid
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequest();
      //expect(instance).to.be();
    });

  });

}));
