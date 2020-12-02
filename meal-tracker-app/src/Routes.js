import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './home';
import { RecipeSearchPage } from './recipes';
import { AddIngredientPage } from './ingredients';
import { ShoppingListPage } from './shopping-list';

const routes = [{
    path: '/',
    Component: HomePage,
    exact: true,
}, {
    path: '/recipes',
    Component: RecipeSearchPage,
}, {
    path: '/add-ingredient',
    Component: AddIngredientPage,
}, {
    path: '/shopping-list',
    Component: ShoppingListPage,
}];

export const Routes = () => {
    return (
        <Router>
            <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                >
                    <route.Component />
                </Route>
            ))}
            </Switch>
        </Router>
    );
}