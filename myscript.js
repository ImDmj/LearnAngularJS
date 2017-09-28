/* //----------------- angular1-moduleController.html -----------------------------

var myapp=angular.module("myModule",[]);

//creating a controller and registering it with module
var myController= function($scope) {
    $scope.message="AngularJS Tuts";
};
//register controller with module
myapp.controller("myController",myController);


//instead of creating and then registering the controller with the module in 2 different line of code
// we can straight away specify the controller inline like 
myapp.controller("myController",function($scope) {
    $scope.message="AngularJS Tuts";
});
*/

/*// -----------------------//angular2-Controllers.html ------------------------------

var myapp=angular.module("myModule",[]);
myapp.controller("myController",function($scope) {
    var emp={
        firstname:"David",
        lastname:"Hastings",
        gender:"Male"
    }
    $scope.employee=emp;
});

//A way to create module, controller and register controller with module all in one line.This is called METHOD CHAINING
var myapp=angular
        .module("myModule",[])
        .controller("myController",function($scope) {
            var emp={
                firstname:"David",
                lastname:"Hastings",
                gender:"Male"
            };
            $scope.employee=emp;
        });
*/

// -----------------------//angular3-TowWayBinding.html ------------------------------

/*as we type in the textbox and since we specified ng-model as message and we have that model, 
so the value on the textbox is udating the model data and the binding expression, its updating the view.
*/
/*//Working with Simple object
var myapp=angular
        .module("myModule",[])
        .controller("myController",function($scope) {
            $scope.message="AngularJS Tuts";
});
*/
/*
var myapp=angular
        .module("myModule",[])
        .controller("myController",function($scope) {
            var emp={
                firstname:"Ben",
                lastname:"Hastings",
                gender:"Male"
            };
            $scope.employee=emp;
        });
*/

// -----------------------//angular4-ng-repeat.html ------------------------------
/*
var myapp=angular
        .module("myModule",[])
        .controller("myController",function($scope) {
            var employees=[
                {firstname:"Ben",lastname:"Hastings",gender:"Male", salary:50000},
                {firstname:"John",lastname:"Dow",gender:"Male", salary:50000},
                {firstname:"Shawn",lastname:"Mendis",gender:"Male", salary:50000},
                {firstname:"Jake",lastname:"Garrik",gender:"Male", salary:50000},
                {firstname:"Jimmy",lastname:"Hawkins",gender:"Male", salary:50000}
            ];
            $scope.employee=employees;
});

//Nested ng-repeat
var app=angular
        .module("myModule",[])
        .controller("myController",function($scope) {
            var countries=[
                {
                    name:"USA",
                    cities:[
                        {name:"NYC"},
                        {name:"D.C"},
                        {name:"Chicago"}
                    ]
                },
                {
                    name:"UK",
                    cities:[
                        {name:"London"},
                        {name:"Birmingham"},
                        {name:"Manchester"}
                    ]
                },
                {
                    name:"India",
                    cities:[
                        {name:"Delhi"},
                        {name:"Mumbai"},
                        {name:"Chennai"}
                    ]
                }
            ];
            $scope.countries=countries;
        });
*/

// -----------------------//angular5-handlingEvents.html ------------------------------
/*
var myapp=angular
        .module("myModule",[])
        .controller("myController",function($scope) {
            var technologies=[
                {name:"Java",likes:0,dislikes:0},
                {name:"JavaScript",likes:0,dislikes:0},
                {name:"AngularJS",likes:0,dislikes:0},
                {name:"SQL Server",likes:0,dislikes:0}
            ];
            $scope.technology=technologies;
            $scope.incrementlikes=function(technology){
                technology.likes++
            }
            $scope.incrementdislikes=function(technology){
                technology.dislikes++
            }
        });
*/

