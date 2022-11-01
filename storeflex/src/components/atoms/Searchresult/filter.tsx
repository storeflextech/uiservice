import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './searchresult.css';


interface parentProps {
    officeData?: any;
    handleFilte?: any;
}


export default function Filter(props?: parentProps) {

    const [radioValue, setRadioValue] = React.useState('');




    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    const handleRadioFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        var filterValue = (event.target as HTMLInputElement).value;
        setRadioValue(filterValue);

        if (filterValue === 'ascending') {
            var office = props?.officeData;
            var sortedData = office.sort((a: any, b: any) => {
                return a.rate - b.rate
            });
            props?.handleFilte(sortedData, filterValue);
        }

        if (filterValue === 'descending') {
            var office = props?.officeData;
            var sortedData = office.sort((a: any, b: any) => {
                return b.rate - a.rate
            });
            props?.handleFilte(sortedData, filterValue);
        }

    }


    const filter = () => {
        return (

            <div className="card m-0">
                <div className="col-md-12 p-1">
                    <span>
                        Filter And Sort Locations
                    </span>
                    <hr />

                    <div className="card-group-item">

                        <header className="card-header p-0">
                            <h6 className="title">Sorts By Price:</h6>
                        </header>


                        <div className="filter-content ml-2">
                            <div className="card-body">
                                <label className="form-check">
                                    <input className="form-check-input" onChange={handleRadioFilter} type="radio" name="price" value="ascending" />
                                    <span className="form-check-label m-0">
                                        Lowest to Highest
                                    </span>
                                </label>

                                <label className="form-check">
                                    <input className="form-check-input" onChange={handleRadioFilter} type="radio" name="price" value="descending" />
                                    <span className="form-check-label m-0">
                                        Highest to Lowest
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <article className="card-group-item">
                        <header className="card-header p-0">
                            <h6 className="title">Choose by Storage Layout: </h6>
                        </header>
                        <div className="filter-content  ml-2">
                            <div className="card-body">
                                <form>
                                    <label className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Floor Space" />
                                        <span className="form-check-label m-0">
                                            Floor Space
                                        </span>
                                    </label>
                                    <label className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Racking" />
                                        <span className="form-check-label m-0">
                                            Racking
                                        </span>
                                    </label>
                                    <label className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Secured Room" />
                                        <span className="form-check-label m-0">
                                            Secured Room
                                        </span>
                                    </label>
                                    <label className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Pick Module" />
                                        <span className="form-check-label m-0">
                                            Pick Module
                                        </span>
                                    </label>
                                    <label className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Pick Dedicated Room" />
                                        <span className="form-check-label m-0">
                                            Pick Dedicated Room
                                        </span>
                                    </label>
                                </form>

                            </div>
                        </div>
                    </article>


                </div>
            </div>
        )
    }

    return (
        <>

            {/* for large screen  */}
            <div className="col-md-2 pr-1 d-none d-sm-block" style={{ backgroundColor: '#eee' }}>


                {filter()}

            </div>




            {/* for small screen  */}
            <div className="col-md-2 pr-1 d-block d-sm-none" style={{ backgroundColor: '#eee' }}>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Filter
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            {/* <div className="accordion-body"> */}
                                {filter()}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}











