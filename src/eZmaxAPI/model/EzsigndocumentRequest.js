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

/**
 * The EzsigndocumentRequest model module.
 * @module eZmaxAPI/model/EzsigndocumentRequest
 * @version 1.0.29
 */
class EzsigndocumentRequest {
    /**
     * Constructs a new <code>EzsigndocumentRequest</code>.
     * An Ezsigndocument Object
     * @alias module:eZmaxAPI/model/EzsigndocumentRequest
     * @param eEzsigndocumentSource {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentSourceEnum} Indicates where to look for the document binary content.
     * @param eEzsigndocumentFormat {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentFormatEnum} Indicates the format of the document.
     * @param fkiEzsignfolderID {Number} A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     * @param dtEzsigndocumentDuedate {String} Represent a Date Time. The timezone is the one configured in the User's profile.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsigndocumentFilename {String} The actual file name that will be used when downloading or attaching to an email.
     * @param sEzsigndocumentName {String} The name of the document that will be presented to Ezsignfoldersignerassociations
     */
    constructor(eEzsigndocumentSource, eEzsigndocumentFormat, fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentFilename, sEzsigndocumentName) { 
        
        EzsigndocumentRequest.initialize(this, eEzsigndocumentSource, eEzsigndocumentFormat, fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentFilename, sEzsigndocumentName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eEzsigndocumentSource, eEzsigndocumentFormat, fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentFilename, sEzsigndocumentName) { 
        obj['eEzsigndocumentSource'] = eEzsigndocumentSource;
        obj['eEzsigndocumentFormat'] = eEzsigndocumentFormat;
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
        obj['dtEzsigndocumentDuedate'] = dtEzsigndocumentDuedate;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sEzsigndocumentFilename'] = sEzsigndocumentFilename;
        obj['sEzsigndocumentName'] = sEzsigndocumentName;
    }

    /**
     * Constructs a <code>EzsigndocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentRequest} The populated <code>EzsigndocumentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentRequest();

            if (data.hasOwnProperty('eEzsigndocumentSource')) {
                obj['eEzsigndocumentSource'] = ApiClient.convertToType(data['eEzsigndocumentSource'], 'String');
            }
            if (data.hasOwnProperty('eEzsigndocumentFormat')) {
                obj['eEzsigndocumentFormat'] = ApiClient.convertToType(data['eEzsigndocumentFormat'], 'String');
            }
            if (data.hasOwnProperty('sEzsigndocumentBase64')) {
                obj['sEzsigndocumentBase64'] = ApiClient.convertToType(data['sEzsigndocumentBase64'], 'Blob');
            }
            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('dtEzsigndocumentDuedate')) {
                obj['dtEzsigndocumentDuedate'] = ApiClient.convertToType(data['dtEzsigndocumentDuedate'], 'String');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigndocumentFilename')) {
                obj['sEzsigndocumentFilename'] = ApiClient.convertToType(data['sEzsigndocumentFilename'], 'String');
            }
            if (data.hasOwnProperty('sEzsigndocumentName')) {
                obj['sEzsigndocumentName'] = ApiClient.convertToType(data['sEzsigndocumentName'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Indicates where to look for the document binary content.
     * @return {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentSourceEnum}
     */
    getEEzsigndocumentSource() {
        return this.eEzsigndocumentSource;
    }

    /**
     * Sets Indicates where to look for the document binary content.
     * @param {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentSourceEnum} eEzsigndocumentSource Indicates where to look for the document binary content.
     */
    setEEzsigndocumentSource(eEzsigndocumentSource) {
        this['eEzsigndocumentSource'] = eEzsigndocumentSource;
    }
/**
     * Returns Indicates the format of the document.
     * @return {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentFormatEnum}
     */
    getEEzsigndocumentFormat() {
        return this.eEzsigndocumentFormat;
    }

    /**
     * Sets Indicates the format of the document.
     * @param {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentFormatEnum} eEzsigndocumentFormat Indicates the format of the document.
     */
    setEEzsigndocumentFormat(eEzsigndocumentFormat) {
        this['eEzsigndocumentFormat'] = eEzsigndocumentFormat;
    }
/**
     * Returns The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
     * @return {Blob}
     */
    getSEzsigndocumentBase64() {
        return this.sEzsigndocumentBase64;
    }

    /**
     * Sets The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
     * @param {Blob} sEzsigndocumentBase64 The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
     */
    setSEzsigndocumentBase64(sEzsigndocumentBase64) {
        this['sEzsigndocumentBase64'] = sEzsigndocumentBase64;
    }
/**
     * Returns A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     * minimum: 1
     * @return {Number}
     */
    getFkiEzsignfolderID() {
        return this.fkiEzsignfolderID;
    }

    /**
     * Sets A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     * @param {Number} fkiEzsignfolderID A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     */
    setFkiEzsignfolderID(fkiEzsignfolderID) {
        this['fkiEzsignfolderID'] = fkiEzsignfolderID;
    }
/**
     * Returns Represent a Date Time. The timezone is the one configured in the User's profile.
     * @return {String}
     */
    getDtEzsigndocumentDuedate() {
        return this.dtEzsigndocumentDuedate;
    }

    /**
     * Sets Represent a Date Time. The timezone is the one configured in the User's profile.
     * @param {String} dtEzsigndocumentDuedate Represent a Date Time. The timezone is the one configured in the User's profile.
     */
    setDtEzsigndocumentDuedate(dtEzsigndocumentDuedate) {
        this['dtEzsigndocumentDuedate'] = dtEzsigndocumentDuedate;
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
     * Returns The actual file name that will be used when downloading or attaching to an email.
     * @return {String}
     */
    getSEzsigndocumentFilename() {
        return this.sEzsigndocumentFilename;
    }

    /**
     * Sets The actual file name that will be used when downloading or attaching to an email.
     * @param {String} sEzsigndocumentFilename The actual file name that will be used when downloading or attaching to an email.
     */
    setSEzsigndocumentFilename(sEzsigndocumentFilename) {
        this['sEzsigndocumentFilename'] = sEzsigndocumentFilename;
    }
/**
     * Returns The name of the document that will be presented to Ezsignfoldersignerassociations
     * @return {String}
     */
    getSEzsigndocumentName() {
        return this.sEzsigndocumentName;
    }

    /**
     * Sets The name of the document that will be presented to Ezsignfoldersignerassociations
     * @param {String} sEzsigndocumentName The name of the document that will be presented to Ezsignfoldersignerassociations
     */
    setSEzsigndocumentName(sEzsigndocumentName) {
        this['sEzsigndocumentName'] = sEzsigndocumentName;
    }

}

/**
 * Indicates where to look for the document binary content.
 * @member {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentSourceEnum} eEzsigndocumentSource
 */
EzsigndocumentRequest.prototype['eEzsigndocumentSource'] = undefined;

/**
 * Indicates the format of the document.
 * @member {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentFormatEnum} eEzsigndocumentFormat
 */
EzsigndocumentRequest.prototype['eEzsigndocumentFormat'] = undefined;

/**
 * The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
 * @member {Blob} sEzsigndocumentBase64
 */
EzsigndocumentRequest.prototype['sEzsigndocumentBase64'] = undefined;

/**
 * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
 * @member {Number} fkiEzsignfolderID
 */
EzsigndocumentRequest.prototype['fkiEzsignfolderID'] = undefined;

/**
 * Represent a Date Time. The timezone is the one configured in the User's profile.
 * @member {String} dtEzsigndocumentDuedate
 */
EzsigndocumentRequest.prototype['dtEzsigndocumentDuedate'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigndocumentRequest.prototype['fkiLanguageID'] = undefined;

/**
 * The actual file name that will be used when downloading or attaching to an email.
 * @member {String} sEzsigndocumentFilename
 */
EzsigndocumentRequest.prototype['sEzsigndocumentFilename'] = undefined;

/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
EzsigndocumentRequest.prototype['sEzsigndocumentName'] = undefined;





/**
 * Allowed values for the <code>eEzsigndocumentSource</code> property.
 * @enum {String}
 * @readonly
 */
EzsigndocumentRequest['EEzsigndocumentSourceEnum'] = {

    /**
     * value: "Base64"
     * @const
     */
    "Base64": "Base64"
};


/**
 * Allowed values for the <code>eEzsigndocumentFormat</code> property.
 * @enum {String}
 * @readonly
 */
EzsigndocumentRequest['EEzsigndocumentFormatEnum'] = {

    /**
     * value: "Pdf"
     * @const
     */
    "Pdf": "Pdf"
};



export default EzsigndocumentRequest;

