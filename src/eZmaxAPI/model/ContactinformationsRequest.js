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

/**
 * The ContactinformationsRequest model module.
 * @module eZmaxAPI/model/ContactinformationsRequest
 * @version 1.0.46
 */
class ContactinformationsRequest {
    /**
     * Constructs a new <code>ContactinformationsRequest</code>.
     * A Contactinformations Object
     * @alias module:eZmaxAPI/model/ContactinformationsRequest
     * @param iAddressDefault {Number} The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param iPhoneDefault {Number} The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param iEmailDefault {Number} The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param iWebsiteDefault {Number} The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    constructor(iAddressDefault, iPhoneDefault, iEmailDefault, iWebsiteDefault) { 
        
        ContactinformationsRequest.initialize(this, iAddressDefault, iPhoneDefault, iEmailDefault, iWebsiteDefault);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iAddressDefault, iPhoneDefault, iEmailDefault, iWebsiteDefault) { 
        obj['iAddressDefault'] = iAddressDefault;
        obj['iPhoneDefault'] = iPhoneDefault;
        obj['iEmailDefault'] = iEmailDefault;
        obj['iWebsiteDefault'] = iWebsiteDefault;
    }

    /**
     * Constructs a <code>ContactinformationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ContactinformationsRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ContactinformationsRequest} The populated <code>ContactinformationsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactinformationsRequest();

            if (data.hasOwnProperty('iAddressDefault')) {
                obj['iAddressDefault'] = ApiClient.convertToType(data['iAddressDefault'], 'Number');
            }
            if (data.hasOwnProperty('iPhoneDefault')) {
                obj['iPhoneDefault'] = ApiClient.convertToType(data['iPhoneDefault'], 'Number');
            }
            if (data.hasOwnProperty('iEmailDefault')) {
                obj['iEmailDefault'] = ApiClient.convertToType(data['iEmailDefault'], 'Number');
            }
            if (data.hasOwnProperty('iWebsiteDefault')) {
                obj['iWebsiteDefault'] = ApiClient.convertToType(data['iWebsiteDefault'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @return {Number}
     */
    getIAddressDefault() {
        return this.iAddressDefault;
    }

    /**
     * Sets The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param {Number} iAddressDefault The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    setIAddressDefault(iAddressDefault) {
        this['iAddressDefault'] = iAddressDefault;
    }
/**
     * Returns The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @return {Number}
     */
    getIPhoneDefault() {
        return this.iPhoneDefault;
    }

    /**
     * Sets The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param {Number} iPhoneDefault The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    setIPhoneDefault(iPhoneDefault) {
        this['iPhoneDefault'] = iPhoneDefault;
    }
/**
     * Returns The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @return {Number}
     */
    getIEmailDefault() {
        return this.iEmailDefault;
    }

    /**
     * Sets The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param {Number} iEmailDefault The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    setIEmailDefault(iEmailDefault) {
        this['iEmailDefault'] = iEmailDefault;
    }
/**
     * Returns The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @return {Number}
     */
    getIWebsiteDefault() {
        return this.iWebsiteDefault;
    }

    /**
     * Sets The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
     * @param {Number} iWebsiteDefault The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    setIWebsiteDefault(iWebsiteDefault) {
        this['iWebsiteDefault'] = iWebsiteDefault;
    }

}

/**
 * The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iAddressDefault
 */
ContactinformationsRequest.prototype['iAddressDefault'] = undefined;

/**
 * The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iPhoneDefault
 */
ContactinformationsRequest.prototype['iPhoneDefault'] = undefined;

/**
 * The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iEmailDefault
 */
ContactinformationsRequest.prototype['iEmailDefault'] = undefined;

/**
 * The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
 * @member {Number} iWebsiteDefault
 */
ContactinformationsRequest.prototype['iWebsiteDefault'] = undefined;






export default ContactinformationsRequest;