// -----------------------//angular6-filters.html ------------------------------
/*
- filter do 3 things - format, sort and filter
- these can be used with a binding exression or a directive
- pipe(|) character is used to apply filter
  {{expression | filterName:parameter}}
*/
/*
var myapp=angular
        .module("myModule",[])
        .controller("myController",function($scope) {
            var employees=[
                {name:"Ben",dateofbirth:new Date("November 23,1990"),gender:"Male", salary:50000.788},
                {name:"Jody",dateofbirth:new Date("october 05,1989"),gender:"Female", salary:58000},
                {name:"Shawn",dateofbirth:new Date("August 12,1992"),gender:"Male", salary:57804},
                {name:"Nancy",dateofbirth:new Date("December 31,1997"),gender:"Female", salary:50288},
                {name:"Jimmy",dateofbirth:new Date("March 24,1991"),gender:"Male", salary:52787}
            ];
            $scope.employee=employees;
            $scope.rowLimit=3;
        });
*/
// -----------------------//angular7-sorting.html ------------------------------
/*
orderBy filter is used
{{orderBy-expression|orderBy:expression:reverse}}
one way to sort data in ascending order is to set reverse to false and for descending set reverse to true
other way is to use + for ascending and - for descending with column name
 */
/*
var myapp=angular
        .module("myModule",[])
        .controller("myController",function($scope) {
            var employees=[
                {name:"Ben",dateofbirth:new Date("November 23,1990"),gender:"Male", salary:50000.788},
                {name:"Jody",dateofbirth:new Date("october 05,1989"),gender:"Female", salary:58000},
                {name:"Shawn",dateofbirth:new Date("August 12,1992"),gender:"Male", salary:57804},
                {name:"Nancy",dateofbirth:new Date("December 31,1997"),gender:"Female", salary:50288},
                {name:"Jimmy",dateofbirth:new Date("March 24,1991"),gender:"Male", salary:52787}
            ];
            $scope.employee=employees;
            $scope.sortColumn="name";
            $scope.reverseSort=false; //property with boolean value
            
            //function to give sort facility
            $scope.sortData= function (column) {
                $scope.reverseSort= ($scope.sortColumn==column) ? !$scope.reverseSort : false
                $scope.sortColumn=column;
            }
            $scope.getSortClass= function (column) {
                if ($scope.sortColumn==column) {
                    return $scope.reverseSort ? 'arrow-down':'arrow-up'
                }
                return '';
            }
        });
*/
// -----------------------//angular8-searchFiler.html ------------------------------
/*
var app = angular
        .module("myModule",[])
        .controller("myController",function($scope){
            var employees = [
                {name:"Sara",gender:"Female",salary:25140,city:"NYC"},
                {name:"Tania",gender:"Female",salary:24821,city:"Chicago"},
                {name:"Harry",gender:"Male",salary:54413,city:"Dallas"},
                {name:"Jack",gender:"Male",salary:46584,city:"IowaCity"},
                {name:"Linda",gender:"Female",salary:76584,city:"Jersey"}
            ];
        $scope.employee = employees ;

        //Search by certain item 
        $scope.search = function(item) {
            // if we did not enter any text then it will be undefined,if we want to show table entries then it has to return true.
            if ($scope.searchText == undefined ) {
                return true;
            }
            else {
                if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || 
                    item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1){
                    return true;
                }
            }
            return false;
        }
    });
*/
// -----------------------//angular9-customFiler.html ------------------------------
/*
Custom filter - a function that returns function. to create custom filter use the filter function
*/
/*
var filterApp = angular
        .module("myModule",[])
        .controller("myController",function($scope){
            var employees = [
                {name:"Sara",gender:1,salary:25140,city:"NYC"},
                {name:"Tania",gender:2,salary:24821,city:"Chicago"},
                {name:"Harry",gender:1,salary:54413,city:"Dallas"},
                {name:"Jack",gender:3,salary:46584,city:"IowaCity"},
                {name:"Linda",gender:2,salary:76584,city:"Jersey"}
            ];
        $scope.employee = employees ;
});
*/

// -----------------------//angular10-ng-hide&ng-show.html ------------------------------
/*
ng-hide and ng-show are used to control the visibility of the html elements.
*/
/*
var app = angular
        .module("myModule",[])
        .controller("myController",function($scope){
            var employees = [
                {name:"Sara",gender:"Female",salary:25140,city:"NYC"},
                {name:"Tania",gender:"Female",salary:24821,city:"Chicago"},
                {name:"Harry",gender:"Male",salary:54413,city:"Dallas"},
                {name:"Jack",gender:"Male",salary:46584,city:"IowaCity"},
                {name:"Linda",gender:"Female",salary:76584,city:"Jersey"}
            ];
        $scope.employee = employees ;
});
*/
