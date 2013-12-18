/// <reference path="../../definitions/jquery.d.ts" />
/// <reference path="../../definitions/qflipper.d.ts" />

module DEFAULT_SET {

  export function loadQflipper(options) {

    var qflipperOptions = {
      type: (options.flipType)? options.flipType: 'simple',
      view: (options.viewNode)? options.viewNode: '#zflickjs',
      item: (options.itemNode)? options.itemNode: '.zcol'
    };
    var _options = {
      // lamp
      lampTagName:      (options.lampItemNodeTagName)? options.lampItemNodeTagName: 'div',
      lampClassName:    (options.lampItemNodeClassName)? options.lampItemNodeClassName: 'lamp',
      lampCurClassName: (options.lampItemNodeCurClassName)? options.lampItemNodeCurClassName: 'cur',

      // button
      buttonEvent:   (options.buttonEvent)? options.buttonEvent: false,
      $nextButton: (options.nextItemElmId)? $(options.nextItemElmId): $('#flipsnapNext'),
      $prevButton: (options.prevItemElmId)? $(options.prevItemElmId): $('#flipsnapPrev')
    }
    var flipElm = (options.flipNode)? options.flipNode: '#zcontents';
    var qflipper = new Q.Flipper(flipElm, qflipperOptions);

    var lampElm = (options.lampNode)? options.lampNode: '#zflickLamp';
    var $lampAreaElm = $(lampElm);

    var lampCenterPos = function(){
        var lampWidth = $lampAreaElm.width(),
            wrapWidth = 320,
            rtnWidth = Math.floor((wrapWidth/2) - (lampWidth/2))
        ;
        $lampAreaElm.css('left', rtnWidth + 'px');
    }

    var setLamp = function() {
      var _lamp_list_html = '';
      for(var i = 0; i < qflipper.getMaxPoint(); i++) {
        if(i === qflipper.getPoint()) {
          _lamp_list_html += '<'+ _options.lampTagName +' class="'+ _options.lampClassName +' '+ _options.lampCurClassName +'"></'+ _options.lampTagName +'>';
        } else {
          _lamp_list_html += '<'+ _options.lampTagName +' class="'+ _options.lampClassName +'"></'+ _options.lampTagName +'>';
        }
      }

      $lampAreaElm.html(_lamp_list_html);
      lampCenterPos();
    }

    setLamp();

    var changeLamp = function() {
      var $lampElms = $('.' + _options.lampClassName, $lampAreaElm);
      $lampElms.removeClass(_options.lampCurClassName);
      $lampElms.eq(qflipper.getPoint()).addClass(_options.lampCurClassName);
    }

    var IntervalTimer = {
      flag: false,
      timer: 0,
      setIntervalTimer: function(timer) {
        this.timer = timer;
      },
      hasIntervalTimer: function() {
        return this.flag;
      },
      on: function() {
        this.flag = true;
      },
      off: function() {
        this.flag = false;
      }
    }

    var autoMove = function() {
      if(qflipper.hasNext()) {
        qflipper.toNext();
        changeLamp();
        return;
      }
      qflipper.refresh();
      changeLamp();
    }

    var startAutoChanger = function(msec) {
      if(!IntervalTimer.hasIntervalTimer()) {
        IntervalTimer.on();
        IntervalTimer.setIntervalTimer(setInterval(autoMove, msec));
       }
    }

    var stopAutoChanger = function() {
      if(IntervalTimer.hasIntervalTimer()) {
        IntervalTimer.off();
        clearInterval(IntervalTimer.timer);
      }
    }

    var loadButtonEvent = function() {
      if(_options.buttonEvent) {
        if(!qflipper.hasNext()) {
          _options.$nextButton.hide();
        }
        if(!qflipper.hasPrev()) {
          _options.$prevButton.hide();
        }
        if(qflipper.hasNext()) {
          _options.$nextButton.show();
        }
        if(qflipper.hasPrev()) {
          _options.$prevButton.show();
        }
      }
    }
    
    var autoChangerFlag = (options.autoChanger)? options.autoChanger: false;
    var autoChangerMsec = (options.autoChanerMsec)? autoChangerMsec: 4000;
    if(autoChangerFlag) {
      startAutoChanger(autoChangerMsec);
    }

    qflipper.flipElement().on('fptouchstart', function() {
      if(autoChangerFlag) {
        stopAutoChanger();
      }
    });

    qflipper.flipElement().on('fptouchmove', function() {
      if(autoChangerFlag) {
        stopAutoChanger();
      }
    });

    qflipper.flipElement().on('fptouchend', function() {
      if(autoChangerFlag) {
        stopAutoChanger();
        startAutoChanger(autoChangerMsec);
      }
      loadButtonEvent();
      changeLamp();
    });

    if(_options.buttonEvent) {

      _options.$nextButton.show();

      _options.$nextButton.on('click', function() {
        qflipper.toNext();
        changeLamp();

        _options.$prevButton.show();

        if(!qflipper.hasNext()) {
          $(this).hide();
        }
      });

      _options.$prevButton.on('click', function() {
        qflipper.toPrev();
        changeLamp();

        _options.$nextButton.show();

        if(!qflipper.hasPrev()) {
          $(this).hide();
        }
      });
    }
  }

}
