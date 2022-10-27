const MenuItems = [
    {
        "UserType": "SL",
        "Menus": {
            "TopbarMenu": [
                {
                    "Label": "Home",
                    "Name": "HomeMenu",
                    "NavigateTo": "/home",
                    "SubMenu": [],
                    "Icon": ""
                },
                {
                    "Label": "Servces",
                    "Name": "ServcesMenu",
                    "NavigateTo": "/services",
                    "SubMenu": [],
                    "Icon": ""
                },
                {
                    "Label": "Pricing",
                    "Name": "PricingMenu",
                    "NavigateTo": "/pricing",
                    "SubMenu": [],
                    "Icon": ""
                },
                {
                    "Label": "Team",
                    "Name": "TeamMenu",
                    "NavigateTo": "/team",
                    "SubMenu": [],
                    "Icon": ""
                },
                {
                    "Label": "Testimonial",
                    "Name": "TestimonialMenu",
                    "NavigateTo": "/testimonial",
                    "SubMenu": [],
                    "Icon": ""
                },
                {
                    "Label": "Contact",
                    "Name": "ContactMenu",
                    "NavigateTo": "/contact",
                    "SubMenu": [],
                    "Icon": ""
                }
            ],
            "SidebarMenu": [
                {
                    "Label": "Dashboard",
                    "Name": "DashboardMenu",
                    "NavigateTo": "/dashboard",
                    "SubMenu": [],
                    "Icon": "mdi mdi-view-module menu-icon"
                },
                {
                    "Label": "Business",
                    "Name": "BusinessMenu",
                    "NavigateTo": "self",
                    "SubMenu": [
                        {
                            "Label": "Add Business",
                            "Name": "",
                            "NavigateTo": "/add-business"
                        },
                        {
                            "Label": "Delete Business",
                            "Name": "",
                            "NavigateTo": "/delete-business"
                        },
                        {
                            "Label": "Update Business",
                            "Name": "",
                            "NavigateTo": "/update-business"
                        }
                    ],
                    "Icon": "mdi mdi-chart-areaspline menu-icon"
                },
                {
                    "Label": "Warehouse",
                    "Name": "WarehouseMenu",
                    "NavigateTo": "self",
                    "SubMenu": [
                        {
                            "Label": "Add Warehouse",
                            "Name": "",
                            "NavigateTo": "/add-warehouse"
                        },
                        {
                            "Label": "Delete Warehouse",
                            "Name": "",
                            "NavigateTo": "/delete-warehouse"
                        },
                        {
                            "Label": "Update Warehouse",
                            "Name": "",
                            "NavigateTo": "/update-warehouse"
                        }
                    ],
                    "Icon": "mdi mdi-church menu-icon"
                },
                {
                    "Label": "User Management",
                    "Name": "UserManagementMenu",
                    "NavigateTo": "self",
                    "SubMenu": [
                        {
                            "Label": "Add User",
                            "Name": "",
                            "NavigateTo": "/add-user"
                        },
                        {
                            "Label": "Delete User",
                            "Name": "",
                            "NavigateTo": "/delete-user"
                        },
                        {
                            "Label": "Update User",
                            "Name": "",
                            "NavigateTo": "/update-user"
                        }
                    ],
                    "Icon": "mdi mdi-account-multiple-outline menu-icon"
                },
                {
                    "Label": "Payment Details",
                    "Name": "PaymentDetailsMenu",
                    "NavigateTo": "self",
                    "SubMenu": [
                        {
                            "Label": "Add Payment",
                            "Name": "",
                            "NavigateTo": "/add-payment"
                        },
                        {
                            "Label": "Delete Payment",
                            "Name": "",
                            "NavigateTo": "/delete-payment"
                        },
                        {
                            "Label": "Update Payment",
                            "Name": "",
                            "NavigateTo": "/update-payment"
                        }
                    ],
                    "Icon": "mdi mdi-cash menu-icon"
                } //mdi-chart-pie
            ]
        } 
    },
    {
        "UserType": "CL",
        "Menus": {
            "TopbarMenu": [
                {
                    "Label": "Home",
                    "NavigateTo": "/home",
                    "SubMenu": []
                },
                {
                    "Label": "Servces",
                    "NavigateTo": "/services",
                    "SubMenu": []
                },
                {
                    "Label": "Pricing",
                    "NavigateTo": "/pricing",
                    "SubMenu": []
                },
                {
                    "Label": "Team",
                    "NavigateTo": "/team",
                    "SubMenu": []
                },
                {
                    "Label": "Testimonial",
                    "NavigateTo": "/testimonial",
                    "SubMenu": []
                },
                {
                    "Label": "Contact",
                    "NavigateTo": "/contact",
                    "SubMenu": []
                }
            ],
            "SidebarMenu": [
                {
                    "Label": "Dashboard",
                    "NavigateTo": "/dashboard",
                    "SubMenu": []
                },
                {
                    "Label": "Business",
                    "NavigateTo": "self",
                    "SubMenu": [
                        {
                            "Label": "Update Business",
                            "NavigateTo": "/update-business"
                        },
                        {
                            "Label": "View Business",
                            "NavigateTo": "/delete-business"
                        }
                    ]
                },
                {
                    "Label": "Warehouse",
                    "NavigateTo": "self",
                    "SubMenu": [
                        {
                            "Label": "Add Warehouse",
                            "NavigateTo": "/add-warehouse"
                        },
                        {
                            "Label": "Delete Warehouse",
                            "NavigateTo": "/delete-warehouse"
                        },
                        {
                            "Label": "Update Warehouse",
                            "NavigateTo": "/update-warehouse"
                        }
                    ]
                },
                {
                    "Label": "User Management",
                    "NavigateTo": "self",
                    "SubMenu": [
                        {
                            "Label": "Add User",
                            "NavigateTo": "/add-user"
                        },
                        {
                            "Label": "Delete User",
                            "NavigateTo": "/delete-user"
                        },
                        {
                            "Label": "Update User",
                            "NavigateTo": "/update-user"
                        }
                    ]
                },
                {
                    "Label": "Payment Details",
                    "NavigateTo": "self",
                    "SubMenu": [
                        {
                            "Label": "Add Payment",
                            "NavigateTo": "/add-payment"
                        },
                        {
                            "Label": "Delete Payment",
                            "NavigateTo": "/delete-payment"
                        },
                        {
                            "Label": "Update Payment",
                            "NavigateTo": "/update-payment"
                        }
                    ]
                }
            ]
        }
    }
]

export default MenuItems;