/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AttemptResponse from './AttemptResponse';
import WebhookResponse from './WebhookResponse';

/**
 * The CommonWebhook model module.
 * @module eZmaxAPI/model/CommonWebhook
 * @version 1.0.46
 */
class CommonWebhook {
    /**
     * Constructs a new <code>CommonWebhook</code>.
     * This is the base Webhook object
     * @alias module:eZmaxAPI/model/CommonWebhook
     * @param objWebhook {module:eZmaxAPI/model/WebhookResponse} 
     * @param a_objAttempt {Array.<module:eZmaxAPI/model/AttemptResponse>} An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     */
    constructor(objWebhook, a_objAttempt) { 
        
        CommonWebhook.initialize(this, objWebhook, a_objAttempt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objWebhook, a_objAttempt) { 
        obj['objWebhook'] = objWebhook;
        obj['a_objAttempt'] = a_objAttempt;
    }

    /**
     * Constructs a <code>CommonWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonWebhook} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonWebhook} The populated <code>CommonWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonWebhook();

            if (data.hasOwnProperty('objWebhook')) {
                obj['objWebhook'] = WebhookResponse.constructFromObject(data['objWebhook']);
            }
            if (data.hasOwnProperty('a_objAttempt')) {
                obj['a_objAttempt'] = ApiClient.convertToType(data['a_objAttempt'], [AttemptResponse]);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/WebhookResponse}
     */
    getObjWebhook() {
        return this.objWebhook;
    }

    /**
     * @param {module:eZmaxAPI/model/WebhookResponse} objWebhook
     */
    setObjWebhook(objWebhook) {
        this['objWebhook'] = objWebhook;
    }
/**
     * Returns An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     * @return {Array.<module:eZmaxAPI/model/AttemptResponse>}
     */
    getAObjAttempt() {
        return this.a_objAttempt;
    }

    /**
     * Sets An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     * @param {Array.<module:eZmaxAPI/model/AttemptResponse>} a_objAttempt An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     */
    setAObjAttempt(a_objAttempt) {
        this['a_objAttempt'] = a_objAttempt;
    }

}

/**
 * @member {module:eZmaxAPI/model/WebhookResponse} objWebhook
 */
CommonWebhook.prototype['objWebhook'] = undefined;

/**
 * An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
 * @member {Array.<module:eZmaxAPI/model/AttemptResponse>} a_objAttempt
 */
CommonWebhook.prototype['a_objAttempt'] = undefined;






export default CommonWebhook;

