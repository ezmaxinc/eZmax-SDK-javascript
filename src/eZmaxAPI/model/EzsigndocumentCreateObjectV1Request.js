/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don't waste too much time looking for it. Contact support-api@ezmax.ca, we're here to help. We are developpers so we know programmers don't like bad documentation. If you don't find what you need in the documentation, let us know, we'll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.27
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigndocumentRequest from './EzsigndocumentRequest';
import EzsigndocumentRequestCompound from './EzsigndocumentRequestCompound';

/**
 * The EzsigndocumentCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigndocumentCreateObjectV1Request
 * @version 1.0.27
 */
class EzsigndocumentCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsigndocumentCreateObjectV1Request</code>.
     * Request for the /1/object/ezsigndocument/createObject API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentCreateObjectV1Request
     */
    constructor() { 
        
        EzsigndocumentCreateObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsigndocumentCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentCreateObjectV1Request} The populated <code>EzsigndocumentCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentCreateObjectV1Request();

            if (data.hasOwnProperty('objEzsigndocument')) {
                obj['objEzsigndocument'] = EzsigndocumentRequest.constructFromObject(data['objEzsigndocument']);
            }
            if (data.hasOwnProperty('objEzsigndocumentCompound')) {
                obj['objEzsigndocumentCompound'] = EzsigndocumentRequestCompound.constructFromObject(data['objEzsigndocumentCompound']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentRequest}
     */
    getObjEzsigndocument() {
        return this.objEzsigndocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentRequest} objEzsigndocument
     */
    setObjEzsigndocument(objEzsigndocument) {
        this['objEzsigndocument'] = objEzsigndocument;
    }
/**
     * @return {module:eZmaxAPI/model/EzsigndocumentRequestCompound}
     */
    getObjEzsigndocumentCompound() {
        return this.objEzsigndocumentCompound;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentRequestCompound} objEzsigndocumentCompound
     */
    setObjEzsigndocumentCompound(objEzsigndocumentCompound) {
        this['objEzsigndocumentCompound'] = objEzsigndocumentCompound;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentRequest} objEzsigndocument
 */
EzsigndocumentCreateObjectV1Request.prototype['objEzsigndocument'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentRequestCompound} objEzsigndocumentCompound
 */
EzsigndocumentCreateObjectV1Request.prototype['objEzsigndocumentCompound'] = undefined;






export default EzsigndocumentCreateObjectV1Request;
