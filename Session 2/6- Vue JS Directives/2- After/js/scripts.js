/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

var app = new Vue({
    //#region Configuration
    el: '#app',
    data: {
        title: "Vue Js Directives",
        description: "Description",
        isTitleInclude: false,
        isTitleVisible: false,
        products: [{
                "Id": "6ec1d027-5be0-4657-8643-a843ed3ae7d2",
                "Name": "Product 1",
                "Price": 323,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "99ea6415-8c9b-497b-a348-510d4039499c",
                "Name": "Product 2",
                "Price": 400,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "3b8b7cc2-c961-4938-b1ff-4763d3ef6024",
                "Name": "Product 3",
                "Price": 234,
                "Unit": "euro",
                "itemsCount": 0
            },
            {
                "Id": "2f9a60c5-2a17-4af9-9466-9f96e87eb588",
                "Name": "Product 4",
                "Price": 120,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "461ef325-14c3-4ff6-8bbb-fa2399e07a39",
                "Name": "Product 5",
                "Price": 850,
                "Unit": "euro",
                "itemsCount": 0
            },
            {
                "Id": "2f089a53-dfac-4cd1-8e3d-db0493a7d295",
                "Name": "Product 6",
                "Price": 43,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "60bc915c-b078-4534-8944-93ca3f5e6b31",
                "Name": "Product 7",
                "Price": 165,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "7af8f813-b076-4147-9c14-a2721ee9e523",
                "Name": "Product 8",
                "Price": 549,
                "Unit": "euro",
                "itemsCount": 0
            }
        ]
    },
    //#endregion

    //#region Methods
    methods: {
        updateTitleInclusion: function(event) {
            this.isTitleInclude = !this.isTitleInclude;
        },

        updateTitleVisibility: function(event) {
            this.isTitleVisible = !this.isTitleVisible;
        }
    }
    //#endregion
});