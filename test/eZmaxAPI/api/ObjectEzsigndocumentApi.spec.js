/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don't waste too much time looking for it. Contact support-api@ezmax.ca, we're here to help. We are developpers so we know programmers don't like bad documentation. If you don't find what you need in the documentation, let us know, we'll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.29
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
    instance = new EZmaxApiDefinition.ObjectEzsigndocumentApi();
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

  describe('ObjectEzsigndocumentApi', function() {
    describe('ezsigndocumentApplyEzsigntemplateV1', function() {
      it('should call ezsigndocumentApplyEzsigntemplateV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentApplyEzsigntemplateV1
        //instance.ezsigndocumentApplyEzsigntemplateV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentCreateObjectV1', function() {
      it('should call ezsigndocumentCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentCreateObjectV1
        //instance.ezsigndocumentCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentDeleteObjectV1', function() {
      it('should call ezsigndocumentDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentDeleteObjectV1
        //instance.ezsigndocumentDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentEditObjectV1', function() {
      it('should call ezsigndocumentEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentEditObjectV1
        //instance.ezsigndocumentEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentGetChildrenV1', function() {
      it('should call ezsigndocumentGetChildrenV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentGetChildrenV1
        //instance.ezsigndocumentGetChildrenV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentGetDownloadUrlV1', function() {
      it('should call ezsigndocumentGetDownloadUrlV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentGetDownloadUrlV1
        //instance.ezsigndocumentGetDownloadUrlV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentGetObjectV1', function() {
      it('should call ezsigndocumentGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentGetObjectV1
        //instance.ezsigndocumentGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
