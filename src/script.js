new Vue({
    el: '#app-restaurant',
     data: {
         logo: '../img/logo-restaurant.png',
         navList:[
             {
                 name: 'Home',
                 hover1: 'Alternate Homepage 1',
                 hover2: 'Alternate Homepage 2',
             },
             {name: 'Culinary history'},
             {name: 'Our Team'},
             {name: 'Takeout'},
             {name: 'Bulletin'},
             {name: 'Reservation'},
        ],
     }
});
Vue.config.devtools = true