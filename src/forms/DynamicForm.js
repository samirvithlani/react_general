import { Box, Button, Container, Grid, IconButton, Paper, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const DynamicForm = () => {
    const userTemplate = { name: "", email: "", phone: "" }
    const [users, setusers] = useState([userTemplate])

    const adduser = () => {
        setusers([...users, userTemplate])
    }
    const removeUser = (index) => {

        const filterUser = [...users]
        //index remove index update
        // 1 2 3 4 5 6
        //3
        //1 2 43 54 65
        filterUser.splice(index, 1)
        setusers(filterUser)
    }
    const onChange = (e, index) => {

        console.log(e.target.value, " ", index)
        const updateUser = users.map((user, i) => index == i ?
            Object.assign(user, { [e.target.name]: e.target.value }) : user)
            
        setusers(updateUser)
    }


    return (

        <Container>
            <Paper component={Box} p={4}>
                {

                    users.map((user, index) => (

                        <Grid container spacing={3}>
                            <Grid item sm md={3}>
                                <TextField
                                    label="Name"
                                    placeholder="Enter your Name"
                                    variant="outlined"
                                    name="name"
                                    onChange={e => onChange(e, index)}
                                    fullWidth
                                />
                                
                            </Grid>
                            
                            <Grid item sm md={3}>
                                <TextField
                                    label="Email"
                                    placeholder="Enter your Email"
                                    variant="outlined"
                                    name="email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item sm md={3}>
                                <TextField
                                    label="Phone"
                                    placeholder="Enter your Phone"
                                    variant="outlined"
                                    name="phone"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item sm md={3}>
                                <IconButton>
                                    <DeleteIcon color="BLUE" onClick={removeUser} />
                                </IconButton>

                            </Grid>

                        </Grid>

                    ))
                }
                <Button variant="outlined" color="primary" onClick={adduser}>
                    add more
                </Button>

            </Paper>
            
        </Container>
    )
}
