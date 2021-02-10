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

/**
 * The FranchisereferalincomeCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseMPayload
 * @version 1.0.29
 */
class FranchisereferalincomeCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>FranchisereferalincomeCreateObjectV1ResponseMPayload</code>.
     * Payload for the /1/object/franchisereferalincome/createObject API Request
     * @alias module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseMPayload
     * @param a_pkiFranchisereferalincomeID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiFranchisereferalincomeID) { 
        
        FranchisereferalincomeCreateObjectV1ResponseMPayload.initialize(this, a_pkiFranchisereferalincomeID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiFranchisereferalincomeID) { 
        obj['a_pkiFranchisereferalincomeID'] = a_pkiFranchisereferalincomeID;
    }

    /**
     * Constructs a <code>FranchisereferalincomeCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseMPayload} The populated <code>FranchisereferalincomeCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchisereferalincomeCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiFranchisereferalincomeID')) {
                obj['a_pkiFranchisereferalincomeID'] = ApiClient.convertToType(data['a_pkiFranchisereferalincomeID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiFranchisereferalincomeID() {
        return this.a_pkiFranchisereferalincomeID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiFranchisereferalincomeID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiFranchisereferalincomeID(a_pkiFranchisereferalincomeID) {
        this['a_pkiFranchisereferalincomeID'] = a_pkiFranchisereferalincomeID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiFranchisereferalincomeID
 */
FranchisereferalincomeCreateObjectV1ResponseMPayload.prototype['a_pkiFranchisereferalincomeID'] = undefined;






export default FranchisereferalincomeCreateObjectV1ResponseMPayload;

