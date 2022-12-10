
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

export function Breadcrumbs() {
    const match = useRouteMatch();
    const routes = [
        { path: '/', breadcrumb: 'Home /' },
        { path: '/login', breadcrumb: 'Login' },
        { path: '/register', breadcrumb: 'Registration' },
        { path: '/info', breadcrumb: 'Informations' },
        { path: '/contacts', breadcrumb: 'Contacts' },
        { path: '/myBookList', breadcrumb: 'Books' },
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
                            <li>
                                <Link className={(match.url === routes.path) ? "active_link" : "non_active_link"} to={routes.path === match.url ? match.url : "" }> {routes.path === match.url ? routes.breadcrumb : "" } </Link>
                            </li>
                        ))}
                    </ul>
                </Route>
            </Switch>
        </section>
    );
}

