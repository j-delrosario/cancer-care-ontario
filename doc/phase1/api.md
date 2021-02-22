## Bezos Dictum
The Bezos Dictum provides insight into “externalizing” the functionality of SDC forms, and exposing backend functionality as web services.

Our API is designed with this in mind by exposing our data through interfaces, and not having interprocess communication such as back-doors. We also include multiple CRUD routes for our basic functionality.

## API Overview

Most of our endpoints are CRUD endpoints, except one to validate input. We believe this endpoint to be useful since majority of our application is manipulating form data, and having a function to ensure user-entered input is clean is highly valuable. 

## Create

`createProcedure`
- This route creates a procedure given a name, and saves it to our database with a unique ID.

`createSDCForm`
- This route creates an empty SDCForm that contains a unique ID, and saves it to our database

`createSDCFormResponse`
- This route creates a new SDCFormResponse given a JSON of the procedure, formfiller, and patient IDs as well as the answers, and saves it to our database with a unique ID.

`createPatient`
- This route creates a new patient given their information, generating a unique ID for them

`createFormFiller`
- This route creates a new form filler(nurse, doctor, technician, etc.) given their information, generating a unique ID for them

## Read

`getProcedures`
- This read-only route will get the list of available procedures, with their IDs

`getSDCForm`
- This read-only route will get an SDC form and its contents, given a procedure ID

`getPatient`
- This route gets all information for a patient, given their OHIP number

`getFilledForm`
- This route gets a filled form, given a PersistentFilledFormLocator (PFFL) ID

## Update

`fillSDCForm`
- This route fills in an existing SDCForm with whatever data it has
- This endpoint returns the JSON of the new, complete form

`updateSDCForm`
- This route creates a new SDCForm given an XML document of the form, and saves it to our database with a unique ID. The form becomes the new form for the given diagnostic procedure. It should only be accesible to a government agency. TODO:Should it just be internal?

`updatePatient`
- This route updates an existing patient's information

`updateFormFiller`
- This route updates an existing form filler's information

## Delete

`deleteSDCForm`
- This route will delete and SDCForm with a given ID

`deletePatient`
- This route deletes a patient given a specific patient ID

`deletePatient`
- This route deletes a form filler given a specific form filler ID

## Other routes

`validateData`
- This route will validate form data, ensuring it is safe to enter our database





## Notes (delete when submit)

Return appropriate SDC document for a given clinical procedure 

when a structured report is submitted, the doctor ordering the test, the local public health office, and the provincial healthcare system should be sent a link corresponding to the structured report.

You must create an endpoint for your structured EMR prototype that retrieves structured clinical notes as jsons and a family doctor UI that renders them.

Should clients even have access to deleting patient and form filler data?

Several of our CRUD endpoints require quite a bit of internal logic, do they still count as CRUD?

Should IDs be returned for the creation methods so that the client knows how to access their creations afterward?