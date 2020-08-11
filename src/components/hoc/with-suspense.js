import React from "react";
import Spinner from "../spinner/spinner";

const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<Spinner/>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
}

export default withSuspense;