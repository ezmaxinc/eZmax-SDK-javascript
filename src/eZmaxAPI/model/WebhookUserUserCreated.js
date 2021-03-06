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
import CommonWebhook from './CommonWebhook';
import UserResponse from './UserResponse';
import WebhookResponse from './WebhookResponse';
import WebhookUserUserCreatedAllOf from './WebhookUserUserCreatedAllOf';

/**
 * The WebhookUserUserCreated model module.
 * @module eZmaxAPI/model/WebhookUserUserCreated
 * @version 1.0.46
 */
class WebhookUserUserCreated {
    /**
     * Constructs a new <code>WebhookUserUserCreated</code>.
     * This is the base Webhook object
     * @alias module:eZmaxAPI/model/WebhookUserUserCreated
     * @implements module:eZmaxAPI/model/WebhookUserUserCreatedAllOf
     * @implements module:eZmaxAPI/model/CommonWebhook
     * @param objUser {module:eZmaxAPI/model/UserResponse} 
     * @param objWebhook {module:eZmaxAPI/model/WebhookResponse} 
     * @param a_objAttempt {Array.<module:eZmaxAPI/model/AttemptResponse>} An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     */
    constructor(objUser, objWebhook, a_objAttempt) { 
        WebhookUserUserCreatedAllOf.initialize(this, objUser);CommonWebhook.initialize(this, objWebhook, a_objAttempt);
        WebhookUserUserCreated.initialize(this, objUser, objWebhook, a_objAttempt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objUser, objWebhook, a_objAttempt) { 
        obj['objUser'] = objUser;
        obj['objWebhook'] = objWebhook;
        obj['a_objAttempt'] = a_objAttempt;
    }

    /**
     * Constructs a <code>WebhookUserUserCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookUserUserCreated} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookUserUserCreated} The populated <code>WebhookUserUserCreated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookUserUserCreated();
            WebhookUserUserCreatedAllOf.constructFromObject(data, obj);
            CommonWebhook.constructFromObject(data, obj);

            if (data.hasOwnProperty('objUser')) {
                obj['objUser'] = UserResponse.constructFromObject(data['objUser']);
            }
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
     * @return {module:eZmaxAPI/model/UserResponse}
     */
    getObjUser() {
        return this.objUser;
    }

    /**
     * @param {module:eZmaxAPI/model/UserResponse} objUser
     */
    setObjUser(objUser) {
        this['objUser'] = objUser;
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
 * @member {module:eZmaxAPI/model/UserResponse} objUser
 */
WebhookUserUserCreated.prototype['objUser'] = undefined;

/**
 * @member {module:eZmaxAPI/model/WebhookResponse} objWebhook
 */
WebhookUserUserCreated.prototype['objWebhook'] = undefined;

/**
 * An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
 * @member {Array.<module:eZmaxAPI/model/AttemptResponse>} a_objAttempt
 */
WebhookUserUserCreated.prototype['a_objAttempt'] = undefined;


// Implement WebhookUserUserCreatedAllOf interface:
/**
 * @member {module:eZmaxAPI/model/UserResponse} objUser
 */
WebhookUserUserCreatedAllOf.prototype['objUser'] = undefined;
// Implement CommonWebhook interface:
/**
 * @member {module:eZmaxAPI/model/WebhookResponse} objWebhook
 */
CommonWebhook.prototype['objWebhook'] = undefined;
/**
 * An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
 * @member {Array.<module:eZmaxAPI/model/AttemptResponse>} a_objAttempt
 */
CommonWebhook.prototype['a_objAttempt'] = undefined;




export default WebhookUserUserCreated;

