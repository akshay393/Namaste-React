import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
    return (
        <>
            <h1>OOPS!!</h1>
            <h2>Something is wrong!</h2>
            {/* <h2>{err.status + " " + err.statusText}</h2> */}
            <h2>{status + " " + statusText}</h2>
        </>
    )
}

export default Error;