import React from 'react';
import { useNavigate } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SuNavbar from '../components/navbar/su-navbar';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const cPanel = () => {
    //   const navigate = useNavigate();
    //   const goToNextPage = (pagePath: string) => {
    //     navigate(pagePath);
    //   }

    return (
        <div className="App">
            {<SuNavbar />}
            <SideNav
                onSelect={(selected: any) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Business
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Add
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Delete
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Update
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Warehouse
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Add Warehouse
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Delete Warehouse
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Update Warehouse
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            User Management
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Payment Details
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Add 
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Delete
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Update
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Search
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                              Warehouse
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Business
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Report
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}>
                <h1>Display Storeflex User Contents Here</h1>
            </div>
            <a href="#" className="scroll-top btn-hover">
                <i className="lni lni-chevron-up"></i>
            </a>
            <section>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="copyright text-center">
                                    <p className="text">Copyright © 2024 Storeflex. All Rights Reserved</p>
                                </div>
                                {/* <!--  copyright --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default cPanel;