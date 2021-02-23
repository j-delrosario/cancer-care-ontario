# Vertical Slice

## Create new SDCForm

### Backend

API route: /saveSDCForm
saves a new SDCForm Model to the Mongoose database.
It expects a body requiring an id and a diagnosticProcedure id.
It will send a response with this new SDCFormModel if successful with a status of 200, otherwise send an error message along with status of 500.

### Frontend

sendDummyData() method in App.js makes a POST request to api/saveSDCForm and sends an JSON object containing and id, diagnosticProcedure id and a list of questions that the user has entered:

{
"id":num,
"diagnosticProcedure": 1,
"questions": [`${this.state.value}`]
}

## Get SDC Form

### Backend

API route: /getSDCForm
Expects an id and gets one SDCForm matching that id from the Mongoose database and sends it with a status of 200, otherwise sends an error with 500 status

### Frontend

getDummyData() in App.js makes a GET request to api/getSDCForm?id=${num} where num == id of SDCForm
