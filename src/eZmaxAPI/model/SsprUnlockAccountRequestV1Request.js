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
import FieldEUserTypeSSPR from './FieldEUserTypeSSPR';

/**
 * The SsprUnlockAccountRequestV1Request model module.
 * @module eZmaxAPI/model/SsprUnlockAccountRequestV1Request
 * @version 1.0.46
 */
class SsprUnlockAccountRequestV1Request {
    /**
     * Constructs a new <code>SsprUnlockAccountRequestV1Request</code>.
     * Request for the /1/module/sspr/unlockAccountRequest API Request
     * @alias module:eZmaxAPI/model/SsprUnlockAccountRequestV1Request
     * @param pksCustomerCode {String} The customer code assigned to your account
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param eUserTypeSSPR {module:eZmaxAPI/model/FieldEUserTypeSSPR} 
     */
    constructor(pksCustomerCode, fkiLanguageID, eUserTypeSSPR) { 
        
        SsprUnlockAccountRequestV1Request.initialize(this, pksCustomerCode, fkiLanguageID, eUserTypeSSPR);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pksCustomerCode, fkiLanguageID, eUserTypeSSPR) { 
        obj['pksCustomerCode'] = pksCustomerCode;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['eUserTypeSSPR'] = eUserTypeSSPR;
    }

    /**
     * Constructs a <code>SsprUnlockAccountRequestV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SsprUnlockAccountRequestV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SsprUnlockAccountRequestV1Request} The populated <code>SsprUnlockAccountRequestV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsprUnlockAccountRequestV1Request();

            if (data.hasOwnProperty('pksCustomerCode')) {
                obj['pksCustomerCode'] = ApiClient.convertToType(data['pksCustomerCode'], 'String');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('eUserTypeSSPR')) {
                obj['eUserTypeSSPR'] = FieldEUserTypeSSPR.constructFromObject(data['eUserTypeSSPR']);
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('sUserLoginname')) {
                obj['sUserLoginname'] = ApiClient.convertToType(data['sUserLoginname'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The customer code assigned to your account
     * @return {String}
     */
    getPksCustomerCode() {
        return this.pksCustomerCode;
    }

    /**
     * Sets The customer code assigned to your account
     * @param {String} pksCustomerCode The customer code assigned to your account
     */
    setPksCustomerCode(pksCustomerCode) {
        this['pksCustomerCode'] = pksCustomerCode;
    }
/**
     * Returns The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * minimum: 1
     * maximum: 2
     * @return {Number}
     */
    getFkiLanguageID() {
        return this.fkiLanguageID;
    }

    /**
     * Sets The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param {Number} fkiLanguageID The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    setFkiLanguageID(fkiLanguageID) {
        this['fkiLanguageID'] = fkiLanguageID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEUserTypeSSPR}
     */
    getEUserTypeSSPR() {
        return this.eUserTypeSSPR;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEUserTypeSSPR} eUserTypeSSPR
     */
    setEUserTypeSSPR(eUserTypeSSPR) {
        this['eUserTypeSSPR'] = eUserTypeSSPR;
    }
/**
     * Returns The email address.
     * @return {String}
     */
    getSEmailAddress() {
        return this.sEmailAddress;
    }

    /**
     * Sets The email address.
     * @param {String} sEmailAddress The email address.
     */
    setSEmailAddress(sEmailAddress) {
        this['sEmailAddress'] = sEmailAddress;
    }
/**
     * Returns The Login name of the User.
     * @return {String}
     */
    getSUserLoginname() {
        return this.sUserLoginname;
    }

    /**
     * Sets The Login name of the User.
     * @param {String} sUserLoginname The Login name of the User.
     */
    setSUserLoginname(sUserLoginname) {
        this['sUserLoginname'] = sUserLoginname;
    }

}

/**
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
SsprUnlockAccountRequestV1Request.prototype['pksCustomerCode'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
SsprUnlockAccountRequestV1Request.prototype['fkiLanguageID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEUserTypeSSPR} eUserTypeSSPR
 */
SsprUnlockAccountRequestV1Request.prototype['eUserTypeSSPR'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
SsprUnlockAccountRequestV1Request.prototype['sEmailAddress'] = undefined;

/**
 * The Login name of the User.
 * @member {String} sUserLoginname
 */
SsprUnlockAccountRequestV1Request.prototype['sUserLoginname'] = undefined;






export default SsprUnlockAccountRequestV1Request;

