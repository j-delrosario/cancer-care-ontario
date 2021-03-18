import React from 'react'
// import {} from 'material-ui-dropzone'
import { Button, TextField } from '@material-ui/core';

const MutateXML = (props) => {
    const { onSubmit, formId } = props;
    return (
        <form onSubmit={onSubmit}>
            <TextField name={formId} id="standard-basic" label="Standard" />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default MutateXML;