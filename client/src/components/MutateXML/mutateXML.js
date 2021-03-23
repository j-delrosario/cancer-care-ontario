import React from 'react'
// import {} from 'material-ui-dropzone'
import { Button, TextField, Grid } from '@material-ui/core';

const MutateXML = (props) => {
    const { onSubmit, setFormId } = props;
    return (
        <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
                <Grid item >
                    <TextField variant="outlined" onChange={setFormId} id="standard-basic" label="ID" />
                </Grid>
                <br />
                <Grid item>
                    <Button variant="contained" type="submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default MutateXML;