/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.31
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApikeyRequest from './ApikeyRequest';
import ApikeyRequestCompound from './ApikeyRequestCompound';

/**
 * The ApikeyCreateObjectV1Request model module.
 * @module eZmaxAPI/model/ApikeyCreateObjectV1Request
 * @version 1.0.31
 */
class ApikeyCreateObjectV1Request {
    /**
     * Constructs a new <code>ApikeyCreateObjectV1Request</code>.
     * Request for the /1/object/apikey/createObject API Request
     * @alias module:eZmaxAPI/model/ApikeyCreateObjectV1Request
     */
    constructor() { 
        
        ApikeyCreateObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApikeyCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyCreateObjectV1Request} The populated <code>ApikeyCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyCreateObjectV1Request();

            if (data.hasOwnProperty('objApikey')) {
                obj['objApikey'] = ApikeyRequest.constructFromObject(data['objApikey']);
            }
            if (data.hasOwnProperty('objApikeyCompound')) {
                obj['objApikeyCompound'] = ApikeyRequestCompound.constructFromObject(data['objApikeyCompound']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/ApikeyRequest}
     */
    getObjApikey() {
        return this.objApikey;
    }

    /**
     * @param {module:eZmaxAPI/model/ApikeyRequest} objApikey
     */
    setObjApikey(objApikey) {
        this['objApikey'] = objApikey;
    }
/**
     * @return {module:eZmaxAPI/model/ApikeyRequestCompound}
     */
    getObjApikeyCompound() {
        return this.objApikeyCompound;
    }

    /**
     * @param {module:eZmaxAPI/model/ApikeyRequestCompound} objApikeyCompound
     */
    setObjApikeyCompound(objApikeyCompound) {
        this['objApikeyCompound'] = objApikeyCompound;
    }

}

/**
 * @member {module:eZmaxAPI/model/ApikeyRequest} objApikey
 */
ApikeyCreateObjectV1Request.prototype['objApikey'] = undefined;

/**
 * @member {module:eZmaxAPI/model/ApikeyRequestCompound} objApikeyCompound
 */
ApikeyCreateObjectV1Request.prototype['objApikeyCompound'] = undefined;






export default ApikeyCreateObjectV1Request;

