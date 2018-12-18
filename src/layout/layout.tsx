import * as React from 'react';

import { Router } from "./router";

interface LayoutState {

};

interface LayoutProps {
};

class Layout extends React.Component<LayoutProps, LayoutState> {
    mounted = false;
    unmounted = false;

    state = {
        loading: true,
    };

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.unmounted = true;
    }

    setStateSafe = (newState) => {
        if (this.unmounted) {
            return;
        }
        if (this.mounted) {
            this.setState(newState);
        } else {
            this.state = {...this.state, ...newState};
        }
    };

    render() {
        return (
            <Router />
        )
    }
}

export default Layout;
