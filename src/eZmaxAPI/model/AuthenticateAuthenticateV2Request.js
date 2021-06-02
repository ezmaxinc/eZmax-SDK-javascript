/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.45
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AuthenticateAuthenticateV2Request model module.
 * @module eZmaxAPI/model/AuthenticateAuthenticateV2Request
 * @version 1.0.45
 */
class AuthenticateAuthenticateV2Request {
    /**
     * Constructs a new <code>AuthenticateAuthenticateV2Request</code>.
     * Request for the /2/module/authenticate/authenticate API Request
     * @alias module:eZmaxAPI/model/AuthenticateAuthenticateV2Request
     * @param pksCustomerCode {String} The customer code assigned to your account
     */
    constructor(pksCustomerCode) { 
        
        AuthenticateAuthenticateV2Request.initialize(this, pksCustomerCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pksCustomerCode) { 
        obj['pksCustomerCode'] = pksCustomerCode;
    }

    /**
     * Constructs a <code>AuthenticateAuthenticateV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/AuthenticateAuthenticateV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/AuthenticateAuthenticateV2Request} The populated <code>AuthenticateAuthenticateV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticateAuthenticateV2Request();

            if (data.hasOwnProperty('pksCustomerCode')) {
                obj['pksCustomerCode'] = ApiClient.convertToType(data['pksCustomerCode'], 'String');
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('sUserLoginname')) {
                obj['sUserLoginname'] = ApiClient.convertToType(data['sUserLoginname'], 'String');
            }
            if (data.hasOwnProperty('sPassword')) {
                obj['sPassword'] = ApiClient.convertToType(data['sPassword'], 'String');
            }
            if (data.hasOwnProperty('sPasswordEncrypted')) {
                obj['sPasswordEncrypted'] = ApiClient.convertToType(data['sPasswordEncrypted'], 'String');
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
/**
     * Returns A Password.  Must meet complexity requirements
     * @return {String}
     */
    getSPassword() {
        return this.sPassword;
    }

    /**
     * Sets A Password.  Must meet complexity requirements
     * @param {String} sPassword A Password.  Must meet complexity requirements
     */
    setSPassword(sPassword) {
        this['sPassword'] = sPassword;
    }
/**
     * Returns A Password encrypted and encoded in Base64  Must meet complexity requirements
     * @return {String}
     */
    getSPasswordEncrypted() {
        return this.sPasswordEncrypted;
    }

    /**
     * Sets A Password encrypted and encoded in Base64  Must meet complexity requirements
     * @param {String} sPasswordEncrypted A Password encrypted and encoded in Base64  Must meet complexity requirements
     */
    setSPasswordEncrypted(sPasswordEncrypted) {
        this['sPasswordEncrypted'] = sPasswordEncrypted;
    }

}

/**
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
AuthenticateAuthenticateV2Request.prototype['pksCustomerCode'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
AuthenticateAuthenticateV2Request.prototype['sEmailAddress'] = undefined;

/**
 * The Login name of the User.
 * @member {String} sUserLoginname
 */
AuthenticateAuthenticateV2Request.prototype['sUserLoginname'] = undefined;

/**
 * A Password.  Must meet complexity requirements
 * @member {String} sPassword
 */
AuthenticateAuthenticateV2Request.prototype['sPassword'] = undefined;

/**
 * A Password encrypted and encoded in Base64  Must meet complexity requirements
 * @member {String} sPasswordEncrypted
 */
AuthenticateAuthenticateV2Request.prototype['sPasswordEncrypted'] = undefined;






export default AuthenticateAuthenticateV2Request;

