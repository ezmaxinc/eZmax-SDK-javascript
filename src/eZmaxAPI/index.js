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


import ApiClient from './ApiClient';
import ActivesessionGetCurrentV1Response from './model/ActivesessionGetCurrentV1Response';
import ActivesessionGetCurrentV1ResponseMPayload from './model/ActivesessionGetCurrentV1ResponseMPayload';
import AddressRequest from './model/AddressRequest';
import ApikeyCreateObjectV1Request from './model/ApikeyCreateObjectV1Request';
import ApikeyCreateObjectV1Response from './model/ApikeyCreateObjectV1Response';
import ApikeyCreateObjectV1ResponseMPayload from './model/ApikeyCreateObjectV1ResponseMPayload';
import ApikeyRequest from './model/ApikeyRequest';
import ApikeyRequestCompound from './model/ApikeyRequestCompound';
import ApikeyResponse from './model/ApikeyResponse';
import AttemptResponse from './model/AttemptResponse';
import CommonAudit from './model/CommonAudit';
import CommonGetAutocompleteV1Response from './model/CommonGetAutocompleteV1Response';
import CommonGetAutocompleteV1ResponseMPayload from './model/CommonGetAutocompleteV1ResponseMPayload';
import CommonResponse from './model/CommonResponse';
import CommonResponseError from './model/CommonResponseError';
import CommonResponseObjDebug from './model/CommonResponseObjDebug';
import CommonResponseObjDebugPayload from './model/CommonResponseObjDebugPayload';
import CommonResponseObjSQLQuery from './model/CommonResponseObjSQLQuery';
import CommonWebhook from './model/CommonWebhook';
import ContactRequest from './model/ContactRequest';
import ContactRequestCompound from './model/ContactRequestCompound';
import ContactRequestCompoundAllOf from './model/ContactRequestCompoundAllOf';
import ContactinformationsRequest from './model/ContactinformationsRequest';
import ContactinformationsRequestCompound from './model/ContactinformationsRequestCompound';
import EmailRequest from './model/EmailRequest';
import EzsigndocumentApplyEzsigntemplateV1Request from './model/EzsigndocumentApplyEzsigntemplateV1Request';
import EzsigndocumentApplyEzsigntemplateV1Response from './model/EzsigndocumentApplyEzsigntemplateV1Response';
import EzsigndocumentCreateObjectV1Request from './model/EzsigndocumentCreateObjectV1Request';
import EzsigndocumentCreateObjectV1Response from './model/EzsigndocumentCreateObjectV1Response';
import EzsigndocumentCreateObjectV1ResponseMPayload from './model/EzsigndocumentCreateObjectV1ResponseMPayload';
import EzsigndocumentDeleteObjectV1Response from './model/EzsigndocumentDeleteObjectV1Response';
import EzsigndocumentGetDownloadUrlV1Response from './model/EzsigndocumentGetDownloadUrlV1Response';
import EzsigndocumentGetDownloadUrlV1ResponseMPayload from './model/EzsigndocumentGetDownloadUrlV1ResponseMPayload';
import EzsigndocumentGetObjectV1Response from './model/EzsigndocumentGetObjectV1Response';
import EzsigndocumentGetObjectV1ResponseMPayload from './model/EzsigndocumentGetObjectV1ResponseMPayload';
import EzsigndocumentRequest from './model/EzsigndocumentRequest';
import EzsigndocumentRequestCompound from './model/EzsigndocumentRequestCompound';
import EzsigndocumentResponse from './model/EzsigndocumentResponse';
import EzsigndocumentResponseAllOf from './model/EzsigndocumentResponseAllOf';
import EzsigndocumentResponseCompound from './model/EzsigndocumentResponseCompound';
import EzsignfolderCreateObjectV1Request from './model/EzsignfolderCreateObjectV1Request';
import EzsignfolderCreateObjectV1Response from './model/EzsignfolderCreateObjectV1Response';
import EzsignfolderCreateObjectV1ResponseMPayload from './model/EzsignfolderCreateObjectV1ResponseMPayload';
import EzsignfolderDeleteObjectV1Response from './model/EzsignfolderDeleteObjectV1Response';
import EzsignfolderGetObjectV1Response from './model/EzsignfolderGetObjectV1Response';
import EzsignfolderGetObjectV1ResponseMPayload from './model/EzsignfolderGetObjectV1ResponseMPayload';
import EzsignfolderRequest from './model/EzsignfolderRequest';
import EzsignfolderRequestCompound from './model/EzsignfolderRequestCompound';
import EzsignfolderResponse from './model/EzsignfolderResponse';
import EzsignfolderResponseAllOf from './model/EzsignfolderResponseAllOf';
import EzsignfolderResponseCompound from './model/EzsignfolderResponseCompound';
import EzsignfolderSendV1Request from './model/EzsignfolderSendV1Request';
import EzsignfolderSendV1Response from './model/EzsignfolderSendV1Response';
import EzsignfoldersignerassociationCreateObjectV1Request from './model/EzsignfoldersignerassociationCreateObjectV1Request';
import EzsignfoldersignerassociationCreateObjectV1Response from './model/EzsignfoldersignerassociationCreateObjectV1Response';
import EzsignfoldersignerassociationCreateObjectV1ResponseMPayload from './model/EzsignfoldersignerassociationCreateObjectV1ResponseMPayload';
import EzsignfoldersignerassociationDeleteObjectV1Response from './model/EzsignfoldersignerassociationDeleteObjectV1Response';
import EzsignfoldersignerassociationGetInPersonLoginUrlV1Response from './model/EzsignfoldersignerassociationGetInPersonLoginUrlV1Response';
import EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload from './model/EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload';
import EzsignfoldersignerassociationGetObjectV1Response from './model/EzsignfoldersignerassociationGetObjectV1Response';
import EzsignfoldersignerassociationRequest from './model/EzsignfoldersignerassociationRequest';
import EzsignfoldersignerassociationRequestCompound from './model/EzsignfoldersignerassociationRequestCompound';
import EzsignsignatureCreateObjectV1Request from './model/EzsignsignatureCreateObjectV1Request';
import EzsignsignatureCreateObjectV1Response from './model/EzsignsignatureCreateObjectV1Response';
import EzsignsignatureCreateObjectV1ResponseMPayload from './model/EzsignsignatureCreateObjectV1ResponseMPayload';
import EzsignsignatureDeleteObjectV1Response from './model/EzsignsignatureDeleteObjectV1Response';
import EzsignsignatureGetObjectV1Response from './model/EzsignsignatureGetObjectV1Response';
import EzsignsignatureRequest from './model/EzsignsignatureRequest';
import EzsignsignatureRequestCompound from './model/EzsignsignatureRequestCompound';
import EzsignsignerRequest from './model/EzsignsignerRequest';
import EzsignsignerRequestCompound from './model/EzsignsignerRequestCompound';
import EzsignsignerRequestCompoundContact from './model/EzsignsignerRequestCompoundContact';
import FieldEEzsigndocumentStep from './model/FieldEEzsigndocumentStep';
import FieldEEzsignfolderSendreminderfrequency from './model/FieldEEzsignfolderSendreminderfrequency';
import FieldEEzsignfolderStep from './model/FieldEEzsignfolderStep';
import FieldEPhoneType from './model/FieldEPhoneType';
import FieldEUserType from './model/FieldEUserType';
import FieldEUserTypeSSPR from './model/FieldEUserTypeSSPR';
import FranchisereferalincomeCreateObjectV1Request from './model/FranchisereferalincomeCreateObjectV1Request';
import FranchisereferalincomeCreateObjectV1Response from './model/FranchisereferalincomeCreateObjectV1Response';
import FranchisereferalincomeCreateObjectV1ResponseMPayload from './model/FranchisereferalincomeCreateObjectV1ResponseMPayload';
import FranchisereferalincomeRequest from './model/FranchisereferalincomeRequest';
import FranchisereferalincomeRequestCompound from './model/FranchisereferalincomeRequestCompound';
import GlobalCustomerGetEndpointV1Response from './model/GlobalCustomerGetEndpointV1Response';
import MultilingualApikeyDescription from './model/MultilingualApikeyDescription';
import PhoneRequest from './model/PhoneRequest';
import SsprResetPasswordRequestV1Request from './model/SsprResetPasswordRequestV1Request';
import SsprResetPasswordV1Request from './model/SsprResetPasswordV1Request';
import SsprSendUsernamesV1Request from './model/SsprSendUsernamesV1Request';
import SsprUnlockAccountRequestV1Request from './model/SsprUnlockAccountRequestV1Request';
import SsprUnlockAccountV1Request from './model/SsprUnlockAccountV1Request';
import SsprValidateTokenV1Request from './model/SsprValidateTokenV1Request';
import UNUSEDEzsigndocumentEditObjectV1Request from './model/UNUSEDEzsigndocumentEditObjectV1Request';
import UNUSEDEzsigndocumentEditObjectV1Response from './model/UNUSEDEzsigndocumentEditObjectV1Response';
import UNUSEDEzsignfolderEditObjectV1Request from './model/UNUSEDEzsignfolderEditObjectV1Request';
import UNUSEDEzsignfolderEditObjectV1Response from './model/UNUSEDEzsignfolderEditObjectV1Response';
import UNUSEDEzsignfoldersignerassociationEditObjectV1Request from './model/UNUSEDEzsignfoldersignerassociationEditObjectV1Request';
import UNUSEDEzsignfoldersignerassociationEditObjectV1Response from './model/UNUSEDEzsignfoldersignerassociationEditObjectV1Response';
import UNUSEDEzsignsignatureEditObjectV1Request from './model/UNUSEDEzsignsignatureEditObjectV1Request';
import UNUSEDEzsignsignatureEditObjectV1Response from './model/UNUSEDEzsignsignatureEditObjectV1Response';
import UserCreateEzsignuserV1Request from './model/UserCreateEzsignuserV1Request';
import UserCreateEzsignuserV1Response from './model/UserCreateEzsignuserV1Response';
import UserCreateEzsignuserV1ResponseMPayload from './model/UserCreateEzsignuserV1ResponseMPayload';
import UserResponse from './model/UserResponse';
import UserResponseAllOf from './model/UserResponseAllOf';
import WebhookEzsignDocumentCompleted from './model/WebhookEzsignDocumentCompleted';
import WebhookEzsignDocumentCompletedAllOf from './model/WebhookEzsignDocumentCompletedAllOf';
import WebhookEzsignFolderCompleted from './model/WebhookEzsignFolderCompleted';
import WebhookEzsignFolderCompletedAllOf from './model/WebhookEzsignFolderCompletedAllOf';
import WebhookResponse from './model/WebhookResponse';
import WebhookUserUserCreated from './model/WebhookUserUserCreated';
import WebhookUserUserCreatedAllOf from './model/WebhookUserUserCreatedAllOf';
import WebsiteRequest from './model/WebsiteRequest';
import GlobalCustomerApi from './api/GlobalCustomerApi';
import ModuleSsprApi from './api/ModuleSsprApi';
import ModuleUserApi from './api/ModuleUserApi';
import ObjectActivesessionApi from './api/ObjectActivesessionApi';
import ObjectApikeyApi from './api/ObjectApikeyApi';
import ObjectEzsigndocumentApi from './api/ObjectEzsigndocumentApi';
import ObjectEzsignfolderApi from './api/ObjectEzsignfolderApi';
import ObjectEzsignfoldersignerassociationApi from './api/ObjectEzsignfoldersignerassociationApi';
import ObjectEzsignsignatureApi from './api/ObjectEzsignsignatureApi';
import ObjectFranchisebrokerApi from './api/ObjectFranchisebrokerApi';
import ObjectFranchiseofficeApi from './api/ObjectFranchiseofficeApi';
import ObjectFranchisereferalincomeApi from './api/ObjectFranchisereferalincomeApi';
import ObjectPeriodApi from './api/ObjectPeriodApi';


