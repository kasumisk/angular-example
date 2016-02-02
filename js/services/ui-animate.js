/**
 * Created by Administrator on 2015/12/16.
 */
angular.module('app').animation('.view-slide-in', function () {
    return {
        enter: function(element, done) {
            element.css({
                opacity: 0.5,
                position: "relative",
                top: "10px",
                left: "20px"
            })
                .animate({
                    top: 0,
                    left: 0,
                    opacity: 1
                }, 1000, done);
        }
    };
});