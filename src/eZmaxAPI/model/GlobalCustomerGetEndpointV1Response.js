/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GlobalCustomerGetEndpointV1Response model module.
 * @module eZmaxAPI/model/GlobalCustomerGetEndpointV1Response
 * @version 1.0.30
 */
class GlobalCustomerGetEndpointV1Response {
    /**
     * Constructs a new <code>GlobalCustomerGetEndpointV1Response</code>.
     * Response for the /1/customer/{pksCustomerCode}/endpoint API Request
     * @alias module:eZmaxAPI/model/GlobalCustomerGetEndpointV1Response
     * @param sEndpointURL {String} The endpoint's URL
     */
    constructor(sEndpointURL) { 
        
        GlobalCustomerGetEndpointV1Response.initialize(this, sEndpointURL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sEndpointURL) { 
        obj['sEndpointURL'] = sEndpointURL;
    }

    /**
     * Constructs a <code>GlobalCustomerGetEndpointV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/GlobalCustomerGetEndpointV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/GlobalCustomerGetEndpointV1Response} The populated <code>GlobalCustomerGetEndpointV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalCustomerGetEndpointV1Response();

            if (data.hasOwnProperty('sEndpointURL')) {
                obj['sEndpointURL'] = ApiClient.convertToType(data['sEndpointURL'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The endpoint's URL
     * @return {String}
     */
    getSEndpointURL() {
        return this.sEndpointURL;
    }

    /**
     * Sets The endpoint's URL
     * @param {String} sEndpointURL The endpoint's URL
     */
    setSEndpointURL(sEndpointURL) {
        this['sEndpointURL'] = sEndpointURL;
    }

}

/**
 * The endpoint's URL
 * @member {String} sEndpointURL
 */
GlobalCustomerGetEndpointV1Response.prototype['sEndpointURL'] = undefined;






export default GlobalCustomerGetEndpointV1Response;
