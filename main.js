 var mainApp = angular.module("mainApp", ['ngRoute']);
         mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/viewhome', {
               templateUrl: 'viewhome.htm',
               controller: 'viewhomeController'
            }).
            
            when('/viewsports', {
               templateUrl: 'viewsports.htm',
               controller: 'viewsportsController'
            }).
            
            when('/viewevents', {
               templateUrl: 'viewevents.htm',
               controller: 'vieweventsController'
            }).
            when('/viewadventureclub', {
               templateUrl: 'viewadventureclub.htm',
               controller: 'viewclubsController'
            }).
            when('/viewchessclub', {
               templateUrl: 'viewchessclub.htm',
               controller: 'viewclubsController'
            }).
            when('/viewskatingclub', {
               templateUrl: 'viewskatingclub.htm',
               controller: 'viewclubsController'
            }).
            when('/viewtaekwondoclub', {
               templateUrl: 'viewtaekwondoclub.htm',
               controller: 'viewclubsController'
            }).
            when('/viewcardclub', {
               templateUrl: 'viewcardclub.htm',
               controller: 'viewclubsController'
            }).
            when('/viewshootingclub', {
               templateUrl: 'viewshootingclub.htm',
               controller: 'viewclubsController'
            }).
            when('/viewboxingclub', {
               templateUrl: 'viewboxingclub.htm',
               controller: 'viewclubsController'
            }).


            when('/viewgallery', {
               templateUrl: 'viewgallery.htm',
               controller: 'viewgalleryController'
            }).
            when('/viewawards', {
               templateUrl: 'viewawards.htm',
               controller: 'viewawardsController'
            }).
            when('/viewcontactus', {
               templateUrl: 'viewcontactus.htm',
               controller: 'viewcontactusController'
            }).
            when('/viewgalleryaquatics', {
               templateUrl: 'viewgalleryaquatics.htm',
               controller: 'viewgalleryaquaticsController'
            }).
            when('/viewgalleryathletics', {
               templateUrl: 'viewgalleryathletics.htm',
               controller: 'viewgalleryathleticsController'
            }).
            when('/viewgallerybadminton', {
               templateUrl: 'viewgallerybadminton.htm',
               controller: 'viewgallerybadmintonController'
            }).
            when('/viewgallerybasketball', {
               templateUrl: 'viewgallerybasketball.htm',
               controller: 'viewgallerybasketballController'
            }).
            when('/viewgallerycricket', {
               templateUrl: 'viewgallerycricket.htm',
               controller: 'viewgallerycricketController'
            }).
            when('/viewgalleryfootball', {
               templateUrl: 'viewgalleryfootball.htm',
               controller: 'viewgalleryfootballController'
            }).
            when('/viewgalleryhockey', {
               templateUrl: 'viewgalleryhockey.htm',
               controller: 'viewgalleryhockeyController'
            }).
            when('/viewgallerylawntennis', {
               templateUrl: 'viewgallerylawntennis.htm',
               controller: 'viewgallerylawntennisController'
            }).
            when('/viewgallerysquash', {
               templateUrl: 'viewgallerysquash.htm',
               controller: 'viewgalleryController'
            }).
            when('/viewgallerytabletennis', {
               templateUrl: 'viewgallerytabletennis.htm',
               controller: 'viewgallerysquashController'
            }).
            when('/viewgalleryvolleyball', {
               templateUrl: 'viewgalleryvolleyball.htm',
               controller: 'viewgalleryvolleyballController'
            }).
            when('/viewgalleryweightlifting', {
               templateUrl: 'viewgallery.htm',
               controller: 'viewgalleryweightliftingController'
            }).
            when('/viewgalleryadventure', {
               templateUrl: 'viewgalleryweightlifting.htm',
               controller: 'viewgalleryadventureController'
            }).
            when('/viewgallerychess', {
               templateUrl: 'viewgallerychess.htm',
               controller: 'viewgallerychessController'
            }).
            when('/viewgalleryskating', {
               templateUrl: 'viewgalleryskating.htm',
               controller: 'viewgalleryskatingController'
            }).
            when('/viewgalleryteakwondo', {
               templateUrl: 'viewgalleryteakwondo.htm',
               controller: 'viewgalleryteakwondoController'
            }).
            when('/viewgallerycard', {
               templateUrl: 'viewgallerycard.htm',
               controller: 'viewgallerycardController'
            }).
            when('/viewgalleryshooting', {
               templateUrl: 'viewgalleryshooting.htm',
               controller: 'viewgalleryshootingController'
            }).
            when('/viewgalleryboxing', {
               templateUrl: 'viewgalleryboxing.htm',
               controller: 'viewgalleryboxingController'
            }).
            when('/viewgalleryinteriit', {
               templateUrl: 'viewgalleryinteriit.htm',
               controller: 'viewgalleryinteriitController'
            }).
            when('/viewgallerygirlsaqua', {
               templateUrl: 'viewgallerygirlsaqua.htm',
               controller: 'viewgallerygirlsaquaController'
            }).
            when('/viewgalleryinferno', {
               templateUrl: 'viewgalleryinferno.htm',
               controller: 'viewgalleryinfernoController'
            }).
            when('/viewgalleryjosh', {
               templateUrl: 'viewgalleryjosh.htm',
               controller: 'viewgalleryjoshController'
            }).
            when('/viewgalleryoneweak', {
               templateUrl: 'viewgalleryoneweak.htm',
               controller: 'viewgalleryoneweakController'
            }).
            when('/viewgallerytourde', {
               templateUrl: 'viewgallerytourde.htm',
               controller: 'viewgallerytourdeController'
            }).
            when('/viewgalleryudghosh', {
               templateUrl: 'viewgalleryudghosh.htm',
               controller: 'viewgalleryudghoshController'
            }).

            otherwise({
               redirectTo: '/viewhome'
            });
         }]);
         
         mainApp.controller('viewsportsController', function($scope) {
          $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
            var sports=[
              {
                  mynumber:'1',
                  name:'Aquatics',
                  image: 'images/aquatics.jpg',
                  url:'#viewgalleryaquatics',
                  about1:'With an objective to give you an opportunity to experience the sport of swimming and water polo, the swim centre offers excellent pool facilities , trained coaches and lifeguards to put you through the swimming program. The Pool provides you an ideal environment to cool off after a hectic day of classes and labs. Coach,V.R.Vadi, guides you through the learning process. He knows how to teach you swimming and the enthusiasm of the institute team inspires you to learn. Moreover, the fun part of it is that you have the support of enthusiastic, lively and knewl institute swimmers and water polo players.',
                  about2:'Hitting the swimming pool is a good repite to beat the heat. It is also one of the best forms of exercise.IIT kanpur has an olympic size pool for the students and also the campus residents',
                  facilities1:'IIT Kanpur boasts of an Olympic-size 8-lane Swimming pool. The pool is located in the southern part of the campus. Swimming Pool is an Institute Community Facility.',
                  facilities2:'',
                  nameb:'Anil Rulania',
                  mobilenob:'8960009490',
                  emailb:'',
                  imageb:'images/captain/Anil.jpg',
                  nameg:'Arushi Agrawal',
                  mobilenog:'7753058577',
                  emailg:'1',
                  imageg:'images/captain/Arushi.jpg',
              },
              {
                  mynumber:'2',
                  name:'Athletics',
                  image: 'images/athletics.jpg',
                  url: '#viewgalleryathletics',
                  about1:'Athletics is considered to be the Father of all Games and is infact The Way of Living and not just a sport. An Athlete is an all-round sportsperson with skills for cricket, football, tennis,.....and has immense control of his body and senses. Athletics not only builds you physically but it helps in body coordination and gives you mental stiffness. So be a part of it to know yourself and the way of your life.',
                  about2:'Athletics is an exclusive collection of sporting events that involve competitive running, jumping, throwing, and walking. The most common types of athletics competitions are track and field, road running, cross country running, and race walking.IIT kanpur has a very efficient team of atheletes. Team not only takes part in the sporting events held at IITKanpur,but also participates in the competitions held in other Institutes across the country.',
                  facilities1:'To be updated SOON',
                  facilities2:'',
                  nameb:'Akash Waghela',
                  mobilenob:'8090686657',
                  emailb:'',
                  imageb:'images/captain/akash.jpg',
                  nameg:'Priya Yadav',
                  mobilenog:'8090623179',
                  emailg:'1',
                  imageg:'images/captain/Priya.jpg',
              },
              {
                  mynumber:'3',
                  name:'Badminton',
                  image: 'images/badminton.jpg',
                  url: 'viewgallerybadminton',
                  about1:'Badminton is the worlds fastest racquet sport: a shuttle can leave the racket at a speed of almost 200 mph. Todays players compete in a lightning-fast sport which demands constant, highly concentrated actions: running, jumping, twisting, stretching, running backwards and striking. In a typical two-game singles match, top players will cover nearly every inch of the court and travel more than a mile.Great techniques and physical fitness alone is not enough to win a badminton game, a successful player must play smart. Using quick thinking to adapt his/her play to the opponent’s tactics and weaknesses. Using varying speed and position and deceptive plays to earn an edge over the opponent.',
                  about2:'This racquet sport is one of the major game which is played by almost the whole community,both the students and the residents.This game is so popular that IIT Kanpur has 5 courts (3 in new student activity centre and 2 in old student activity centre). Besides these indoor courts almost all the halls of residences have a court in their premises.',
                  facilities1:'IIT Kanpur provides excellent facilities for badminton enthusiasts with 5 indoor wooden courts. 3 of them are housed in the New SAC. The other 2 are at the Old Sports Complex. The courts are open from 6am to 11am and 4pm to 9pm on all days except Sunday when they open from 6am to 9am and 5pm to 9pm. Badminton rackets, shuttles and non marking shoes are the main equipments required for one to play badminton and all of them can be issued to a student for his/her ID card at the New SAC and Old Sports Complex reception. Apart from this, every hall of residence also has outdoor badminton courts and students can issue required equipments from the Sports secretaries of the HEC of the hall.',
                  facilities2:'',
                  nameb:'Gopichand Kotana',
                  mobilenob:'9294009939',
                  emailb:'',
                  imageb:'images/captain/Gopi.jpg',
                  nameg:'Priya Kushram',
                  mobilenog:'9794622554',
                  emailg:'1',
                  imageg:'images/captain/PriyaKushram.jpg',
              },
              {
                  mynumber:'4',
                  name:'Basketball',
                  image: 'images/basketball.jpg',
                  url: 'viewgallerybasketball',
                  about1:'Basketball is one of the worlds most popular and widely viewed sports.This game is very good to increase the stamina of the player and also the height if the player is a kid. IIT has a very efficient basketball team who participate in different matches in and outside the campus.',
                  about2:'Besides a court each in all the hostels the institute proudly houses 3 concrete and a wooden basketball court which regularly hosts several teams from nearby colleges is the pride of the campus and pleases everyone who gets a chance to glance across these beautiful courts. The concrete courts are also equipped with fantastic drainage facilities ensuring that play is not disrupted for long even if the sky chooses to open up.',
                  facilities1:'',
                  facilities2:'',
                  nameb:'Varun Jorapur',
                  mobilenob:'9005272619',
                  emailb:'',
                  imageb:'images/captain/VArun.jpg',
                  nameg:'Avani Rathore',
                  mobilenog:'7755047979',
                  emailg:'1',
                  imageg:'images/captain/Avani.jpg',
              },
              {
                  mynumber:'5',
                  name:'cricket',
                  image: 'images/cricket.jpg',
                  url: 'viewgallerycricket',
                  about1:'Cricket is passion in India and we , as a team represent the passion of IITK towards this great game . Cricket is in our hearts and our souls . The IITK cricket team sincerely believes in qualities such as true sporting spirit and team effort and each and every member of the team is a reflection of these values . The team comprises of a blend of cricket enthusiasts instilled with inborn talents and all these players gel together to form this fantastic unit.',
                  about2:'Even after losing brilliant players from the final years , the team has always shown resurgence with the inclusion of talented fresher who have been given an equal opportunity . We all know that experience added with talent is always a deadly combination . The addition of a new full time coach has greatly aided the team in improving upon the grey areas of our game.',
                  facilities1:'Institute has a well-devoted ground specially for cricket with the facilities of flood lights, nets also.There are two cricket grounds, one is the Main Ground near the Academic Area and the other one is the ACES ground near the main IIT Gate. The pitch is regularly maintained by the experienced people. These facilities are mostly for institute team players.',
                  facilities2:'',
                  nameb:'Vaibhav Pandey',
                  mobilenob:'',
                  emailb:'1',
                  imageb:'images/captain/Vaibhav.jpg',
              },
              {
                  mynumber:'6',
                  name:'football',
                  image: 'images/football.jpg',
                  url: 'viewgalleryfootball',
                  about1:'The Football team of IITK is the most sane entity in the wildlife sanctuary that is IITK. The football field, a place in the outskirts of this campus, is the mecca for the members of the football team. It is a place visited by choice. It is a place where there is no distinction between senior and junior until it comes to collecting balls at the end of our practice sessions. One enjoys every moment while there, even when our beloved (soon to be married) coach is administering the last push up during cool down. Our team can be summarized in two phrases: "Vaaryapayam" and "Bharat Mata ki Jai".',
                  about2:'A key part of our team are the die hard football loving staff members. They are the primary reason for us getting practice for all these years. And ofcourse the grounds men, who toil under the sweltering Kanpur sun in order to facilitate our playing in the evening. And ofcourse our coach, lovingly called by one of the ex-players of our team, as chotu.The football team prides itself in having atleast one, one sided love affair every Inter IIT. That we believe, is the secret of our success at Inter IIT tournaments. That and a bit of hard work.',
                  facilities1:'To be Updated soon',
                  facilities2:'',
                  nameb:'Mainak Majumdar',
                  mobilenob:'7275979267',
                  emailb:'',
                  imageb:'images/captain/mainak.jpg',
              },
              {
                  mynumber:'7',
                  name:'hockey',
                  image: 'images/hockey.jpg',
                  url: 'viewgalleryhockey',
                  about1:'Hockey is the national sport of India, and needs to introduction. Although Indias towering reputation in world hockey has gone down a little in the last few decades, we are still among the best out there. Adroit stick-handling and teamwork combine to make a good hockey player.',
                  about2:'One of the oldest of competitive pastimes, the sport of field hockey dates back well before the Ancient Olympic Games. Today, field hockey is played all over the world by a variety of countries and field hockey is currently recognized as the second largest team sport in the world, just behind soccer..',
                  facilities1:'To be Updated soon',
                  facilities2:'',
                  nameb:'Prabu C',
                  mobilenob:'9455695065',
                  emailb:'',
                  imageb:'images/captain/Prabu.jpg',
              },
              {
                  mynumber:'8',
                  name:'lawn-tennis',
                  image: 'images/lawn-tennis.jpg',
                  url: '#viewgallerylawntennis',
                  about1:'Lawn Tennis is a modern game which originated in Birmingham,England in the 19th century.Students at IIT Kanpur also play this sport.Besides being refreshing,a game of Lawn tennis is a very good form of exercise.',
                  about2:'',
                  facilities1:'To be Updated SOON',
                  facilities2:'',
                  nameb:'Sagar Batra',
                  mobilenob:'9999509509',
                  emailb:'',
                  imageb:'images/captain/SAGAR.jpg',
                  nameg:'Prachi Singh Azad',
                  mobilenog:'8604926379',
                  emailg:'1',
                  imageg:'images/captain/Prachi.jpg',
              },
              {
                  mynumber:'9',
                  name:'squash',
                  image: 'images/squash.jpg',
                  url: '#viewgallerysquash',
                  about1:'A game still catching on among the campus community , squash boasts of world class infrastructural facilities and is fast becoming fairly popular on campus.',
                  about2:'',
                  facilities1:'To be Updated SOON',
                  facilities2:'',
                  nameb:'Tizil Saini',
                  mobilenob:'7755047919',
                  emailb:'',
                  imageb:'images/captain/Tizil.jpg',
              },
              {
                  mynumber:'10',
                  name:'table-tennis',
                  image: 'images/table-tennis.jpg',
                  url: '#viewgallerytabletennis',
                  about1:'TT also known as table tennis is the fastest ball game and a sport which is played extensively in the IIT-K campus with players ranging from campus kids, IIT Kanpur students to professors. It is a sport of tremendous reflexes and is the fascination of almost everyone here. IIT Kanpur provides outstanding facilities as well as opportunities to learn and relish the sport. Following the inclusion of the sport in Olympics in 1988, it was soon made part of the Inter-IIT Sports Meets. Since then, with the increase in availability of the sports equipments the sport is played with great enthusiasm across all IITs.',
                  about2:'',
                  facilities1:'The New SAC has a big wooden floored TT room with 7 tables. Additionally, there is an automatic ball releasing robot for perfecting your techniques and skills. The robot releases the balls with varying speeds, provides different directions of spin to the balls to help you master the game. IIT Kanpur boasts of being the only IIT with such facilities. In addition to providing excellent facilities to the Institute Table-Tennis Team, the court remains open for all who wish enjoy the sport from morning 6:00 A.M. to 9 P.M. in the night. Everything, from non-marking shoes, rackets to Table Tennis balls are available for issue against the Institute ID card. All the table tennis competitions or tournaments held during inter-college or intra-college sports events are organised in this court. In addition to the main TT room in the New SAC, each Hall of Residence at IITK has a separate room for Table Tennis with one or more good quality tables installed for easy access and availability of the game at the very doorstep.',
                  facilities2:'',
                  nameb:'Abhimanyu Yadav',
                  mobilenob:'8960015436',
                  emailb:'',
                  imageb:'images/captain/aman.jpg',
                  nameg:'Mugdha Arora',
                  mobilenog:'9625409040',
                  emailg:'1',
                  imageg:'images/captain/Mugdha.jpg',
              },
              {
                  mynumber:'11',
                  name:'volleyball',
                  image: 'images/volleyball.jpg',
                  url: '#viewgalleryvolleyball',
                  about1:'Volley is one of the most popular sport among the campus population.Almost everyone- students, faculty, staff and event institute teams of other sports play volleyball for recreation.',
                  about2:'',
                  facilities1:'To be Updated soon',
                  facilities2:'',
                  nameb:'Pawan kumar meena',
                  mobilenob:'8953356634',
                  emailb:'',
                  imageb:'images/captain/Pawan.jpg',
                  nameg:'Tanvi Patil',
                  mobilenog:'8960801871',
                  emailg:'1',
                  imageg:'images/captain/Tanvi.jpg',
              },
              {
                  mynumber:'12',
                  name:'weightlifting',
                  image: 'images/weightlifting.jpg',
                  url: '#viewgalleryweightlifting',
                  about1:'The sport of weightlifting is a muscle-building activity involving heavy weights. Besides being good students,the boys at IIT kanpur are extremely concerned about their physique.As a result of this consciousness weightlifting is a very popular activity at IIT Kanpur.',
                  about2:'',
                  facilities1:'To be Updated soon',
                  facilities2:'',
                  nameb:'Prakash Tiwari',
                  mobilenob:'8923537081',
                  emailb:'',
                  imageb:'images/captain/Prakash.jpg',
              }
        ];
            this.sports = sports;
         });


                  mainApp.controller('vieweventsController', function($scope) {
                    $scope.showPopover = function(event) {
                      for (var i = 1; i<=7; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                    };
            var events=[
              {
                  name:'Inter-IIT',
                  mynumber:'1',
                  image: 'images/galleryimages/interiit2.jpg',
                  url: '#',
                  galleryurl:'#viewgalleryinteriit',
                  description1:'The Inter-IIT Sports Meet is held annually in the winters wherein all the IITs compete for ultimate glory. The Sports Meet is hosted by the IITs turn by turn. Inter-IIT Aquatics Meet is held separately (generally in the first week of October) as part of the main meet each year preceding the main Inter-IIT Sports Meet. General Championship is awarded to the team based upon their combined performance in the Inter-IIT Sports meet and the Inter-IIT Aquatics meet. INTER-IIT is held every year in the month of December.',
                  description2:'IIT Kanpur hosted this years (2016) edition. The grandness of the event can be judged by the fact that the team members practice throughout the year and give it their best shot Coming to the format of the event, each sport carries 10 points for the winners, 6 for the runners up, 4 for the 3rd place and 2 for the 4th place. In this way, the total points for a particular IIT are summed up and the total is known as their GC tally. The IIT with maximum GC tally wins the Inter-IIT Sports meet, and gets to lift the prestigious GC trophy. The dream of every member of the sporting contingent is to perform to their best of abilities at the prestigious INTER-IIT tournament and win the GC.',
              },
              {
                  name:'Girls Aquatic Day',
                  mynumber:'2',
                  image: 'images/galleryimages/girlaqua2.jpg',
                  url: '#viewgallerygirlsaqua',
                  galleryurl:'#',
                  description1:'50m races, shallow water polo, underwater swimming and informal events; packed with music, refreshments, free swimming pool slots and other exciting prizes !! Come and enjoy your time at the Olympic size insti swimming pool !',
                  description2:'',
              },
              {
                  name:'Inferno',
                  mynumber:'3',
                  image: 'images/galleryimages/inferno2.jpg',
                  url: '#',
                  galleryurl:'#viewgalleryinferno',
                  description1:'The Inter Hostel Sports Festival which provides a platform for bringing forward the sporting talent around the campus where students play hard to fight for the glory of their respective halls. ‘Inferno’ comes as a confluence of spectacular performances put up by the participating pools. Hostels leave no stone un-turned to fight it out till the very end, and gain the vital ‘General Championship’ points at stake.',
                  description2:'Freshers Inferno, the Inter Hall Sports Competition exclusively for freshers is also conducted to scout new talent and bring out the enthusiasm in freshmen. This is the first competition of the GC, so here is a chance to give your Pool a Head-start or maybe even get scouted for a place in the Institute Team as well !',
              },
              {
                  name:'Josh',
                  mynumber:'4',
                  image: 'images/galleryimages/josh2.jpg',
                  url: '#',
                  galleryurl:'#viewgalleryjosh',
                  description1:'JOSH is IIT Kanpur’s all night sports competition, and has become one of the most awaited events taking place at the start of the new year.',
                  description2:'The essence of JOSH lies in enticing campus resident to step outside and revel in the joy of playing competitive sport. Last edition of Josh had more than 25 different games, ranging from informal events such as Kite Flying to highly competitive team sports such as Badminton and Football.',
              },
              {
                  name:'One Week One Sport',
                  mynumber:'5',
                  image: 'images/galleryimages/oneweak2.jpg',
                  url: '#',
                  galleryurl:'#viewgalleryoneweak',
                  description1:'This is the event when the campus junta gets to learn the basics of the sport by the respective Institute teams !!! There is a whole week to learn the sport right from the scratch. Training is given in three to four sports for a week from which a person is free to learn one or more sports. The only pre-requisite needed is ENTHUSIASM!!!!',
                  description2:'',
              },
              {
                  name:'Tour De Force',
                  mynumber:'6',
                  image: 'images/galleryimages/tourde2.jpg',
                  url: '#viewgallerytourde',
                  galleryurl:'#',
                  description1:'“A Marathon isn’t just an athletic achievement. It’s a state of mind; a state of mind that says anything is possible”',
                  description2:'A 5 km action packed institute Marathon, witnessing our very own Director Sir flagging off the event with 400 odd campus junta ready to race till the end !!',
              },
              {
                  name:'Udghosh',
                  mynumber:'7',
                  image: 'images/galleryimages/udghosh2.jpg',
                  url: '#',
                  galleryurl:'#viewgalleryudghosh',
                  description1:'Each year, in the month of October, the students of the institute organize a sports festival, called Udghosh. Over the years Udghosh has evolved and expanded to become the biggest intercollegiate sports extravaganza in India. Being the most eagerly awaited event of the year, it has become a national platform where the youth of the nation get together, interact and indulge in a fair game. Udghosh witnesses participation from students from over 200 top colleges from all over India. Students from all fields – humanities, engineering, science, commerce, law and medicine participate in the event with great gusto. Over 30,000 footfalls are witnessed during the festival.',
                  description2:'Udghosh has always been a classic example of the fact that its the endeavour that counts. Our efforts have always aimed to bring about rise in competition level among the youth, empowering the masses with the torch of social awareness, keeping the grandeur of entertainment and professional shows alive. Udghosh brings to the masses a plethora of events, comprising of all major sports, workshops and informal events.',
              }
        ];
            this.events = events;
         });
         
         mainApp.controller('viewawardsController', function() {
            var awards=[
            {
               heading:'INSTITUTE BLUES',
               description:'Institute blues will be awarded to outstanding sportsmen in various games at the time of their leaving the Institute after completing their programmes of study. Merely being the best player in IIT Kanpur is not adequate qualification for awarding the Blues. The candidate should have made his mark outside IIT Kanpur, e.g., District, State or Inter IIT Meets. Person having any Institute athletics record in his name will deserve special consideration. Role played in development of games and sports at IIT Kanpur will be given special consideration. Discipline, regularity on the grounds, leadership and organizing capacity will be considered an additional qualification.',
            },
            {
               heading:'Best Outgoing Sportsperson',
               description:'This is to honour those few special players who have not left any stone unturned with their consistent performance and have uplifted the moral of their respective teams as well as the entire contingent by setting new records and earning laureals to our institute',
            },
            {
               heading:'Special Appreciation',
               description:'This is awarded to those players who have not only given instrumental performances, but also helped in creating an enthusiastic environment with their presence in the team.',
            },
            {
               heading:'Institute Silver Medal',
               description:'This is acknowledge those who not only win but win it in style. This is for those extraordinary performances which set up new Inter IIT records.',
            },
            {
               heading:'ementoes',
               description:'This is awarded to those sportsperson who have been actively involved in sports and have played an important role in nurturing the fraternity amongst the contingent.',
            },
            {
               heading:'Best Incoming Sportsperson',
               description:'Outstanding sportsmen from amongst the students in the first year of their programme of study will be given this award on the recommendation of Games Council and approval of the Games & Sports Committee.',
            }
            ];
            this.awards=awards;
         });


         mainApp.controller('viewgalleryController', function() {
            var gallerys=[
            {
              name:'Aquatics',
              url:'#viewgalleryaquatics',
              image:'images/galleryimages/aquatics2.jpg',
            },
            {
              name:'Athletics',
              url:'#viewgalleryathletics',
              image:'images/galleryimages/athletics2.jpg',
            },
            {
              name:'Badminton',
              url:'#viewgallerybadminton',
              image:'images/galleryimages/badminton2.jpg',
            },
            {
              name:'Basketball',
              url:'#viewgallerybasketball',
              image:'images/galleryimages/basketball2.jpg',
            },
            {
              name:'cricket',
              url:'#viewgallerycricket',
              image:'images/galleryimages/cricket2.jpg',
            },
            {
              name:'Football',
              url:'#viewgalleryfootball',
              image:'images/galleryimages/football2.jpg',
            },
            {
              name:'hockey',
              url:'#viewgalleryhockey',
              image:'images/galleryimages/hockey2.jpg',
            },
            {
              name:'lawn-tennis',
              url:'#viewgallerylawntennis',
              image:'images/galleryimages/lawn-tennis2.jpg',
            },
            {
              name:'squash',
              url:'#viewgallerysquash',
              image:'images/galleryimages/squash2.jpg',
            },
            {
              name:'table-tennis',
              url:'#viewgallerytabletennis',
              image:'images/galleryimages/table-tennis2.jpg',
            },
            {
              name:'volleyball',
              url:'#viewgalleryvolleyball',
              image:'images/galleryimages/volleyball2.jpg',
            },
            {
              name:'weightlifting',
              url:'#viewgalleryweightlifting',
              image:'images/galleryimages/weightlifting2.jpg',
            },
            {
              name:'adventure',
              url:'#viewgalleryadventure',
              image:'images/galleryimages/adventure2.jpg',
            },
            {
              name:'chess',
              url:'#viewgallerychess',
              image:'images/galleryimages/chess2.jpg',
            },
            {
              name:'Skating',
              url:'#viewgalleryskating',
              image:'images/galleryimages/skating2.jpg',
            },
            {
              name:'teakwondo',
              url:'#viewgalleryteakwondo',
              image:'images/galleryimages/tea2.jpg',
            },
            {
              name:'card & Board Games',
              url:'#viewgallerycard',
              image:'images/galleryimages/card2.jpg',
            },
            {
              name:'Shooting',
              url:'#viewgalleryshooting',
              image:'images/galleryimages/shooting2.jpg',
            },
            {
              name:'Boxing',
              url:'#viewgalleryboxing',
              image:'images/galleryimages/boxing2.jpg',
            },
            {
              name:'Inter-IIT',
              url:'#viewgalleryinteriit',
              image:'images/galleryimages/interiit2.jpg',
            },
            {
              name:'Girls Aquatic Day',
              url:'#viewgallerygirlsaqua',
              image:'images/galleryimages/girlaqua2.jpg',
            },
            {
              name:'Inferno',
              url:'#viewgalleryinferno',
              image:'images/galleryimages/inferno2.jpg',
            },
            {
              name:'Josh',
              url:'#viewgalleryjosh',
              image:'images/galleryimages/josh2.jpg',
            },
            {
              name:'one weak one sport',
              url:'#viewgalleryoneweak',
              image:'images/galleryimages/oneweak2.jpg',
            },
            {
              name:'Tour De Force',
              url:'#viewgallerytourde',
              image:'images/galleryimages/tourde2.jpg',
            },
            {
              name:'Udghosh',
              url:'#viewgalleryudghosh',
              image:'images/galleryimages/udghosh2.jpg',
            }
            ];
            this.gallerys=gallerys;
         });

//sub gallery controller

  mainApp.controller('viewgalleryaquaticsController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/aquatics/aquatics1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/aquatics/aquatics2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/aquatics/aquatics3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/aquatics/aquatics4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/aquatics/aquatics5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/aquatics/aquatics6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/aquatics/aquatics7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/aquatics/aquatics8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/aquatics/aquatics9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/aquatics/aquatics10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/aquatics/aquatics11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/aquatics/aquatics12.jpg',
    }

  ];
  this.images=images;
});



 mainApp.controller('viewgalleryathleticsController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/athletics/athletics1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/athletics/athletics2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/athletics/athletics3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/athletics/athletics4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/athletics/athletics5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/athletics/athletics6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/athletics/athletics7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/athletics/athletics8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/athletics/athletics9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/athletics/athletics10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/athletics/athletics11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/athletics/athletics12.jpg',
    }

  ];
  this.images=images;
});

  mainApp.controller('viewgallerybadmintonController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/badminton/badminton1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/badminton/badminton2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/badminton/badminton3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/badminton/badminton4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/badminton/badminton5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/badminton/badminton6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/badminton/badminton7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/badminton/badminton8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/badminton/badminton9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/badminton/badminton10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/badminton/badminton11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/badminton/badminton12.jpg',
    }

  ];
  this.images=images;
});



  mainApp.controller('viewgallerybasketballController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/basketball/basketball1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/basketball/basketball2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/basketball/basketball3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/basketball/basketball4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/basketball/basketball5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/basketball/basketball6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/basketball/basketball7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/basketball/basketball8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/basketball/basketball9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/basketball/basketball10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/basketball/basketball11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/basketball/basketball12.jpg',
    }

  ];
  this.images=images;
});

 mainApp.controller('viewgallerycricketController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/cricket/cricket1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/cricket/cricket2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/cricket/cricket3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/cricket/cricket4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/cricket/cricket5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/cricket/cricket6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/cricket/cricket7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/cricket/cricket8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/cricket/cricket9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/cricket/cricket10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/cricket/cricket11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/cricket/cricket12.jpg',
    }

  ];
  this.images=images;
});


 mainApp.controller('viewgalleryfootballController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/football/football1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/football/football2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/football/football3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/football/football4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/football/football5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/football/football6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/football/football7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/football/football8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/football/football9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/football/football10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/football/football11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/football/football12.jpg',
    }

  ];
  this.images=images;
});


