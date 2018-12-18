import * as React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../containers/Home";
import UsersEditor from "../containers/UsersEditor";
import ArticlesEditor from "../containers/ArticlesEditor";



export const Router: React.StatelessComponent<{}> = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/usersEditor" component={UsersEditor}/>
            <Route path="/articlesEditor" component={ArticlesEditor}/>
        </Switch>
    );
};
