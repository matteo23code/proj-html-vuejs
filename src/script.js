new Vue({
    el: '#app-restaurant',
     data: {
         logo: '../img/logo-restaurant.png',
         index: 0,
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
        socialList: [
            
            { social:'<i class="fab fa-facebook-f"></i>'},
            
            { social:'<i class="fab fa-twitter"></i>'},
            
            { social:'<i class="fab fa-youtube"></i>'},
            
            { social:'<i class="fab fa-instagram"></i>' },

            { social:'<i class="fab fa-linkedin-in"></i>'},
        ],
       
     },
});
Vue.config.devtools = true