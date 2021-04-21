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
import EzsignfolderRequest from './EzsignfolderRequest';
import EzsignfolderRequestCompound from './EzsignfolderRequestCompound';

/**
 * The EzsignfolderCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignfolderCreateObjectV1Request
 * @version 1.0.41
 */
class EzsignfolderCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsignfolderCreateObjectV1Request</code>.
     * Request for the /1/object/ezsignfolder/createObject API Request
     * @alias module:eZmaxAPI/model/EzsignfolderCreateObjectV1Request
     */
    constructor() { 
        
        EzsignfolderCreateObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignfolderCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderCreateObjectV1Request} The populated <code>EzsignfolderCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderCreateObjectV1Request();

            if (data.hasOwnProperty('objEzsignfolder')) {
                obj['objEzsignfolder'] = EzsignfolderRequest.constructFromObject(data['objEzsignfolder']);
            }
            if (data.hasOwnProperty('objEzsignfolderCompound')) {
                obj['objEzsignfolderCompound'] = EzsignfolderRequestCompound.constructFromObject(data['objEzsignfolderCompound']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfolderRequest}
     */
    getObjEzsignfolder() {
        return this.objEzsignfolder;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfolderRequest} objEzsignfolder
     */
    setObjEzsignfolder(objEzsignfolder) {
        this['objEzsignfolder'] = objEzsignfolder;
    }
/**
     * @return {module:eZmaxAPI/model/EzsignfolderRequestCompound}
     */
    getObjEzsignfolderCompound() {
        return this.objEzsignfolderCompound;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfolderRequestCompound} objEzsignfolderCompound
     */
    setObjEzsignfolderCompound(objEzsignfolderCompound) {
        this['objEzsignfolderCompound'] = objEzsignfolderCompound;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignfolderRequest} objEzsignfolder
 */
EzsignfolderCreateObjectV1Request.prototype['objEzsignfolder'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignfolderRequestCompound} objEzsignfolderCompound
 */
EzsignfolderCreateObjectV1Request.prototype['objEzsignfolderCompound'] = undefined;






export default EzsignfolderCreateObjectV1Request;

