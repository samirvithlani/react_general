import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export const Forms = () => {
    return (
        <div>
            <Typography>
                STATIC FORM
            </Typography>
            <Card style={{ maxWidth: 450 }}>
                <CardContent>
                    <Grid xs={12} sm={6} item>
                        <TextField label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Email" placeholder="Enter EMail" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid xs={12} item>

                        <Button variant="contained" color="primary">SUBMIT</Button>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )
}
