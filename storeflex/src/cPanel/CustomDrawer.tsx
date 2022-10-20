import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
  CDBSidebarCTA,
} from 'cdbreact';
import Accordion from 'react-bootstrap/Accordion';

export const CustomDrawer = (props) => {
  return (
    <div className="App">
      <CDBSidebar style={{ backgroundColor: '#d8753b', height: '100vh' }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>NAVIGATION MENU</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu style={{ backgroundColor: '#d8753b'}}>
          <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><CDBSidebarMenuItem icon="th-large">Business</CDBSidebarMenuItem></Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#d8753b'}}>
                    <CDBSidebarMenu>
                      <CDBSidebarMenuItem icon="plus">Add Business</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="eye">View Business</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="edit">Update Business</CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><CDBSidebarMenuItem icon="home">Warehouse</CDBSidebarMenuItem></Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#d8753b'}}>
                    <CDBSidebarMenu>
                      <CDBSidebarMenuItem icon="plus">Add Warehouse</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="eye">View Warehouse</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="edit">Update Warehouse</CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header><CDBSidebarMenuItem icon="users" iconType="solid">User Management</CDBSidebarMenuItem></Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#d8753b'}}>
                    <CDBSidebarMenu>
                      <CDBSidebarMenuItem icon="plus">Add User</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="eye">View Users</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="edit">Update User</CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header><CDBSidebarMenuItem icon="money-bill" iconType="solid">Payment Details</CDBSidebarMenuItem></Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#d8753b'}}>
                    <CDBSidebarMenu>
                      <CDBSidebarMenuItem icon="plus">Add</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="eye">View</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="edit">Update</CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header><CDBSidebarMenuItem icon="search" iconType="solid">Search</CDBSidebarMenuItem></Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#d8753b'}}>
                    <CDBSidebarMenu>
                    <CDBSidebarMenuItem icon="th-large">Business</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="home">Warehouse</CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header><CDBSidebarMenuItem icon="table" iconType="solid">Report</CDBSidebarMenuItem></Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#d8753b'}}>
                    <CDBSidebarMenu>
                      <CDBSidebarMenuItem icon="th-large">Business</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem icon="home">Warehouse</CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            
            
            {/* <CDBSidebarMenuItem icon="users" iconType="solid">  User Management </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="money-bill" iconType="solid">  Payment Details </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="search" iconType="solid">  Search </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="table" iconType="solid">  Report </CDBSidebarMenuItem> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{ padding: '20px 5px' }}
          >
            C-Panel V1.0
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
