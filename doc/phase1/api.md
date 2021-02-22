## Bezos Dictum
The Bezos Dictum provides insight into “externalizing” the functionality of SDC forms, and exposing backend functionality as web services.

Our API is designed with this in mind by exposing our data through interfaces, and not having interprocess communication such as back-doors. We also include multiple CRUD routes for our basic functionality.

## API Overview

Most of our endpoints are CRUD endpoints, except one to validate input. We believe this endpoint to be useful since majority of our application is manipulating form data, and having a function to ensure user-entered input is clean is highly valuable. 

## Create

`createSDCForm`
- This route creates an empty SDCForm that contains a unique ID, and saves it to our database

`createPatient`
- This route creates a new patient, generating a unique ID for them

## Read

`getSDCForm`
- This read-only route will get an SDC form and all its contents

`getPatient`
- This route gets all information for a patient, given their ID

## Update

`fillSDCForm`
- This route fills in an existing SDCForm with whatever data it has
- This endpoint returns the JSON of the new, complete form

`updatePatient`
- This route updates an existing patients information

## Delete

`deleteSDCForm`
- This route will delete and SDCForm with a given ID

`deletePatient`
- This route deletes a patient given a specific patient ID

## Other routes

`validateData`
- This route will validate form data, ensuring it is safe to enter our database




## Notes (delete when submit)

Return appropriate SDC document for a given clinical procedure 

when a structured report is submitted, the doctor ordering the test, the local public health office, and the provincial healthcare system should be sent a link corresponding to the structured report.

You must create an endpoint for your structured EMR prototype that retrieves structured clinical notes as jsons and a family doctor UI that renders them.