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
* Enum class FieldEEzsigndocumentStep.
* @enum {}
* @readonly
*/
export default class FieldEEzsigndocumentStep {
    
        /**
         * value: "Unsent"
         * @const
         */
        "Unsent" = "Unsent";

    
        /**
         * value: "Unsigned"
         * @const
         */
        "Unsigned" = "Unsigned";

    
        /**
         * value: "PartiallySigned"
         * @const
         */
        "PartiallySigned" = "PartiallySigned";

    
        /**
         * value: "Completed"
         * @const
         */
        "Completed" = "Completed";

    

    /**
    * Returns a <code>FieldEEzsigndocumentStep</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsigndocumentStep} The enum <code>FieldEEzsigndocumentStep</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

