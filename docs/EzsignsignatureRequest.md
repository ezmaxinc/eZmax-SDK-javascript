# EZmaxApiDefinition.EzsignsignatureRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fkiEzsignfoldersignerassociationID** | **Number** | The unique ID of the Ezsignfoldersignerassociation | 
**iEzsignpagePagenumber** | **Number** | The page number in the document where to apply the signature | 
**iEzsignsignatureX** | **Number** | The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \&quot;200\&quot; for the X coordinate. | 
**iEzsignsignatureY** | **Number** | The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \&quot;300\&quot; for the Y coordinate. | 
**iEzsignsignatureStep** | **Number** | The step when the Ezsignsigner will be invited to sign. | 
**eEzsignsignatureType** | [**FieldEEzsignsignatureType**](FieldEEzsignsignatureType.md) |  | 
**fkiEzsigndocumentID** | **Number** | The unique ID of the Ezsigntemplate | 


