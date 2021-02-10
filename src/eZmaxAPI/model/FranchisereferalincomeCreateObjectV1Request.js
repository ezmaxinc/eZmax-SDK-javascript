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
import FranchisereferalincomeRequest from './FranchisereferalincomeRequest';
import FranchisereferalincomeRequestCompound from './FranchisereferalincomeRequestCompound';

/**
 * The FranchisereferalincomeCreateObjectV1Request model module.
 * @module eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request
 * @version 1.0.29
 */
class FranchisereferalincomeCreateObjectV1Request {
    /**
     * Constructs a new <code>FranchisereferalincomeCreateObjectV1Request</code>.
     * Request for the /1/object/franchisereferalincome/createObject API Request
     * @alias module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request
     */
    constructor() { 
        
        FranchisereferalincomeCreateObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FranchisereferalincomeCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request} The populated <code>FranchisereferalincomeCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchisereferalincomeCreateObjectV1Request();

            if (data.hasOwnProperty('objFranchisereferalincome')) {
                obj['objFranchisereferalincome'] = FranchisereferalincomeRequest.constructFromObject(data['objFranchisereferalincome']);
            }
            if (data.hasOwnProperty('objFranchisereferalincomeCompound')) {
                obj['objFranchisereferalincomeCompound'] = FranchisereferalincomeRequestCompound.constructFromObject(data['objFranchisereferalincomeCompound']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/FranchisereferalincomeRequest}
     */
    getObjFranchisereferalincome() {
        return this.objFranchisereferalincome;
    }

    /**
     * @param {module:eZmaxAPI/model/FranchisereferalincomeRequest} objFranchisereferalincome
     */
    setObjFranchisereferalincome(objFranchisereferalincome) {
        this['objFranchisereferalincome'] = objFranchisereferalincome;
    }
/**
     * @return {module:eZmaxAPI/model/FranchisereferalincomeRequestCompound}
     */
    getObjFranchisereferalincomeCompound() {
        return this.objFranchisereferalincomeCompound;
    }

    /**
     * @param {module:eZmaxAPI/model/FranchisereferalincomeRequestCompound} objFranchisereferalincomeCompound
     */
    setObjFranchisereferalincomeCompound(objFranchisereferalincomeCompound) {
        this['objFranchisereferalincomeCompound'] = objFranchisereferalincomeCompound;
    }

}

/**
 * @member {module:eZmaxAPI/model/FranchisereferalincomeRequest} objFranchisereferalincome
 */
FranchisereferalincomeCreateObjectV1Request.prototype['objFranchisereferalincome'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FranchisereferalincomeRequestCompound} objFranchisereferalincomeCompound
 */
FranchisereferalincomeCreateObjectV1Request.prototype['objFranchisereferalincomeCompound'] = undefined;






export default FranchisereferalincomeCreateObjectV1Request;

