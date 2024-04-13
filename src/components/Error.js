import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>Something Went Wrong</h2>
            <h3>{error.status}</h3>
        </div>
    )
}

export default Error;