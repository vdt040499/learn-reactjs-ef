import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import productApi from 'api/productApi';

const useStyles = makeStyles(theme => ({
    root: {

    },

    left: {
        width: '250px',
    },

    right: {
        flex: '1 1 auto'
    }
}));

function ListPage(props) {

    const classes = useStyles();

    useEffect(() => {
        (async () => {
            const response = await productApi.getAll({ _page: 1, _limit: 10 });
            console.log({ response });
        })();
    }, []);

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid className={classes.left} item>
                        <Paper elevation={0}>
                            Left Column
                        </Paper>
                    </Grid>
                    <Grid className={classes.right} item>
                        <Paper elevation={0}>
                            Right Column
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;