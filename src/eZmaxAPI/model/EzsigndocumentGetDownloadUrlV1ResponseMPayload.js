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

import ApiClient from '../ApiClient';

/**
 * The EzsigndocumentGetDownloadUrlV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetDownloadUrlV1ResponseMPayload
 * @version 1.0.28
 */
class EzsigndocumentGetDownloadUrlV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetDownloadUrlV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsigndocument/{pkiEzsigndocument}/getDownloadUrl API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentGetDownloadUrlV1ResponseMPayload
     * @param sDownloadUrl {String} The Url to the requested document.  Url will expire after 5 minutes.
     */
    constructor(sDownloadUrl) { 
        
        EzsigndocumentGetDownloadUrlV1ResponseMPayload.initialize(this, sDownloadUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sDownloadUrl) { 
        obj['sDownloadUrl'] = sDownloadUrl;
    }

    /**
     * Constructs a <code>EzsigndocumentGetDownloadUrlV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetDownloadUrlV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetDownloadUrlV1ResponseMPayload} The populated <code>EzsigndocumentGetDownloadUrlV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetDownloadUrlV1ResponseMPayload();

            if (data.hasOwnProperty('sDownloadUrl')) {
                obj['sDownloadUrl'] = ApiClient.convertToType(data['sDownloadUrl'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The Url to the requested document.  Url will expire after 5 minutes.
     * @return {String}
     */
    getSDownloadUrl() {
        return this.sDownloadUrl;
    }

    /**
     * Sets The Url to the requested document.  Url will expire after 5 minutes.
     * @param {String} sDownloadUrl The Url to the requested document.  Url will expire after 5 minutes.
     */
    setSDownloadUrl(sDownloadUrl) {
        this['sDownloadUrl'] = sDownloadUrl;
    }

}

/**
 * The Url to the requested document.  Url will expire after 5 minutes.
 * @member {String} sDownloadUrl
 */
EzsigndocumentGetDownloadUrlV1ResponseMPayload.prototype['sDownloadUrl'] = undefined;






export default EzsigndocumentGetDownloadUrlV1ResponseMPayload;

