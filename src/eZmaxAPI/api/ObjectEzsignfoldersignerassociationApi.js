/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don't waste too much time looking for it. Contact support-api@ezmax.ca, we're here to help. We are developpers so we know programmers don't like bad documentation. If you don't find what you need in the documentation, let us know, we'll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.28
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import EzsignfoldersignerassociationCreateObjectV1Request from '../model/EzsignfoldersignerassociationCreateObjectV1Request';
import EzsignfoldersignerassociationCreateObjectV1Response from '../model/EzsignfoldersignerassociationCreateObjectV1Response';
import EzsignfoldersignerassociationDeleteObjectV1Response from '../model/EzsignfoldersignerassociationDeleteObjectV1Response';
import EzsignfoldersignerassociationEditObjectV1Request from '../model/EzsignfoldersignerassociationEditObjectV1Request';
import EzsignfoldersignerassociationEditObjectV1Response from '../model/EzsignfoldersignerassociationEditObjectV1Response';
import EzsignfoldersignerassociationGetInPersonLoginUrlV1Response from '../model/EzsignfoldersignerassociationGetInPersonLoginUrlV1Response';
import EzsignfoldersignerassociationGetObjectV1Response from '../model/EzsignfoldersignerassociationGetObjectV1Response';

/**
* ObjectEzsignfoldersignerassociation service.
* @module eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi
* @version 1.0.28
*/
export default class ObjectEzsignfoldersignerassociationApi {

    /**
    * Constructs a new ObjectEzsignfoldersignerassociationApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignfoldersignerassociationCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignfoldersignerassociation
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1Request>} EzsignfoldersignerassociationCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1Response}
     */
    ezsignfoldersignerassociationCreateObjectV1(EzsignfoldersignerassociationCreateObjectV1Request, callback) {
      let postBody = EzsignfoldersignerassociationCreateObjectV1Request;
      // verify the required parameter 'EzsignfoldersignerassociationCreateObjectV1Request' is set
      if (EzsignfoldersignerassociationCreateObjectV1Request === undefined || EzsignfoldersignerassociationCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignfoldersignerassociationCreateObjectV1Request' when calling ezsignfoldersignerassociationCreateObjectV1");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EzsignfoldersignerassociationCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfoldersignerassociation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfoldersignerassociationDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsignfoldersignerassociation
     * @param {Number} pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param {module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfoldersignerassociationDeleteObjectV1Response}
     */
    ezsignfoldersignerassociationDeleteObjectV1(pkiEzsignfoldersignerassociationID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfoldersignerassociationID' is set
      if (pkiEzsignfoldersignerassociationID === undefined || pkiEzsignfoldersignerassociationID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfoldersignerassociationID' when calling ezsignfoldersignerassociationDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsignfoldersignerassociationID': pkiEzsignfoldersignerassociationID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EzsignfoldersignerassociationDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfoldersignerassociationEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify an existing Ezsignfoldersignerassociation
     * @param {Number} pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationEditObjectV1Request} EzsignfoldersignerassociationEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfoldersignerassociationEditObjectV1Response}
     */
    ezsignfoldersignerassociationEditObjectV1(pkiEzsignfoldersignerassociationID, EzsignfoldersignerassociationEditObjectV1Request, callback) {
      let postBody = EzsignfoldersignerassociationEditObjectV1Request;
      // verify the required parameter 'pkiEzsignfoldersignerassociationID' is set
      if (pkiEzsignfoldersignerassociationID === undefined || pkiEzsignfoldersignerassociationID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfoldersignerassociationID' when calling ezsignfoldersignerassociationEditObjectV1");
      }
      // verify the required parameter 'EzsignfoldersignerassociationEditObjectV1Request' is set
      if (EzsignfoldersignerassociationEditObjectV1Request === undefined || EzsignfoldersignerassociationEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignfoldersignerassociationEditObjectV1Request' when calling ezsignfoldersignerassociationEditObjectV1");
      }

      let pathParams = {
        'pkiEzsignfoldersignerassociationID': pkiEzsignfoldersignerassociationID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EzsignfoldersignerassociationEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfoldersignerassociationGetInPersonLoginUrlV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationGetInPersonLoginUrlV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationGetInPersonLoginUrlV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Login Url to allow In-Person signing
     * This endpoint returns a Login Url that can be used in a browser or embedded in an I-Frame to allow in person signing.  The signer Login type must be configured as In-Person.
     * @param {Number} pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param {module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationGetInPersonLoginUrlV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfoldersignerassociationGetInPersonLoginUrlV1Response}
     */
    ezsignfoldersignerassociationGetInPersonLoginUrlV1(pkiEzsignfoldersignerassociationID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfoldersignerassociationID' is set
      if (pkiEzsignfoldersignerassociationID === undefined || pkiEzsignfoldersignerassociationID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfoldersignerassociationID' when calling ezsignfoldersignerassociationGetInPersonLoginUrlV1");
      }

      let pathParams = {
        'pkiEzsignfoldersignerassociationID': pkiEzsignfoldersignerassociationID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EzsignfoldersignerassociationGetInPersonLoginUrlV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}/getInPersonLoginUrl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfoldersignerassociationGetObjectGetChildrenV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationGetObjectGetChildrenV1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignfoldersignerassociation's children IDs
     * @param {Number} pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param {module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationGetObjectGetChildrenV1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    ezsignfoldersignerassociationGetObjectGetChildrenV1(pkiEzsignfoldersignerassociationID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfoldersignerassociationID' is set
      if (pkiEzsignfoldersignerassociationID === undefined || pkiEzsignfoldersignerassociationID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfoldersignerassociationID' when calling ezsignfoldersignerassociationGetObjectGetChildrenV1");
      }

      let pathParams = {
        'pkiEzsignfoldersignerassociationID': pkiEzsignfoldersignerassociationID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}/getChildren', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfoldersignerassociationGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignfoldersignerassociation
     * @param {Number} pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param {module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi~ezsignfoldersignerassociationGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1Response}
     */
    ezsignfoldersignerassociationGetObjectV1(pkiEzsignfoldersignerassociationID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfoldersignerassociationID' is set
      if (pkiEzsignfoldersignerassociationID === undefined || pkiEzsignfoldersignerassociationID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfoldersignerassociationID' when calling ezsignfoldersignerassociationGetObjectV1");
      }

      let pathParams = {
        'pkiEzsignfoldersignerassociationID': pkiEzsignfoldersignerassociationID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EzsignfoldersignerassociationGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
