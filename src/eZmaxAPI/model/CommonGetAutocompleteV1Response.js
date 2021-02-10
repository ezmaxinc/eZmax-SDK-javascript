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

import ApiClient from '../ApiClient';
import CommonGetAutocompleteV1ResponseMPayload from './CommonGetAutocompleteV1ResponseMPayload';
import CommonResponse from './CommonResponse';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayload from './CommonResponseObjDebugPayload';

/**
 * The CommonGetAutocompleteV1Response model module.
 * @module eZmaxAPI/model/CommonGetAutocompleteV1Response
 * @version 1.0.29
 */
class CommonGetAutocompleteV1Response {
    /**
     * Constructs a new <code>CommonGetAutocompleteV1Response</code>.
     * Response for the /1/object/xxx/getAutocomplete API Request
     * @alias module:eZmaxAPI/model/CommonGetAutocompleteV1Response
     * @implements module:eZmaxAPI/model/CommonResponse
     */
    constructor() { 
        CommonResponse.initialize(this);
        CommonGetAutocompleteV1Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>CommonGetAutocompleteV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} The populated <code>CommonGetAutocompleteV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonGetAutocompleteV1Response();
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = ApiClient.convertToType(data['mPayload'], [CommonGetAutocompleteV1ResponseMPayload]);
            }
            if (data.hasOwnProperty('objDebugPayload')) {
                obj['objDebugPayload'] = CommonResponseObjDebugPayload.constructFromObject(data['objDebugPayload']);
            }
            if (data.hasOwnProperty('objDebug')) {
                obj['objDebug'] = CommonResponseObjDebug.constructFromObject(data['objDebug']);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CommonGetAutocompleteV1ResponseMPayload>}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CommonGetAutocompleteV1ResponseMPayload>} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }
/**
     * @return {module:eZmaxAPI/model/CommonResponseObjDebugPayload}
     */
    getObjDebugPayload() {
        return this.objDebugPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
     */
    setObjDebugPayload(objDebugPayload) {
        this['objDebugPayload'] = objDebugPayload;
    }
/**
     * @return {module:eZmaxAPI/model/CommonResponseObjDebug}
     */
    getObjDebug() {
        return this.objDebug;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
     */
    setObjDebug(objDebug) {
        this['objDebug'] = objDebug;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/CommonGetAutocompleteV1ResponseMPayload>} mPayload
 */
CommonGetAutocompleteV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonGetAutocompleteV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonGetAutocompleteV1Response.prototype['objDebug'] = undefined;


// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default CommonGetAutocompleteV1Response;

