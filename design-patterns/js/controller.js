
app.controller('MainController', ['$scope', function($scope) {
$scope.cats = [
 {
   name: "Frank",
   image: "img/unnamed.jpg",
   clicks: 0,
 },
  {
   name: "Sally",
   image: "img/cat.png",
   clicks: 0,
 },
  {
   name: "Nathan",
   image: "img/cat1.jpg",
   clicks: 0,
 },
  {
   name: "Tilly",
   image: "img/twocats.jpg",
   clicks: 0,
 },
  {
   name: "Matlock",
   image: "img/cat-matlock-derbyshire.jpg",
   clicks: 0,
 }
],
$scope.mainImg = $scope.cats[0],
$scope.showCat = function(index){
	$scope.mainImg = $scope.cats[index];
},
$scope.clickCat = function(){
	$scope.mainImg.clicks += 1;
}
}]);
