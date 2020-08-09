/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

new Vue({
    el: "#app",
    data: {
        userInfos: {
            email: '',
            password: '',
        },
        subject: '',
        message: ''
    },

    methods: {
        sendMessage() {
            console.log(this.userInfos);
            console.log(this.subject);
            console.log(this.message);
        }
    }
})