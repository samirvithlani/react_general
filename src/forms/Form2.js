import { Card, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { inputFormField } from './FormsElements'

export const Form2 = () => {
    return (
        <div>
            <Grid>
                <Card style={{ maxWidth: 450 }}>
                    <Typography>
                        DYNAMIC FORM
                    </Typography>
                    
                    <Grid container spacing={1}>
                        {
                            inputFormField.map(input => <Grid xs={12} sm={6}>
                                    <TextField {...input} />
                                    
                            </Grid>
                            )
                        }
                    </Grid>
                </Card>
            </Grid>
        </div>
    )
}