/**
* This_API_expose_all_the_functionnalities_for_the_eZmax_and_eZsign_applications_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var EZmaxApiDefinition = require('eZmaxAPI/index'); // See note below*.
* var xxxSvc = new EZmaxApiDefinition.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new EZmaxApiDefinition.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['eZmaxAPI/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new EZmaxApiDefinition.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new EZmaxApiDefinition.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module eZmaxAPI/index
* @version 1.0.41
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:eZmaxAPI/ApiClient}
     */
    ApiClient,

    /**
     * The ActivesessionGetCurrentV1Response model constructor.
     * @property {module:eZmaxAPI/model/ActivesessionGetCurrentV1Response}
     */
    ActivesessionGetCurrentV1Response,

    /**
     * The ActivesessionGetCurrentV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload}
     */
    ActivesessionGetCurrentV1ResponseMPayload,

    /**
     * The AddressRequest model constructor.
     * @property {module:eZmaxAPI/model/AddressRequest}
     */
    AddressRequest,

    /**
     * The ApikeyCreateObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/ApikeyCreateObjectV1Request}
     */
    ApikeyCreateObjectV1Request,

    /**
     * The ApikeyCreateObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/ApikeyCreateObjectV1Response}
     */
    ApikeyCreateObjectV1Response,

    /**
     * The ApikeyCreateObjectV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseMPayload}
     */
    ApikeyCreateObjectV1ResponseMPayload,

    /**
     * The ApikeyRequest model constructor.
     * @property {module:eZmaxAPI/model/ApikeyRequest}
     */
    ApikeyRequest,

    /**
     * The ApikeyRequestCompound model constructor.
     * @property {module:eZmaxAPI/model/ApikeyRequestCompound}
     */
    ApikeyRequestCompound,

    /**
     * The ApikeyResponse model constructor.
     * @property {module:eZmaxAPI/model/ApikeyResponse}
     */
    ApikeyResponse,

    /**
     * The AttemptResponse model constructor.
     * @property {module:eZmaxAPI/model/AttemptResponse}
     */
    AttemptResponse,

    /**
     * The CommonAudit model constructor.
     * @property {module:eZmaxAPI/model/CommonAudit}
     */
    CommonAudit,

    /**
     * The CommonGetAutocompleteV1Response model constructor.
     * @property {module:eZmaxAPI/model/CommonGetAutocompleteV1Response}
     */
    CommonGetAutocompleteV1Response,

    /**
     * The CommonGetAutocompleteV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/CommonGetAutocompleteV1ResponseMPayload}
     */
    CommonGetAutocompleteV1ResponseMPayload,

    /**
     * The CommonResponse model constructor.
     * @property {module:eZmaxAPI/model/CommonResponse}
     */
    CommonResponse,

    /**
     * The CommonResponseError model constructor.
     * @property {module:eZmaxAPI/model/CommonResponseError}
     */
    CommonResponseError,

    /**
     * The CommonResponseObjDebug model constructor.
     * @property {module:eZmaxAPI/model/CommonResponseObjDebug}
     */
    CommonResponseObjDebug,

    /**
     * The CommonResponseObjDebugPayload model constructor.
     * @property {module:eZmaxAPI/model/CommonResponseObjDebugPayload}
     */
    CommonResponseObjDebugPayload,

    /**
     * The CommonResponseObjSQLQuery model constructor.
     * @property {module:eZmaxAPI/model/CommonResponseObjSQLQuery}
     */
    CommonResponseObjSQLQuery,

    /**
     * The CommonWebhook model constructor.
     * @property {module:eZmaxAPI/model/CommonWebhook}
     */
    CommonWebhook,

    /**
     * The ContactRequest model constructor.
     * @property {module:eZmaxAPI/model/ContactRequest}
     */
    ContactRequest,

    /**
     * The ContactRequestCompound model constructor.
     * @property {module:eZmaxAPI/model/ContactRequestCompound}
     */
    ContactRequestCompound,

    /**
     * The ContactRequestCompoundAllOf model constructor.
     * @property {module:eZmaxAPI/model/ContactRequestCompoundAllOf}
     */
    ContactRequestCompoundAllOf,

    /**
     * The ContactinformationsRequest model constructor.
     * @property {module:eZmaxAPI/model/ContactinformationsRequest}
     */
    ContactinformationsRequest,

    /**
     * The ContactinformationsRequestCompound model constructor.
     * @property {module:eZmaxAPI/model/ContactinformationsRequestCompound}
     */
    ContactinformationsRequestCompound,

    /**
     * The EmailRequest model constructor.
     * @property {module:eZmaxAPI/model/EmailRequest}
     */
    EmailRequest,

    /**
     * The EzsigndocumentApplyEzsigntemplateV1Request model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV1Request}
     */
    EzsigndocumentApplyEzsigntemplateV1Request,

    /**
     * The EzsigndocumentApplyEzsigntemplateV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV1Response}
     */
    EzsigndocumentApplyEzsigntemplateV1Response,

    /**
     * The EzsigndocumentCreateObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentCreateObjectV1Request}
     */
    EzsigndocumentCreateObjectV1Request,

    /**
     * The EzsigndocumentCreateObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentCreateObjectV1Response}
     */
    EzsigndocumentCreateObjectV1Response,

    /**
     * The EzsigndocumentCreateObjectV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentCreateObjectV1ResponseMPayload}
     */
    EzsigndocumentCreateObjectV1ResponseMPayload,

    /**
     * The EzsigndocumentDeleteObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentDeleteObjectV1Response}
     */
    EzsigndocumentDeleteObjectV1Response,

    /**
     * The EzsigndocumentGetDownloadUrlV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentGetDownloadUrlV1Response}
     */
    EzsigndocumentGetDownloadUrlV1Response,

    /**
     * The EzsigndocumentGetDownloadUrlV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentGetDownloadUrlV1ResponseMPayload}
     */
    EzsigndocumentGetDownloadUrlV1ResponseMPayload,

    /**
     * The EzsigndocumentGetObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentGetObjectV1Response}
     */
    EzsigndocumentGetObjectV1Response,

    /**
     * The EzsigndocumentGetObjectV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentGetObjectV1ResponseMPayload}
     */
    EzsigndocumentGetObjectV1ResponseMPayload,

    /**
     * The EzsigndocumentRequest model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentRequest}
     */
    EzsigndocumentRequest,

    /**
     * The EzsigndocumentRequestCompound model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentRequestCompound}
     */
    EzsigndocumentRequestCompound,

    /**
     * The EzsigndocumentResponse model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentResponse}
     */
    EzsigndocumentResponse,

    /**
     * The EzsigndocumentResponseAllOf model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentResponseAllOf}
     */
    EzsigndocumentResponseAllOf,

    /**
     * The EzsigndocumentResponseCompound model constructor.
     * @property {module:eZmaxAPI/model/EzsigndocumentResponseCompound}
     */
    EzsigndocumentResponseCompound,

    /**
     * The EzsignfolderCreateObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderCreateObjectV1Request}
     */
    EzsignfolderCreateObjectV1Request,

    /**
     * The EzsignfolderCreateObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderCreateObjectV1Response}
     */
    EzsignfolderCreateObjectV1Response,

    /**
     * The EzsignfolderCreateObjectV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderCreateObjectV1ResponseMPayload}
     */
    EzsignfolderCreateObjectV1ResponseMPayload,

    /**
     * The EzsignfolderDeleteObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderDeleteObjectV1Response}
     */
    EzsignfolderDeleteObjectV1Response,

    /**
     * The EzsignfolderGetObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderGetObjectV1Response}
     */
    EzsignfolderGetObjectV1Response,

    /**
     * The EzsignfolderGetObjectV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderGetObjectV1ResponseMPayload}
     */
    EzsignfolderGetObjectV1ResponseMPayload,

    /**
     * The EzsignfolderRequest model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderRequest}
     */
    EzsignfolderRequest,

    /**
     * The EzsignfolderRequestCompound model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderRequestCompound}
     */
    EzsignfolderRequestCompound,

    /**
     * The EzsignfolderResponse model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderResponse}
     */
    EzsignfolderResponse,

    /**
     * The EzsignfolderResponseAllOf model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderResponseAllOf}
     */
    EzsignfolderResponseAllOf,

    /**
     * The EzsignfolderResponseCompound model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderResponseCompound}
     */
    EzsignfolderResponseCompound,

    /**
     * The EzsignfolderSendV1Request model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderSendV1Request}
     */
    EzsignfolderSendV1Request,

    /**
     * The EzsignfolderSendV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignfolderSendV1Response}
     */
    EzsignfolderSendV1Response,

    /**
     * The EzsignfoldersignerassociationCreateObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1Request}
     */
    EzsignfoldersignerassociationCreateObjectV1Request,

    /**
     * The EzsignfoldersignerassociationCreateObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1Response}
     */
    EzsignfoldersignerassociationCreateObjectV1Response,

    /**
     * The EzsignfoldersignerassociationCreateObjectV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1ResponseMPayload}
     */
    EzsignfoldersignerassociationCreateObjectV1ResponseMPayload,

    /**
     * The EzsignfoldersignerassociationDeleteObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignfoldersignerassociationDeleteObjectV1Response}
     */
    EzsignfoldersignerassociationDeleteObjectV1Response,

    /**
     * The EzsignfoldersignerassociationGetInPersonLoginUrlV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignfoldersignerassociationGetInPersonLoginUrlV1Response}
     */
    EzsignfoldersignerassociationGetInPersonLoginUrlV1Response,

    /**
     * The EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload}
     */
    EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload,

    /**
     * The EzsignfoldersignerassociationGetObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1Response}
     */
    EzsignfoldersignerassociationGetObjectV1Response,

    /**
     * The EzsignfoldersignerassociationRequest model constructor.
     * @property {module:eZmaxAPI/model/EzsignfoldersignerassociationRequest}
     */
    EzsignfoldersignerassociationRequest,

    /**
     * The EzsignfoldersignerassociationRequestCompound model constructor.
     * @property {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound}
     */
    EzsignfoldersignerassociationRequestCompound,

    /**
     * The EzsignsignatureCreateObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignatureCreateObjectV1Request}
     */
    EzsignsignatureCreateObjectV1Request,

    /**
     * The EzsignsignatureCreateObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignatureCreateObjectV1Response}
     */
    EzsignsignatureCreateObjectV1Response,

    /**
     * The EzsignsignatureCreateObjectV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignatureCreateObjectV1ResponseMPayload}
     */
    EzsignsignatureCreateObjectV1ResponseMPayload,

    /**
     * The EzsignsignatureDeleteObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignatureDeleteObjectV1Response}
     */
    EzsignsignatureDeleteObjectV1Response,

    /**
     * The EzsignsignatureGetObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignatureGetObjectV1Response}
     */
    EzsignsignatureGetObjectV1Response,

    /**
     * The EzsignsignatureRequest model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignatureRequest}
     */
    EzsignsignatureRequest,

    /**
     * The EzsignsignatureRequestCompound model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignatureRequestCompound}
     */
    EzsignsignatureRequestCompound,

    /**
     * The EzsignsignerRequest model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignerRequest}
     */
    EzsignsignerRequest,

    /**
     * The EzsignsignerRequestCompound model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignerRequestCompound}
     */
    EzsignsignerRequestCompound,

    /**
     * The EzsignsignerRequestCompoundContact model constructor.
     * @property {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact}
     */
    EzsignsignerRequestCompoundContact,

    /**
     * The FieldEEzsigndocumentStep model constructor.
     * @property {module:eZmaxAPI/model/FieldEEzsigndocumentStep}
     */
    FieldEEzsigndocumentStep,

    /**
     * The FieldEEzsignfolderSendreminderfrequency model constructor.
     * @property {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency}
     */
    FieldEEzsignfolderSendreminderfrequency,

    /**
     * The FieldEEzsignfolderStep model constructor.
     * @property {module:eZmaxAPI/model/FieldEEzsignfolderStep}
     */
    FieldEEzsignfolderStep,

    /**
     * The FieldEPhoneType model constructor.
     * @property {module:eZmaxAPI/model/FieldEPhoneType}
     */
    FieldEPhoneType,

    /**
     * The FieldEUserType model constructor.
     * @property {module:eZmaxAPI/model/FieldEUserType}
     */
    FieldEUserType,

    /**
     * The FieldEUserTypeSSPR model constructor.
     * @property {module:eZmaxAPI/model/FieldEUserTypeSSPR}
     */
    FieldEUserTypeSSPR,

    /**
     * The FranchisereferalincomeCreateObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request}
     */
    FranchisereferalincomeCreateObjectV1Request,

    /**
     * The FranchisereferalincomeCreateObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Response}
     */
    FranchisereferalincomeCreateObjectV1Response,

    /**
     * The FranchisereferalincomeCreateObjectV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseMPayload}
     */
    FranchisereferalincomeCreateObjectV1ResponseMPayload,

    /**
     * The FranchisereferalincomeRequest model constructor.
     * @property {module:eZmaxAPI/model/FranchisereferalincomeRequest}
     */
    FranchisereferalincomeRequest,

    /**
     * The FranchisereferalincomeRequestCompound model constructor.
     * @property {module:eZmaxAPI/model/FranchisereferalincomeRequestCompound}
     */
    FranchisereferalincomeRequestCompound,

    /**
     * The GlobalCustomerGetEndpointV1Response model constructor.
     * @property {module:eZmaxAPI/model/GlobalCustomerGetEndpointV1Response}
     */
    GlobalCustomerGetEndpointV1Response,

    /**
     * The MultilingualApikeyDescription model constructor.
     * @property {module:eZmaxAPI/model/MultilingualApikeyDescription}
     */
    MultilingualApikeyDescription,

    /**
     * The PhoneRequest model constructor.
     * @property {module:eZmaxAPI/model/PhoneRequest}
     */
    PhoneRequest,

    /**
     * The SsprResetPasswordRequestV1Request model constructor.
     * @property {module:eZmaxAPI/model/SsprResetPasswordRequestV1Request}
     */
    SsprResetPasswordRequestV1Request,

    /**
     * The SsprResetPasswordV1Request model constructor.
     * @property {module:eZmaxAPI/model/SsprResetPasswordV1Request}
     */
    SsprResetPasswordV1Request,

    /**
     * The SsprSendUsernamesV1Request model constructor.
     * @property {module:eZmaxAPI/model/SsprSendUsernamesV1Request}
     */
    SsprSendUsernamesV1Request,

    /**
     * The SsprUnlockAccountRequestV1Request model constructor.
     * @property {module:eZmaxAPI/model/SsprUnlockAccountRequestV1Request}
     */
    SsprUnlockAccountRequestV1Request,

    /**
     * The SsprUnlockAccountV1Request model constructor.
     * @property {module:eZmaxAPI/model/SsprUnlockAccountV1Request}
     */
    SsprUnlockAccountV1Request,

    /**
     * The SsprValidateTokenV1Request model constructor.
     * @property {module:eZmaxAPI/model/SsprValidateTokenV1Request}
     */
    SsprValidateTokenV1Request,

    /**
     * The UNUSEDEzsigndocumentEditObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/UNUSEDEzsigndocumentEditObjectV1Request}
     */
    UNUSEDEzsigndocumentEditObjectV1Request,

    /**
     * The UNUSEDEzsigndocumentEditObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/UNUSEDEzsigndocumentEditObjectV1Response}
     */
    UNUSEDEzsigndocumentEditObjectV1Response,

    /**
     * The UNUSEDEzsignfolderEditObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/UNUSEDEzsignfolderEditObjectV1Request}
     */
    UNUSEDEzsignfolderEditObjectV1Request,

    /**
     * The UNUSEDEzsignfolderEditObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/UNUSEDEzsignfolderEditObjectV1Response}
     */
    UNUSEDEzsignfolderEditObjectV1Response,

    /**
     * The UNUSEDEzsignfoldersignerassociationEditObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/UNUSEDEzsignfoldersignerassociationEditObjectV1Request}
     */
    UNUSEDEzsignfoldersignerassociationEditObjectV1Request,

    /**
     * The UNUSEDEzsignfoldersignerassociationEditObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/UNUSEDEzsignfoldersignerassociationEditObjectV1Response}
     */
    UNUSEDEzsignfoldersignerassociationEditObjectV1Response,

    /**
     * The UNUSEDEzsignsignatureEditObjectV1Request model constructor.
     * @property {module:eZmaxAPI/model/UNUSEDEzsignsignatureEditObjectV1Request}
     */
    UNUSEDEzsignsignatureEditObjectV1Request,

    /**
     * The UNUSEDEzsignsignatureEditObjectV1Response model constructor.
     * @property {module:eZmaxAPI/model/UNUSEDEzsignsignatureEditObjectV1Response}
     */
    UNUSEDEzsignsignatureEditObjectV1Response,

    /**
     * The UserCreateEzsignuserV1Request model constructor.
     * @property {module:eZmaxAPI/model/UserCreateEzsignuserV1Request}
     */
    UserCreateEzsignuserV1Request,

    /**
     * The UserCreateEzsignuserV1Response model constructor.
     * @property {module:eZmaxAPI/model/UserCreateEzsignuserV1Response}
     */
    UserCreateEzsignuserV1Response,

    /**
     * The UserCreateEzsignuserV1ResponseMPayload model constructor.
     * @property {module:eZmaxAPI/model/UserCreateEzsignuserV1ResponseMPayload}
     */
    UserCreateEzsignuserV1ResponseMPayload,

    /**
     * The UserResponse model constructor.
     * @property {module:eZmaxAPI/model/UserResponse}
     */
    UserResponse,

    /**
     * The UserResponseAllOf model constructor.
     * @property {module:eZmaxAPI/model/UserResponseAllOf}
     */
    UserResponseAllOf,

    /**
     * The WebhookEzsignDocumentCompleted model constructor.
     * @property {module:eZmaxAPI/model/WebhookEzsignDocumentCompleted}
     */
    WebhookEzsignDocumentCompleted,

    /**
     * The WebhookEzsignDocumentCompletedAllOf model constructor.
     * @property {module:eZmaxAPI/model/WebhookEzsignDocumentCompletedAllOf}
     */
    WebhookEzsignDocumentCompletedAllOf,

    /**
     * The WebhookEzsignFolderCompleted model constructor.
     * @property {module:eZmaxAPI/model/WebhookEzsignFolderCompleted}
     */
    WebhookEzsignFolderCompleted,

    /**
     * The WebhookEzsignFolderCompletedAllOf model constructor.
     * @property {module:eZmaxAPI/model/WebhookEzsignFolderCompletedAllOf}
     */
    WebhookEzsignFolderCompletedAllOf,

    /**
     * The WebhookResponse model constructor.
     * @property {module:eZmaxAPI/model/WebhookResponse}
     */
    WebhookResponse,

    /**
     * The WebhookUserUserCreated model constructor.
     * @property {module:eZmaxAPI/model/WebhookUserUserCreated}
     */
    WebhookUserUserCreated,

    /**
     * The WebhookUserUserCreatedAllOf model constructor.
     * @property {module:eZmaxAPI/model/WebhookUserUserCreatedAllOf}
     */
    WebhookUserUserCreatedAllOf,

    /**
     * The WebsiteRequest model constructor.
     * @property {module:eZmaxAPI/model/WebsiteRequest}
     */
    WebsiteRequest,

    /**
    * The GlobalCustomerApi service constructor.
    * @property {module:eZmaxAPI/api/GlobalCustomerApi}
    */
    GlobalCustomerApi,

    /**
    * The ModuleSsprApi service constructor.
    * @property {module:eZmaxAPI/api/ModuleSsprApi}
    */
    ModuleSsprApi,

    /**
    * The ModuleUserApi service constructor.
    * @property {module:eZmaxAPI/api/ModuleUserApi}
    */
    ModuleUserApi,

    /**
    * The ObjectActivesessionApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectActivesessionApi}
    */
    ObjectActivesessionApi,

    /**
    * The ObjectApikeyApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectApikeyApi}
    */
    ObjectApikeyApi,

    /**
    * The ObjectEzsigndocumentApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectEzsigndocumentApi}
    */
    ObjectEzsigndocumentApi,

    /**
    * The ObjectEzsignfolderApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectEzsignfolderApi}
    */
    ObjectEzsignfolderApi,

    /**
    * The ObjectEzsignfoldersignerassociationApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectEzsignfoldersignerassociationApi}
    */
    ObjectEzsignfoldersignerassociationApi,

    /**
    * The ObjectEzsignsignatureApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectEzsignsignatureApi}
    */
    ObjectEzsignsignatureApi,

    /**
    * The ObjectFranchisebrokerApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectFranchisebrokerApi}
    */
    ObjectFranchisebrokerApi,

    /**
    * The ObjectFranchiseofficeApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectFranchiseofficeApi}
    */
    ObjectFranchiseofficeApi,

    /**
    * The ObjectFranchisereferalincomeApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectFranchisereferalincomeApi}
    */
    ObjectFranchisereferalincomeApi,

    /**
    * The ObjectPeriodApi service constructor.
    * @property {module:eZmaxAPI/api/ObjectPeriodApi}
    */
    ObjectPeriodApi
};
