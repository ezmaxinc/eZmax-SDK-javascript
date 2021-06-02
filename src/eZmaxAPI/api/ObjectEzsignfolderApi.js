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


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import EzsignfolderCreateObjectV1Request from '../model/EzsignfolderCreateObjectV1Request';
import EzsignfolderCreateObjectV1Response from '../model/EzsignfolderCreateObjectV1Response';
import EzsignfolderDeleteObjectV1Response from '../model/EzsignfolderDeleteObjectV1Response';
import EzsignfolderGetObjectV1Response from '../model/EzsignfolderGetObjectV1Response';
import EzsignfolderSendV1Request from '../model/EzsignfolderSendV1Request';
import EzsignfolderSendV1Response from '../model/EzsignfolderSendV1Response';

/**
* ObjectEzsignfolder service.
* @module eZmaxAPI/api/ObjectEzsignfolderApi
* @version 1.0.45
*/
export default class ObjectEzsignfolderApi {

    /**
    * Constructs a new ObjectEzsignfolderApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignfolderApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignfolderCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignfolder
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param {Array.<module:eZmaxAPI/model/EzsignfolderCreateObjectV1Request>} EzsignfolderCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderCreateObjectV1Response}
     */
    ezsignfolderCreateObjectV1(EzsignfolderCreateObjectV1Request, callback) {
      let postBody = EzsignfolderCreateObjectV1Request;
      // verify the required parameter 'EzsignfolderCreateObjectV1Request' is set
      if (EzsignfolderCreateObjectV1Request === undefined || EzsignfolderCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignfolderCreateObjectV1Request' when calling ezsignfolderCreateObjectV1");
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
      let returnType = EzsignfolderCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsignfolder
     * @param {Number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderDeleteObjectV1Response}
     */
    ezsignfolderDeleteObjectV1(pkiEzsignfolderID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderGetChildrenV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetChildrenV1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignfolder's children IDs
     * @param {Number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetChildrenV1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    ezsignfolderGetChildrenV1(pkiEzsignfolderID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderGetChildrenV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
        '/1/object/ezsignfolder/{pkiEzsignfolderID}/getChildren', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignfolder
     * @param {Number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderGetObjectV1Response}
     */
    ezsignfolderGetObjectV1(pkiEzsignfolderID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderGetObjectV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderSendV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderSendV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderSendV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send the Ezsignfolder to the signatories for signature
     * @param {Number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {module:eZmaxAPI/model/EzsignfolderSendV1Request} EzsignfolderSendV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderSendV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderSendV1Response}
     */
    ezsignfolderSendV1(pkiEzsignfolderID, EzsignfolderSendV1Request, callback) {
      let postBody = EzsignfolderSendV1Request;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderSendV1");
      }
      // verify the required parameter 'EzsignfolderSendV1Request' is set
      if (EzsignfolderSendV1Request === undefined || EzsignfolderSendV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignfolderSendV1Request' when calling ezsignfolderSendV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderSendV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
