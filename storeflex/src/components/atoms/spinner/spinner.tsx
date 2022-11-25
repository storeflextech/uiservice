import Spinner from 'react-bootstrap/Spinner';

function LoaderSpinner() {
    return (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
        </div>
    );
}

export default LoaderSpinner;