mainApp.controller('viewgalleryhockeyController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/hockey/hockey1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/hockey/hockey2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/hockey/hockey3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/hockey/hockey4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/hockey/hockey5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/hockey/hockey6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/hockey/hockey7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/hockey/hockey8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/hockey/hockey9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/hockey/hockey10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/hockey/hockey11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/hockey/hockey12.jpg',
    }

  ];
  this.images=images;
});


 mainApp.controller('viewgallerylawntennisController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/lawn-tennis/lawn-tennis1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/lawn-tennis/lawn-tennis2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/lawn-tennis/lawn-tennis3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/lawn-tennis/lawn-tennis4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/lawn-tennis/lawn-tennis5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/lawn-tennis/lawn-tennis6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/lawn-tennis/lawn-tennis7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/lawn-tennis/lawn-tennis8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/lawn-tennis/lawn-tennis9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/lawn-tennis/lawn-tennis10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/lawn-tennis/lawn-tennis11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/lawn-tennis/lawn-tennis12.jpg',
    }

  ];
  this.images=images;
});


 mainApp.controller('viewgallerysquashController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/squash/squash1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/squash/squash2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/squash/squash3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/squash/squash4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/squash/squash5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/squash/squash6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/squash/squash7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/squash/squash8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/squash/squash9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/squash/squash10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/squash/squash11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/squash/squash12.jpg',
    }

  ];
  this.images=images;
});



 mainApp.controller('viewgallerytabletennisController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/table-tennis/table-tennis1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/table-tennis/table-tennis2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/table-tennis/table-tennis3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/table-tennis/table-tennis4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/table-tennis/table-tennis5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/table-tennis/table-tennis6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/table-tennis/table-tennis7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/table-tennis/table-tennis8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/table-tennis/table-tennis9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/table-tennis/table-tennis10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/table-tennis/table-tennis11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/table-tennis/table-tennis12.jpg',
    }

  ];
  this.images=images;
});


 mainApp.controller('viewgalleryvolleyballController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/volleyball/volleyball1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/volleyball/volleyball2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/volleyball/volleyball3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/volleyball/volleyball4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/volleyball/volleyball5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/volleyball/volleyball6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/volleyball/volleyball7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/volleyball/volleyball8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/volleyball/volleyball9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/volleyball/volleyball10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/volleyball/volleyball1.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/volleyball/volleyball2.jpg',
    }

  ];
  this.images=images;
});



 mainApp.controller('viewgalleryweightliftingController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/weightlifting/weightlifting1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/weightlifting/weightlifting2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/weightlifting/weightlifting3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/weightlifting/weightlifting4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/weightlifting/weightlifting5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/weightlifting/weightlifting6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/weightlifting/weightlifting7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/weightlifting/weightlifting8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/weightlifting/weightlifting9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/weightlifting/weightlifting10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/weightlifting/weightlifting11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/weightlifting/weightlifting12.jpg',
    }

  ];
  this.images=images;
});

  mainApp.controller('viewgalleryadventureController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/adventure/adventure1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/adventure/adventure2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/adventure/adventure3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/adventure/adventure4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/adventure/adventure5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/adventure/adventure6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/adventure/adventure7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/adventure/adventure8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/adventure/adventure9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/adventure/adventure10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/adventure/adventure11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/adventure/adventure12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgallerychessController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/chess/chess1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/chess/chess2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/chess/chess3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/chess/chess4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/chess/chess5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/chess/chess6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/chess/chess7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/chess/chess8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/chess/chess9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/chess/chess10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/chess/chess11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/chess/chess12.jpg',
    }

  ];
  this.images=images;
});

  mainApp.controller('viewgalleryskatingController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/skating/skating1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/skating/skating2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/skating/skating3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/skating/skating4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/skating/skating5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/skating/skating6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/skating/skating7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/skating/skating8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/skating/skating9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/skating/skating10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/skating/skating11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/skating/skating12.jpg',
    }

  ];
  this.images=images;
});

  mainApp.controller('viewgalleryteakwondoController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/teakwondo/teakwondo1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/teakwondo/teakwondo2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/teakwondo/teakwondo3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/teakwondo/teakwondo4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/teakwondo/teakwondo5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/teakwondo/teakwondo6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/teakwondo/teakwondo7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/teakwondo/teakwondo8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/teakwondo/teakwondo9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/teakwondo/teakwondo10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/teakwondo/teakwondo11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/teakwondo/teakwondo12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgallerycardController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/card/card1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/card/card2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/card/card3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/card/card4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/card/card5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/card/card6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/card/card7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/card/card8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/card/card9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/card/card10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/card/card11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/card/card12.jpg',
    }

  ];
  this.images=images;
});

  mainApp.controller('viewgalleryshootingController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/shooting/shooting1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/shooting/shooting2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/shooting/shooting3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/shooting/shooting4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/shooting/shooting5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/shooting/shooting6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/shooting/shooting7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/shooting/shooting8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/shooting/shooting9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/shooting/shooting10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/shooting/shooting11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/shooting/shooting12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgalleryboxingController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/boxing/boxing1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/boxing/boxing2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/boxing/boxing3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/boxing/boxing4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/boxing/boxing5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/boxing/boxing6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/boxing/boxing7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/boxing/boxing8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/boxing/boxing9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/boxing/boxing10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/boxing/boxing11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/boxing/boxing12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgalleryinteriitController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/interiit/interiit1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/interiit/interiit2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/interiit/interiit3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/interiit/interiit4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/interiit/interiit5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/interiit/interiit6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/interiit/interiit7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/interiit/interiit8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/interiit/interiit9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/interiit/interiit10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/interiit/interiit11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/interiit/interiit12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgallerygirlsaquaController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/aquagirl/aquagirl1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/aquagirl/aquagirl2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/aquagirl/aquagirl3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/aquagirl/aquagirl4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/aquagirl/aquagirl5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/aquagirl/aquagirl6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/aquagirl/aquagirl7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/aquagirl/aquagirl8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/aquagirl/aquagirl9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/aquagirl/aquagirl10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/aquagirl/aquagirl11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/aquagirl/aquagirl12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgalleryinfernoController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/inferno/inferno1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/inferno/inferno2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/inferno/inferno3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/inferno/inferno4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/inferno/inferno5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/inferno/inferno6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/inferno/inferno7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/inferno/inferno8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/inferno/inferno9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/inferno/inferno10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/inferno/inferno11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/inferno/inferno12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgalleryjoshController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/josh/josh1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/josh/josh2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/josh/josh3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/josh/josh4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/josh/josh5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/josh/josh6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/josh/josh7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/josh/josh8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/josh/josh9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/josh/josh10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/josh/josh11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/josh/josh12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgalleryoneweakController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/oneweak/oneweak1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/oneweak/oneweak2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/oneweak/oneweak3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/oneweak/oneweak4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/oneweak/oneweak5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/oneweak/oneweak6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/oneweak/oneweak7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/oneweak/oneweak8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/oneweak/oneweak9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/oneweak/oneweak10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/oneweak/oneweak11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/oneweak/oneweak12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgallerytourdeController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/tourde/tourde1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/tourde/tourde2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/tourde/tourde3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/tourde/tourde4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/tourde/tourde5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/tourde/tourde6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/tourde/tourde7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/tourde/tourde8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/tourde/tourde9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/tourde/tourde10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/tourde/tourde11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/tourde/tourde12.jpg',
    }

  ];
  this.images=images;
});


  mainApp.controller('viewgalleryudghoshController', function ($scope) {
   $scope.showPopover = function(event) {
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                      };
                      
                    };

                    $scope.hidePopover = function (event) {
                      if (event=='1') {$scope.popoverIsVisible1 = false;}
                      if (event=='2') {$scope.popoverIsVisible2 = false;}
                      if (event=='3') {$scope.popoverIsVisible3 = false;}
                      if (event=='4') {$scope.popoverIsVisible4 = false;}
                      if (event=='5') {$scope.popoverIsVisible5 = false;}
                      if (event=='6') {$scope.popoverIsVisible6 = false;}
                      if (event=='7') {$scope.popoverIsVisible7 = false;}
                      if (event=='8') {$scope.popoverIsVisible8 = false;}
                      if (event=='9') {$scope.popoverIsVisible9 = false;}
                      if (event=='10') {$scope.popoverIsVisible10 = false;}
                      if (event=='11') {$scope.popoverIsVisible11 = false;}
                      if (event=='12') {$scope.popoverIsVisible12 = false;}
                    };
                    $scope.showPopovernext = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='2') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='12') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
                    $scope.showPopoverprev = function(event){
                      for (var i = 1; i<=12; i++) {
                        if (event=='3') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = true;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='4') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = true;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='5') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = true;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='6') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = true;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='7') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = true;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='8') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = true;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='9') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = true;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='10') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = true;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}                       
                        if (event=='11') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = true;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                        if (event=='12') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = true;$scope.popoverIsVisible12 = false;}
                        if (event=='1') {$scope.popoverIsVisible1 = false;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = true;}
                        if (event=='2') {$scope.popoverIsVisible1 = true;$scope.popoverIsVisible2 = false;$scope.popoverIsVisible3 = false;$scope.popoverIsVisible4 = false;$scope.popoverIsVisible5 = false;$scope.popoverIsVisible6 = false;$scope.popoverIsVisible7 = false;$scope.popoverIsVisible8 = false;$scope.popoverIsVisible9 = false;$scope.popoverIsVisible10 = false;$scope.popoverIsVisible11 = false;$scope.popoverIsVisible12 = false;}
                      };
                    };
  var images = [
    {
      mynumber:'1',
      url: 'images/subgallery/udghosh/udghosh1.jpg',
    },
    {
      mynumber:'2',
      url: 'images/subgallery/udghosh/udghosh2.jpg',
    },
    {
      mynumber:'3',
      url: 'images/subgallery/udghosh/udghosh3.jpg',
    },
    {
     mynumber:'4',
      url: 'images/subgallery/udghosh/udghosh4.jpg', 
    },
    {
       mynumber:'5',
       url: 'images/subgallery/udghosh/udghosh5.jpg', 
    },
    {
       mynumber:'6',
       url: 'images/subgallery/udghosh/udghosh6.jpg',  
    },
    {
       mynumber:'7',
      url: 'images/subgallery/udghosh/udghosh7.jpg',  
    },
    {
       mynumber:'8',
       url: 'images/subgallery/udghosh/udghosh8.jpg', 
    },
    {
       mynumber:'9',
       url: 'images/subgallery/udghosh/udghosh9.jpg',  
    },
    {
       mynumber:'10',
       url: 'images/subgallery/udghosh/udghosh10.jpg',  
    },
    {
       mynumber:'11',
      url: 'images/subgallery/udghosh/udghosh11.jpg', 
    },
    {
       mynumber:'12',
      url: 'images/subgallery/udghosh/udghosh12.jpg',
    }

  ];
  this.images=images;
});



