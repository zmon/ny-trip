Creating a Google Form and Spread Sheet with GEOCODING
------------------------------------------------------
At the end of this you will have

* A Google Form that appends to a Google Spreadsheet
* A Google Spreadsheet that is GEOCODED when updated
  The Longitude and Latitude for the address is updates.

Prerequisites:

* Google account, it is best to create a new account for each project

You will also need to:

* Get a Google Map API


Create a Google Form
====================
Go to your google drive
* Create a form
* Add fields you want to 
* Add Location Fields - The names are important, if you change them you will need to adjust where they are used.
  * `Street Address of the Project`, Text, Required.   Users will be able to enter addresses in the same formats that google maps use.  i.g. 31st and Troost 
  * `City`, Text, Required
  * `State`, Text, Required
  * `Zip`, Text
* Confirmation page: 
    "Your response has been recorded.  Please enter your project only once.  It make take a few moments to appear on the map."


Verify that the From saves to the same spreadsheet each time.
=============================================================
Set responses to be recorded in a single spreadsheet.

* Responses -> Change Responses Destination
* New Spread Sheet
* UN-CHECK "Always create a new spreadsheet"
* Create

Fill out the form to create a row in the Spread Sheet, click 'View live form'


Add GEO Code data to the Spread Sheet
======================================
The four columns you are adding should be the left most columns.  
`rowid` will be the last or left most column.
Adding is just entering the field name in the first row.
* Open the spread sheet
* Add `DisplayOnMap` column, this will be used control what are displayed. If value is "no" it will not be displayed.
* Add `FullAddress` column, this will be used to build the "Location" field in the Fusion Table.
* Add `Location` column
* Add `rowid` column

Clear out the spreadsheet if you do not want this data.

Add script to spread sheet
==========================
* Go back to spread sheet
* Start Goolge Apps Script Project
  *   Tools -> Script Editor -> Create Blank Project
  *   Name it "Sync Script"
* Tell Script where table is, the address column in the spread sheet, and where to put the location in the Fusion table.
  *   File -> Project Properties -> Script properties
  *   Add
    * docid  and the id of the table  "11HmkFMesjwdeY2gLpV-U84GIwqvxjvTGU_Jk8rnslJU"
    * addressColumn  Address column in the spread sheet  "FullAddress"
    * latlngColumn  to put in the Fustion table "Location"
    * streetAddressColumn     12. Street address of the project
    * cityColumn              13. City
    * stateColumn             14. State
    * zipColumn               15. Zip
    * displayOnMap	     DisplayOnMap
  * Save 
  * You should be back at the script screen.
* Replace the script with "script for Google forms.txt" from  https://github.com/lclontz/google_forms_to_fusion_tables/
* Save the script, File -> Save


Publish Spread Sheet to the web
===============================
Goto the spread sheet

* File -> Publish -> Publish
* Make sure "Entire Document" is selected
* Click Publish

Setup Script Authorization
==========================
In script window
*   Run -> checkAuthorization
*   Click Continue on Authorization required
*   Click Allow

Have spread sheet up date the google fusion table whenever it is updated
========================================================================
In script window
* Resources -> Current project's triggers
* Add
* Run: onFormSubmit, Events: From spreadsheet, On form submit
* Add a new trigger
* Run: Sync,  Events: Time-driven, Hour timer, Every hour

Test
====
* Add another entry into the Form and submit it.
* Open the Spread Sheet, there should be a new row.

Problems
========
View logs in the script editor



Google has disabled use of the Maps API for this application. This site is not authorized to use the Google Maps client ID provided. If you are the owner of this application, you can learn more about registering URLs here: https://developers.google.com/maps/documentation/business/clientside/auth#registering_authorized_url

I tried turning on Google Maps JavaScript API v3 in the developers console
Then https://developers.google.com/maps/documentation/javascript/tutorial#api_key 

* Visit the APIs Console at https://code.google.com/apis/console and log in with your Google Account.
*  the Services link from the left-hand menu.
*  the Google Maps JavaScript API v3 service.
*  the API Access link from the left-hand menu. Your API key is available from the API Access page, in the Simple API Access section. Maps API applications use the Key for browser apps

Use the value of API key in main.js's googlemapsapikey: value

Turn on Contacts API and Google+ API"  per http://stackoverflow.com/questions/22870082/getting-error-403-access-not-configured-please-use-google-developers-console-t



