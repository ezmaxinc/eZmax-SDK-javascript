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

import ApiClient from '../ApiClient';
import EzsigndocumentResponse from './EzsigndocumentResponse';

/**
 * The WebhookEzsignDocumentCompletedAllOf model module.
 * @module eZmaxAPI/model/WebhookEzsignDocumentCompletedAllOf
 * @version 1.0.41
 */
class WebhookEzsignDocumentCompletedAllOf {
    /**
     * Constructs a new <code>WebhookEzsignDocumentCompletedAllOf</code>.
     * @alias module:eZmaxAPI/model/WebhookEzsignDocumentCompletedAllOf
     * @param objEzsigndocument {module:eZmaxAPI/model/EzsigndocumentResponse} 
     */
    constructor(objEzsigndocument) { 
        
        WebhookEzsignDocumentCompletedAllOf.initialize(this, objEzsigndocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigndocument) { 
        obj['objEzsigndocument'] = objEzsigndocument;
    }

    /**
     * Constructs a <code>WebhookEzsignDocumentCompletedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookEzsignDocumentCompletedAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookEzsignDocumentCompletedAllOf} The populated <code>WebhookEzsignDocumentCompletedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookEzsignDocumentCompletedAllOf();

            if (data.hasOwnProperty('objEzsigndocument')) {
                obj['objEzsigndocument'] = EzsigndocumentResponse.constructFromObject(data['objEzsigndocument']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentResponse}
     */
    getObjEzsigndocument() {
        return this.objEzsigndocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentResponse} objEzsigndocument
     */
    setObjEzsigndocument(objEzsigndocument) {
        this['objEzsigndocument'] = objEzsigndocument;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentResponse} objEzsigndocument
 */
WebhookEzsignDocumentCompletedAllOf.prototype['objEzsigndocument'] = undefined;






export default WebhookEzsignDocumentCompletedAllOf;

