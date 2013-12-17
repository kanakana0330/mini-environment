module TOOLKIT {

  export function countdownTimer(nodeName, limitOptions, redzoneOptions, callback) {

    var $el = $(nodeName);
    var _callback = (callback)? callback: function(){};

    var createTimerElement = function(hour, month, second, isRedzone) {
      var h1 = (hour < 10)?   '0': hour.toString().charAt(0);
      var h2 = (hour > 9)?    hour.toString().charAt(1): hour.toString().charAt(0);
      var m1 = (month < 10)?  '0': month.toString().charAt(0);
      var m2 = (month > 9)?   month.toString().charAt(1): month.toString().charAt(0);
      var s1 = (second < 10)? '0': second.toString().charAt(0);
      var s2 = (second > 9)?  second.toString().charAt(1): second.toString().charAt(0);

      var normalHTML = function() {
        return '<span class="countdown-pos-h1 countdown-num-'+ h1 +'"></span>' + 
          '<span class="countdown-pos-h2 countdown-num-'+ h2 +'"></span>' + 
          '<span class="countdown-pos-m1 countdown-num-'+ m1 +'"></span>' + 
          '<span class="countdown-pos-m2 countdown-num-'+ m2 +'"></span>' + 
          '<span class="countdown-pos-s1 countdown-num-'+ s1 +'"></span>' + 
          '<span class="countdown-pos-s2 countdown-num-'+ s2 +'"></span>' +
          '<span class="countdown-pos-c1 countdown-num-anime-1"></span>' +
          '<span class="countdown-pos-c2 countdown-num-anime-2"></span>';
      }

      var redzoneHTML = function() {
        return '<span class="countdown-pos-h1 countdown-num-'+ h1 +' bit-more"></span>' + 
          '<span class="countdown-pos-h2 countdown-num-'+ h2 +' bit-more"></span>' + 
          '<span class="countdown-pos-m1 countdown-num-'+ m1 +' bit-more"></span>' + 
          '<span class="countdown-pos-m2 countdown-num-'+ m2 +' bit-more"></span>' + 
          '<span class="countdown-pos-s1 countdown-num-'+ s1 +' bit-more"></span>' + 
          '<span class="countdown-pos-s2 countdown-num-'+ s2 +' bit-more"></span>' +
          '<span class="countdown-pos-c1 countdown-num-anime-1 bit-more"></span>' +
          '<span class="countdown-pos-c2 countdown-num-anime-2 bit-more"></span>';
      }

      return (function(){
        if(isRedzone) {
          return redzoneHTML();
        }
        return normalHTML();
      })();
    }

    var timer = 0;
    var setTimer = function() {
      timer = setInterval(function() {
        var endDate: any = new Date(limitOptions.year, (limitOptions.month - 1), limitOptions.day, limitOptions.hour, limitOptions.minute);
        var redDate: any = new Date(redzoneOptions.year, (redzoneOptions.month - 1), redzoneOptions.day, redzoneOptions.hour, redzoneOptions.minute);
        var startDate: any = new Date();

        var remaindDate: any = (function(){
          return endDate - startDate;
        })();

        var redzoneDate: any = (function(){
          return endDate - redDate;
        })();

        var getRemaindDay: any = function() {
          return Math.floor(
            remaindDate / (24 * 60 * 60 * 1000)
          );
        }

        var getRemaindHour: any = function() {
          return Math.floor(
            (remaindDate % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
          );
        }

        var getRemaindMonth: any = function() {
          return Math.floor(
            ((remaindDate % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60
          );
        }

        var getRemaindSecond: any = function() {
          return Math.floor(
            (remaindDate % (24 * 60 * 60 * 1000) / 1000) % 60 % 60
          );
        }

        var getRemaindTotalHour: any = function() {
          return (getRemaindDay() * 24) + getRemaindHour();
        }

        function isRedzone(): boolean {
          if(remaindDate - redzoneDate < 0) {
            return true;
          }
          return false;
        }

        if(remaindDate < 0) {
          clearInterval(timer);
          $el.html(
            '<span class="countdown-pos-h1 countdown-num-0 bit-more"></span>' + 
            '<span class="countdown-pos-h2 countdown-num-0 bit-more"></span>' + 
            '<span class="countdown-pos-m1 countdown-num-0 bit-more"></span>' + 
            '<span class="countdown-pos-m2 countdown-num-0 bit-more"></span>' + 
            '<span class="countdown-pos-s1 countdown-num-0 bit-more"></span>' + 
            '<span class="countdown-pos-s2 countdown-num-0 bit-more"></span>' +
            '<span class="countdown-pos-c1 countdown-num-mini-0 bit-more"></span>' +
            '<span class="countdown-pos-c2 countdown-num-mini-0 bit-more"></span>'
          );
          _callback();
          return;
        }

        $el.html(createTimerElement(
          getRemaindTotalHour(),
          getRemaindMonth(),
          getRemaindSecond(),
          isRedzone()
        ));
        
      },1000);
    }

    setTimer();

  }

}
