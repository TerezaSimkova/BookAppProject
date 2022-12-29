import React from 'react';
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

export function Breadcrumbs() {
    const match = useRouteMatch();
    const routes = [
        { path: '/', breadcrumb: 'Home /', id: 1 },
        { path: '/login', breadcrumb: 'Login', id: 2  },
        { path: '/register', breadcrumb: 'Registration', id: 3  },
        { path: '/info', breadcrumb: 'Informations', id: 4  },
        { path: '/contacts', breadcrumb: 'Contacts', id: 5  },
        { path: '/myBookList', breadcrumb: 'Books', id: 6  },
        { path: '/addBook', breadcrumb: 'Add New Book', id: 7 },
    ];

    return (
        <section className="breadcrumbs_list">
            <Switch>
                <Route exact path={match.url}>
                    <ul className="breadcrumbs">
                        <li className="green">
                            <Link to="/"> Home </Link>
                        </li>
                        <p className="break">/</p>
                        {routes?.map((routes) => (
                            <li key={routes.id}>
                                <Link className={(match.url === routes.path) ? "active_link" : "non_active_link"} to={routes.path === match.url ? match.url : "" }> {routes.path === match.url ? routes.breadcrumb : "" } </Link>
                            </li>
                        ))}
                    </ul>
                </Route>
            </Switch>
        </section>
    );
}

