'use strict';

/* Controllers */

app
  // Flot Chart controller 
  .controller('OnLineCtrl', ['$scope', '$http','uiLoad',"$window",'$filter',function($scope,$http,uiLoad,$window,$filter) {
      //测试
    $scope.open = function($event,name) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope[name] = true;
    };
    $scope.updata = function(){
        $http({
          url:'http://10.8.8.18:8080/IM-Statistics-JFinal/logOnlineRecord',
          method:'POST',
          params:{type:0,time:$filter('date')($scope.d1_d,'yyyy-MM-dd')}
        }).success(function(req,header,config){
          var data = {
            chart: {
              type: 'spline'
            },
            title: {
              text: '在线人数'
            },
            credits:{
              enabled: false
            },
            xAxis: {
              categories: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12',"13","14",'15','16','17','18','19','20','21','22','23','24']
            },
            yAxis: {
              title: {
                text: ''
              },
              min: 0
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
            },
            tooltip: {
              formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    Highcharts.dateFormat('%e. %b', this.x) +': '+ this.y +' 人';
              }
            },
            series: [{
              name: '最大',

              data: [

              ]
            }, {
              name: '平均',
              data: [

              ]
            }]
          };

          for(var i = 0 ; i < req.data.length; i++){
            console.log(req.data[0].max)
            data.series[0].data.push([req.data[i].time,req.data[i].max])
            data.series[1].data.push([req.data[i].time,req.data[i].avg])
          }

          $window.jQuery(".online-chart").eq(0).highcharts(data);

          $window.jQuery(".online-table").eq(0).DataTable({
            data:req.data,
            columns:[{data:"time"},{data:"max"},{data:"avg"}]
          });

        });

      $http({
        url:'http://10.8.8.18:8080/IM-Statistics-JFinal/logOnlineRecord',
        method:'POST',
        params:{type:1,time:$filter('date')($scope.d1_d,'yyyy-MM-dd')}
      }).success(function(req,header,config){
        var data = {
          chart: {
            type: 'spline'
          },
          title: {
            text: '在线人数'
          },
          credits:{
            enabled: false
          },
          xAxis: {
            categories: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12',"13","14",'15','16','17','18','19','20','21','22','23','24']
          },
          yAxis: {
            title: {
              text: ''
            },
            min: 0
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          tooltip: {
            formatter: function() {
              return '<b>'+ this.series.name +'</b><br/>'+
                  Highcharts.dateFormat('%e. %b', this.x) +': '+ this.y +' 人';
            }
          },
          series: [{
            name: '最大',

            data: [

            ]
          }, {
            name: '平均',
            data: [

            ]
          }]
        };

        for(var i = 0 ; i < req.data.length; i++){
          console.log(req.data[0].max)
          data.series[0].data.push([req.data[i].time,req.data[i].max])
          data.series[1].data.push([req.data[i].time,req.data[i].avg])
        }

        $window.jQuery(".online-chart").eq(1).highcharts(data);

        $window.jQuery(".online-table").eq(1).DataTable({
          data:req.data,
          columns:[{data:"time"},{data:"max"},{data:"avg"}]
        });

      });
    }
  }]);

  app.controller('RecHargeCtrl',['$scope', '$http','uiLoad',"$window",'$filter','uiApi',function($scope,$http,uiLoad,$window,$filter,uiApi) {
      $scope.open = function($event,name) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope[name] = true;
      };
      //百分比堆载柱状图    条形图
      $scope.updata = function(){
        uiApi.getRecHarge('')


      }

  }]);
  app.controller('RegLiving',['$scope', '$http','uiLoad',"$window",'$filter','uiApi',function($scope,$http,uiLoad,$window,$filter,uiApi) {
    $scope.open = function($event,name) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope[name] = true;
    };

    $scope.updata = function(){
      uiApi.getRecHarge('')


    }

  }]);


