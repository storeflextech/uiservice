import Spinner from 'react-bootstrap/Spinner';

export const LoaderFull = () => {

    return (
        <div className='sf-overlay'> 
            <div className='sf-overlay-content'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner>
            </div>
        </div>
      );
}