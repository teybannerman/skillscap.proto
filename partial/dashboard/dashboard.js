angular.module('skillscap-proto').controller('DashboardCtrl',function($scope){


  $scope.dash = {
    project: 'Incredifone'
  };

  // Chart generation

  var randomScalingFactor = function(){ return Math.round(Math.random()*100); };

  var data30 = [];
  var labels30 = [];

  for (var i=0; i<31; i++) {
    data30[i] = randomScalingFactor();
    labels30[i] = "";
  }

  var chartActivityData = {
    labels: labels30,
    datasets : [
      {
        fillColor : "rgba(202,202,217,1)",
        strokeColor : "rgba(202,202,217,1)",
        highlightFill : "rgba(19,166,191,1)",
        highlightStroke : "rgba(19,166,191,1)",
        data : data30
      }
    ]
  };

  var ctx = document.getElementById("chartActivity").getContext("2d");
  var chartActivity = new Chart(ctx).Bar(chartActivityData, {
    responsive: true,
    maintainAspectRatio: false,
    showScale: false,
    scaleShowLabels : false,
    scaleShowGridLines : false,
    barDatasetSpacing : 0,
    barValueSpacing : 1,
    scaleLineWidth: 0
  });


});