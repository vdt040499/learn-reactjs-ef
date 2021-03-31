import React from 'react';
import Box from '@material-ui/core/Box';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
    const match = useRouteMatch();

    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} exact component={ListPage}/>
            </Switch>
        </Box>
    );
}

export default ProductFeature;