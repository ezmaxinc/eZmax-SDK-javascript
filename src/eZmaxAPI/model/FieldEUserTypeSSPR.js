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
* Enum class FieldEUserTypeSSPR.
* @enum {}
* @readonly
*/
export default class FieldEUserTypeSSPR {
    
        /**
         * value: "EzsignUser"
         * @const
         */
        "EzsignUser" = "EzsignUser";

    
        /**
         * value: "Native"
         * @const
         */
        "Native" = "Native";

    

    /**
    * Returns a <code>FieldEUserTypeSSPR</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEUserTypeSSPR} The enum <code>FieldEUserTypeSSPR</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

