/**
* qflipper.js
* @version 1.3
* @author: Hiroki Oiwa;
* @url: http://funnythingz.github.com/qflipper/
* @license MIT (http://www.opensource.org/licenses/mit-license.php)
*/
;var Q;
(function (Q) {
    var $NameChecker = (function () {
        function $NameChecker() {
        }
        $NameChecker.prototype.get$Name = function () {
            if (typeof jQuery === 'function') {
                return $NameEnum.jQuery;
            }
            if (typeof Zepto === 'function') {
                return $NameEnum.Zepto;
            }
        };
        return $NameChecker;
    })();
    Q.$NameChecker = $NameChecker;

    (function ($NameEnum) {
        $NameEnum[$NameEnum["jQuery"] = 0] = "jQuery";
        $NameEnum[$NameEnum["Zepto"] = 1] = "Zepto";
    })(Q.$NameEnum || (Q.$NameEnum = {}));
    var $NameEnum = Q.$NameEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var AnimationFlag = (function () {
        function AnimationFlag(flag) {
            if (typeof flag === "undefined") { flag = false; }
            this.flag = flag;
        }
        AnimationFlag.prototype.enabled = function () {
            this.flag = true;
        };

        AnimationFlag.prototype.disabled = function () {
            this.flag = false;
        };

        AnimationFlag.prototype.checkStatus = function () {
            return this.flag;
        };
        return AnimationFlag;
    })();
    Q.AnimationFlag = AnimationFlag;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Animator = (function () {
        function Animator() {
            this.transitionWithPrefix = new Q.TransitionWithPrefixDecorator(new Q.TransitionCss3Propaty());
            this.transformWithPrefix = new Q.TransformWithPrefixDecorator(new Q.TransformCss3Propaty());
            this.$el = Q.FLIP_ELEMENT.getElement();
        }
        Animator.prototype.transAnimation = function (movePosition) {
            this.setTransition();

            var translateX3d = new Q.TranslateX3d(movePosition);

            this.$el.css(this.transformWithPrefix.getCss3PropatyName(), translateX3d.getMovePosition());
        };

        Animator.prototype.noTransAnimation = function (movePosition) {
            this.unsetTransition();

            var translateX3d = new Q.TranslateX3d(movePosition);

            this.$el.css(this.transformWithPrefix.getCss3PropatyName(), translateX3d.getMovePosition());
        };

        Animator.prototype.setTransition = function () {
            this.$el.css(this.transitionWithPrefix.getCss3PropatyName(), this.transformWithPrefix.getCss3PropatyNameWithEffect());
        };

        Animator.prototype.unsetTransition = function () {
            this.$el.css(this.transitionWithPrefix.getCss3PropatyName(), 'none');
        };
        return Animator;
    })();
    Q.Animator = Animator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TransformCss3Propaty = (function () {
        function TransformCss3Propaty() {
        }
        TransformCss3Propaty.prototype.getCss3PropatyName = function () {
            return 'transform';
        };
        return TransformCss3Propaty;
    })();
    Q.TransformCss3Propaty = TransformCss3Propaty;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TransformWithPrefixDecorator = (function () {
        function TransformWithPrefixDecorator(css3PropatyName) {
            this.css3PropatyName = css3PropatyName;
            this.prefixChecker = new Q.PrefixChecker(Q.TransformEnum);
        }
        TransformWithPrefixDecorator.prototype.getCss3PropatyName = function () {
            return '-' + this.prefixChecker.getPrefix() + '-' + this.css3PropatyName.getCss3PropatyName();
        };

        TransformWithPrefixDecorator.prototype.getCss3PropatyNameWithEffect = function () {
            return this.getCss3PropatyName() + ' .3s ease-in-out';
        };
        return TransformWithPrefixDecorator;
    })();
    Q.TransformWithPrefixDecorator = TransformWithPrefixDecorator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TransitionCss3Propaty = (function () {
        function TransitionCss3Propaty() {
        }
        TransitionCss3Propaty.prototype.getCss3PropatyName = function () {
            return 'transition';
        };
        return TransitionCss3Propaty;
    })();
    Q.TransitionCss3Propaty = TransitionCss3Propaty;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TransitionWithPrefixDecorator = (function () {
        function TransitionWithPrefixDecorator(css3PropatyName) {
            this.css3PropatyName = css3PropatyName;
            this.prefixChecker = new Q.PrefixChecker(Q.TransitionEnum);
        }
        TransitionWithPrefixDecorator.prototype.getCss3PropatyName = function () {
            return '-' + this.prefixChecker.getPrefix() + '-' + this.css3PropatyName.getCss3PropatyName();
        };
        return TransitionWithPrefixDecorator;
    })();
    Q.TransitionWithPrefixDecorator = TransitionWithPrefixDecorator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TranslateX3d = (function () {
        function TranslateX3d(movePosition) {
            this.movePosition = movePosition;
        }
        TranslateX3d.prototype.getMovePosition = function () {
            var stringMovePosition = this.movePosition.toString();
            return 'translate3d(' + stringMovePosition + 'px, 0, 0)';
        };
        return TranslateX3d;
    })();
    Q.TranslateX3d = TranslateX3d;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var ItemSize = (function () {
        function ItemSize(options) {
            var $el = Q.FLIP_ELEMENT.getElement();

            this.soloWidth = $(options.view.getName()).width();
            this.totalLength = $(options.item.getName(), $el).length;
            this.totalWidth = this.soloWidth * this.totalLength;
        }
        ItemSize.prototype.getSoloWidth = function () {
            return this.soloWidth;
        };

        ItemSize.prototype.getTotalWidth = function () {
            return this.totalWidth;
        };

        ItemSize.prototype.getTotalLength = function () {
            return this.totalLength;
        };
        return ItemSize;
    })();
    Q.ItemSize = ItemSize;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Point = (function () {
        function Point(point) {
            this.point = point;
        }
        Point.prototype.getPoint = function () {
            return this.point;
        };
        return Point;
    })();
    Q.Point = Point;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Position = (function () {
        function Position(x, y) {
            this.x = x;
            this.y = y;
        }
        Position.prototype.getX = function () {
            return this.x;
        };

        Position.prototype.getY = function () {
            return this.y;
        };
        return Position;
    })();
    Q.Position = Position;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var DistancePositionCreator = (function () {
        function DistancePositionCreator(touchmovePosition) {
            this.touchmovePosition = touchmovePosition;
        }
        DistancePositionCreator.prototype.createPosition = function (startPosition) {
            return new Q.Position(startPosition.getX() - this.touchmovePosition.getX(), startPosition.getY() - this.touchmovePosition.getY());
        };
        return DistancePositionCreator;
    })();
    Q.DistancePositionCreator = DistancePositionCreator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    (function (FlipTypeEnum) {
        FlipTypeEnum[FlipTypeEnum["Simple"] = 0] = "Simple";
        FlipTypeEnum[FlipTypeEnum["Rich"] = 1] = "Rich";
    })(Q.FlipTypeEnum || (Q.FlipTypeEnum = {}));
    var FlipTypeEnum = Q.FlipTypeEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    (function (PrefixEnum) {
        PrefixEnum[PrefixEnum["webkit"] = 0] = "webkit";
        PrefixEnum[PrefixEnum["moz"] = 1] = "moz";
        PrefixEnum[PrefixEnum["o"] = 2] = "o";
        PrefixEnum[PrefixEnum["ms"] = 3] = "ms";
    })(Q.PrefixEnum || (Q.PrefixEnum = {}));
    var PrefixEnum = Q.PrefixEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    (function (TransformEnum) {
        TransformEnum[TransformEnum['-webkit-transform'] = 0] = '-webkit-transform';
        TransformEnum[TransformEnum['-moz-transform'] = 1] = '-moz-transform';
        TransformEnum[TransformEnum['-o-transform'] = 2] = '-o-transform';
        TransformEnum[TransformEnum['-ms-transform'] = 3] = '-ms-transform';
    })(Q.TransformEnum || (Q.TransformEnum = {}));
    var TransformEnum = Q.TransformEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    (function (TransitionEnum) {
        TransitionEnum[TransitionEnum['-webkit-transition'] = 0] = '-webkit-transition';
        TransitionEnum[TransitionEnum['-moz-transition'] = 1] = '-moz-transition';
        TransitionEnum[TransitionEnum['-o-transition'] = 2] = '-o-transition';
        TransitionEnum[TransitionEnum['-ms-transition'] = 3] = '-ms-transition';
    })(Q.TransitionEnum || (Q.TransitionEnum = {}));
    var TransitionEnum = Q.TransitionEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Flip = (function () {
        function Flip(options) {
            this.options = options;
            this.$el = Q.FLIP_ELEMENT.getElement();
            this.resetPoint();

            this.itemSize = new Q.ItemSize(this.options);
            this.animator = new Q.Animator();

            this.setFlipView();
        }
        Flip.prototype.refresh = function () {
            this.resetPoint();
            this.transAnimation();
        };

        Flip.prototype.toNext = function () {
            if (this.hasNext()) {
                this.point = new Q.Point(this.getPoint() + 1);
            }
            this.transAnimation();
        };

        Flip.prototype.toPrev = function () {
            if (this.hasPrev()) {
                this.point = new Q.Point(this.getPoint() - 1);
            }
            this.transAnimation();
        };

        Flip.prototype.moveToPoint = function (point) {
            if (point < this.getMaxPoint()) {
                this.point = new Q.Point(point);
            }
            if (point >= this.getMaxPoint()) {
                this.point = new Q.Point(this.getMaxPoint() - 1);
            }
            this.transAnimation();
        };

        Flip.prototype.hasNext = function () {
            if (this.getPoint() < this.getMaxPoint() - 1) {
                return true;
            }
            return false;
        };

        Flip.prototype.hasPrev = function () {
            if (0 < this.getPoint() && this.getPoint() <= this.getMaxPoint() - 1) {
                return true;
            }
            return false;
        };

        Flip.prototype.getPoint = function () {
            return this.point.getPoint();
        };

        Flip.prototype.getMaxPoint = function () {
            return this.itemSize.getTotalLength();
        };

        Flip.prototype.resetPoint = function () {
            this.point = new Q.Point(0);
        };

        Flip.prototype.setFlipView = function () {
            this.$el.css({ width: this.itemSize.getTotalWidth().toString() + 'px' });
        };

        Flip.prototype.transAnimation = function () {
            this.animator.transAnimation(-(this.getPoint() * this.itemSize.getSoloWidth()));
        };
        return Flip;
    })();
    Q.Flip = Flip;
})(Q || (Q = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Q;
(function (Q) {
    var RichFlipFactory = (function (_super) {
        __extends(RichFlipFactory, _super);
        function RichFlipFactory(options) {
            _super.call(this, options);
            this.animationFlag = new Q.AnimationFlag();

            this.bindTouchEvents();
        }
        RichFlipFactory.prototype.bindTouchEvents = function () {
            this.touchstart();
            this.touchmove();
            this.touchend();
            this.touchcancel();
        };

        RichFlipFactory.prototype.touchstart = function () {
            var _this = this;
            this.$el.on('touchstart', function (event) {
                var fptouchstartEventCreator = new Q.TriggerEventCreator();

                var startPositionCreator = new Q.PositionCreator();
                _this.startPosition = startPositionCreator.createPosition(event);

                fptouchstartEventCreator.createEvent('fptouchstart');
            });
        };

        RichFlipFactory.prototype.touchmove = function () {
            var _this = this;
            this.animationFlag.disabled();

            var fptouchmoveEventCreator = new Q.TriggerEventCreator();

            this.$el.on('touchmove', function (event) {
                event.stopPropagation();

                if (!_this.animationFlag.checkStatus()) {
                    _this.traseDistance(event);
                }

                if (_this.animationFlag.checkStatus()) {
                    var moveDistanceHelper = new Q.MoveDistanceHelper(_this.startPosition.getX(), event);
                    var moveDistance = moveDistanceHelper.getMoveDistance();
                    _this.snapFitAnimation(moveDistance);
                    _this.delegateDistancePosition(event);
                }

                fptouchmoveEventCreator.createEvent('fptouchmove');
            });
        };

        RichFlipFactory.prototype.touchend = function () {
            var _this = this;
            this.$el.on('touchend', function (event) {
                var fptouchendEventCreator = new Q.TriggerEventCreator();

                if (_this.animationFlag.checkStatus()) {
                    _this.startAnimation();
                    fptouchendEventCreator.createEvent('fptouchend');
                }
                _this.animationFlag.disabled();
            });
        };

        RichFlipFactory.prototype.touchcancel = function () {
            this.$el.on('touchcancel', function (event) {
            });
        };

        RichFlipFactory.prototype.traseDistance = function (touchmoveEvent) {
            this.delegateDistancePosition(touchmoveEvent);
            if (Math.abs(this.distancePosition.getY()) < 10 && Math.abs(this.distancePosition.getX()) > 10) {
                event.preventDefault();
                this.animationFlag.enabled();
            }
        };

        RichFlipFactory.prototype.delegateDistancePosition = function (touchmoveEvent) {
            var touchmovePositionCreator = new Q.PositionCreator();
            var touchmovePosition = touchmovePositionCreator.createPosition(touchmoveEvent);

            var distancePositionCreator = new Q.DistancePositionCreator(touchmovePosition);
            this.distancePosition = distancePositionCreator.createPosition(this.startPosition);
        };

        RichFlipFactory.prototype.startAnimation = function () {
            if (this.distancePosition.getX() > 0) {
                this.toNext();
            }
            if (this.distancePosition.getX() < 0) {
                this.toPrev();
            }
        };

        RichFlipFactory.prototype.snapFitAnimation = function (moveDistance) {
            if (typeof moveDistance === "undefined") { moveDistance = 0; }
            this.animator.noTransAnimation(-((this.getPoint() * this.itemSize.getSoloWidth()) + moveDistance));
        };
        return RichFlipFactory;
    })(Q.Flip);
    Q.RichFlipFactory = RichFlipFactory;
})(Q || (Q = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Q;
(function (Q) {
    var SimpleFlipFactory = (function (_super) {
        __extends(SimpleFlipFactory, _super);
        function SimpleFlipFactory(options) {
            _super.call(this, options);
            this.animationFlag = new Q.AnimationFlag();
            this.$nameChecker = new Q.$NameChecker();

            this.bindTouchEvents();
        }
        SimpleFlipFactory.prototype.bindTouchEvents = function () {
            this.touchstart();
            this.touchmove();
            this.touchend();
            this.touchcancel();
        };

        SimpleFlipFactory.prototype.touchstart = function () {
            var _this = this;
            this.$el.on('touchstart', function (event) {
                var fpstarttouchEventCreator = new Q.TriggerEventCreator();
                var $name = _this.$nameChecker.get$Name();

                var startPositionCreator = new Q.PositionCreator();
                _this.startPosition = startPositionCreator.createPosition(event);

                fpstarttouchEventCreator.createEvent('fptouchstart');
            });
        };

        SimpleFlipFactory.prototype.touchmove = function () {
            var _this = this;
            this.animationFlag.disabled();

            var fptouchmoveEventCreator = new Q.TriggerEventCreator();
            var fptouchendEventCreator = new Q.TriggerEventCreator();

            this.$el.on('touchmove', function (event) {
                event.stopPropagation();

                if (!_this.animationFlag.checkStatus()) {
                    _this.traseDistance(event);

                    fptouchmoveEventCreator.createEvent('fptouchmove');

                    if (_this.animationFlag.checkStatus()) {
                        _this.startAnimation();

                        fptouchendEventCreator.createEvent('fptouchend');
                    }
                }
            });
        };

        SimpleFlipFactory.prototype.touchend = function () {
            var _this = this;
            this.$el.on('touchend', function (event) {
                _this.animationFlag.disabled();
            });
        };

        SimpleFlipFactory.prototype.touchcancel = function () {
            this.$el.on('touchcancel', function (event) {
            });
        };

        SimpleFlipFactory.prototype.traseDistance = function (touchmoveEvent) {
            var touchmovePositionCreator = new Q.PositionCreator();
            var touchmovePosition = touchmovePositionCreator.createPosition(touchmoveEvent);

            var distancePositionCreator = new Q.DistancePositionCreator(touchmovePosition);
            this.distancePosition = distancePositionCreator.createPosition(this.startPosition);

            if (Math.abs(this.distancePosition.getY()) < 10 && Math.abs(this.distancePosition.getX()) > 10) {
                event.preventDefault();
                this.animationFlag.enabled();
            }
        };

        SimpleFlipFactory.prototype.startAnimation = function () {
            if (this.distancePosition.getX() > 0) {
                this.toNext();
            }
            if (this.distancePosition.getX() < 0) {
                this.toPrev();
            }
        };
        return SimpleFlipFactory;
    })(Q.Flip);
    Q.SimpleFlipFactory = SimpleFlipFactory;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TriggerEventCreator = (function () {
        function TriggerEventCreator() {
        }
        TriggerEventCreator.prototype.createEvent = function (type) {
            var $el = Q.FLIP_ELEMENT.getElement();
            return $el.trigger($.Event(type));
        };
        return TriggerEventCreator;
    })();
    Q.TriggerEventCreator = TriggerEventCreator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var FlipCreator = (function () {
        function FlipCreator() {
        }
        FlipCreator.prototype.createFlip = function (options) {
            if (options.type.getType() === Q.FlipTypeEnum.Simple) {
                return new Q.SimpleFlipFactory(options);
            }
            if (options.type.getType() === Q.FlipTypeEnum.Rich) {
                return new Q.RichFlipFactory(options);
            }
        };
        return FlipCreator;
    })();
    Q.FlipCreator = FlipCreator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var FlipElementSingleton = (function () {
        function FlipElementSingleton() {
            if (FlipElementSingleton._instance) {
                throw console.log('Error: Instantiation failed');
            }
            FlipElementSingleton._instance = this;
        }
        FlipElementSingleton.getInstance = function () {
            if (FlipElementSingleton._instance === null) {
                FlipElementSingleton._instance = new FlipElementSingleton();
            }
            return FlipElementSingleton._instance;
        };

        FlipElementSingleton.prototype.setElement = function ($el) {
            this.$el = $el;
        };

        FlipElementSingleton.prototype.getElement = function () {
            return this.$el;
        };
        FlipElementSingleton._instance = null;
        return FlipElementSingleton;
    })();
    Q.FlipElementSingleton = FlipElementSingleton;

    Q.FLIP_ELEMENT = FlipElementSingleton.getInstance();
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Flipper = (function () {
        function Flipper(id, args) {
            if (typeof args === "undefined") { args = {
                type: 'simple',
                view: '.view',
                item: '.item'
            }; }
            var options = new Q.Options();

            options.createType((args.type) ? args.type : 'simple');
            options.createView((args.view) ? args.view : '.view');
            options.createItem((args.item) ? args.item : '.item');

            Q.FLIP_ELEMENT.setElement($(id));

            var flipCreator = new Q.FlipCreator();
            this.flip = flipCreator.createFlip(options);

            this.refresh();
        }
        Flipper.prototype.refresh = function () {
            this.flip.refresh();
        };

        Flipper.prototype.toNext = function () {
            this.flip.toNext();
        };

        Flipper.prototype.toPrev = function () {
            this.flip.toPrev();
        };

        Flipper.prototype.moveToPoint = function (point) {
            this.flip.moveToPoint(point);
        };

        Flipper.prototype.hasNext = function () {
            return this.flip.hasNext();
        };

        Flipper.prototype.hasPrev = function () {
            return this.flip.hasPrev();
        };

        Flipper.prototype.getPoint = function () {
            return this.flip.getPoint();
        };

        Flipper.prototype.getMaxPoint = function () {
            return this.flip.getMaxPoint();
        };

        Flipper.prototype.flipElement = function () {
            return Q.FLIP_ELEMENT.getElement();
        };
        return Flipper;
    })();
    Q.Flipper = Flipper;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var MoveDistanceHelper = (function () {
        function MoveDistanceHelper(startPositionX, touchmoveEvent) {
            this.startPositionX = startPositionX;
            this.touchmoveEvent = touchmoveEvent;
        }
        MoveDistanceHelper.prototype.getMoveDistance = function () {
            var $nameChecker = new Q.$NameChecker();
            var $name = $nameChecker.get$Name();

            if ($name === Q.$NameEnum.jQuery) {
                return this.startPositionX - this.touchmoveEvent.originalEvent.touches[0].clientX;
            }

            if ($name === Q.$NameEnum.Zepto) {
                return this.startPositionX - this.touchmoveEvent.changedTouches[0].clientX;
            }
        };
        return MoveDistanceHelper;
    })();
    Q.MoveDistanceHelper = MoveDistanceHelper;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Item = (function () {
        function Item(name) {
            this.name = name;
        }
        Item.prototype.getName = function () {
            return this.name;
        };
        return Item;
    })();
    Q.Item = Item;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Options = (function () {
        function Options() {
        }
        Options.prototype.createType = function (type) {
            this.type = new Q.Type(type);
        };

        Options.prototype.createView = function (view) {
            this.view = new Q.View(view);
        };

        Options.prototype.createItem = function (item) {
            this.item = new Q.Item(item);
        };
        return Options;
    })();
    Q.Options = Options;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Type = (function () {
        function Type(type) {
            if (typeof type === "undefined") { type = 'simple'; }
            if (type === 'simple') {
                this.type = Q.FlipTypeEnum.Simple;
            }
            if (type === 'rich') {
                this.type = Q.FlipTypeEnum.Rich;
            }
        }
        Type.prototype.getType = function () {
            return this.type;
        };
        return Type;
    })();
    Q.Type = Type;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var View = (function () {
        function View(name) {
            this.name = name;
        }
        View.prototype.getName = function () {
            return this.name;
        };
        return View;
    })();
    Q.View = View;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var PositionCreator = (function () {
        function PositionCreator() {
        }
        PositionCreator.prototype.createPosition = function (event) {
            var $nameChecker = new Q.$NameChecker();
            var $name = $nameChecker.get$Name();

            if ($name === Q.$NameEnum.jQuery) {
                return new Q.Position(event.originalEvent.touches[0].clientX, event.originalEvent.touches[0].clientY);
            }

            if ($name === Q.$NameEnum.Zepto) {
                return new Q.Position(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
            }
        };
        return PositionCreator;
    })();
    Q.PositionCreator = PositionCreator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var PrefixChecker = (function () {
        function PrefixChecker(checkList) {
            this.prefixEnum = Q.PrefixEnum;
            var _prefix;
            var _self = this;
            var _$el = Q.FLIP_ELEMENT.getElement();
            var $nameChecker = new Q.$NameChecker();
            var $name = $nameChecker.get$Name();

            $.each(checkList, function (val, key) {
                if ($name === Q.$NameEnum.jQuery) {
                    if (parseInt(key, 10) >= 0 && _$el.css(val) !== undefined) {
                        _prefix = _self.prefixEnum[key];
                    }
                }

                if ($name === Q.$NameEnum.Zepto) {
                    if (parseInt(key, 10) >= 0 && _$el.css(val) !== null) {
                        _prefix = _self.prefixEnum[key];
                    }
                }
            });

            this._prefix = _prefix;
        }
        PrefixChecker.prototype.getPrefix = function () {
            return this._prefix;
        };
        return PrefixChecker;
    })();
    Q.PrefixChecker = PrefixChecker;
})(Q || (Q = {}));
;/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */


;(function(undefined){
  if (String.prototype.trim === undefined) // fix for iOS 3.2
    String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g, '') }

  // For iOS 3.x
  // from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce
  if (Array.prototype.reduce === undefined)
    Array.prototype.reduce = function(fun){
      if(this === void 0 || this === null) throw new TypeError()
      var t = Object(this), len = t.length >>> 0, k = 0, accumulator
      if(typeof fun != 'function') throw new TypeError()
      if(len == 0 && arguments.length == 1) throw new TypeError()

      if(arguments.length >= 2)
       accumulator = arguments[1]
      else
        do{
          if(k in t){
            accumulator = t[k++]
            break
          }
          if(++k >= len) throw new TypeError()
        } while (true)

      while (k < len){
        if(k in t) accumulator = fun.call(undefined, accumulator, t[k], k, t)
        k++
      }
      return accumulator
    }

})()

var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    document = window.document,
    elementDisplay = {}, classCache = {},
    getComputedStyle = document.defaultView.getComputedStyle,
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    classSelectorRE = /^\.([\w-]+)$/,
    idSelectorRE = /^#([\w-]*)$/,
    tagSelectorRE = /^[\w-]+$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div')

  zepto.matches = function(element, selector) {
    if (!element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && obj.__proto__ == Object.prototype
  }
  function isArray(value) { return value instanceof Array }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
    if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
    if (!(name in containers)) name = '*'

    var nodes, dom, container = containers[name]
    container.innerHTML = '' + html
    dom = $.each(slice.call(container.childNodes), function(){
      container.removeChild(this)
    })
    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }
    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = $.fn
    dom.selector = selector || ''
    return dom
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, juts return it
    else if (zepto.isZ(selector)) return selector
    else {
      var dom
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes. If a plain object is given, duplicate it.
      else if (isObject(selector))
        dom = [isPlainObject(selector) ? $.extend({}, selector) : selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
      // create a new Zepto collection from the nodes found
      return zepto.Z(dom, selector)
    }
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found
    return (isDocument(element) && idSelectorRE.test(selector)) ?
      ( (found = element.getElementById(RegExp.$1)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
      slice.call(
        classSelectorRE.test(selector) ? element.getElementsByClassName(RegExp.$1) :
        tagSelectorRE.test(selector) ? element.getElementsByTagName(selector) :
        element.querySelectorAll(selector)
      )
  }

  function filtered(nodes, selector) {
    return selector === undefined ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = function(parent, node) {
    return parent !== node && parent.contains(node)
  }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className,
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    var num
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          !isNaN(num = Number(value)) ? num :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) { return str.trim() }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      if (readyRE.test(document.readyState)) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = null)
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return html === undefined ?
        (this.length > 0 ? this[0].innerHTML : null) :
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        })
    },
    text: function(text){
      return text === undefined ?
        (this.length > 0 ? this[0].textContent : null) :
        this.each(function(){ this.textContent = text })
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && value === undefined) ?
        (this.length == 0 || this[0].nodeType !== 1 ? undefined :
          (name == 'value' && this[0].nodeName == 'INPUT') ? this.val() :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && setAttribute(this, name) })
    },
    prop: function(name, value){
      return (value === undefined) ?
        (this[0] && this[0][name]) :
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        })
    },
    data: function(name, value){
      var data = this.attr('data-' + dasherize(name), value)
      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return (value === undefined) ?
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(o){ return this.selected }).pluck('value') :
           this[0].value)
        ) :
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        })
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (this.length==0) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2 && typeof property == 'string')
        return this[0] && (this[0].style[camelize(property)] || getComputedStyle(this[0], '').getPropertyValue(property))

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      return this.each(function(idx){
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(){
      if (!this.length) return
      return ('scrollTop' in this[0]) ? this[0].scrollTop : this[0].scrollY
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    $.fn[dimension] = function(value){
      var offset, el = this[0],
        Dimension = dimension.replace(/./, function(m){ return m[0].toUpperCase() })
      if (value === undefined) return isWindow(el) ? el['inner' + Dimension] :
        isDocument(el) ? el.documentElement['offset' + Dimension] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var key in node.childNodes) traverseNode(node.childNodes[key], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          traverseNode(parent.insertBefore(node, target), function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

window.Zepto = Zepto
'$' in window || (window.$ = Zepto)

;(function($){
  function detect(ua){
    var os = this.os = {}, browser = this.browser = {},
      webkit = ua.match(/WebKit\/([\d.]+)/),
      android = ua.match(/(Android)\s+([\d.]+)/),
      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
      touchpad = webos && ua.match(/TouchPad/),
      kindle = ua.match(/Kindle\/([\d.]+)/),
      silk = ua.match(/Silk\/([\d._]+)/),
      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
      bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
      rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
      playbook = ua.match(/PlayBook/),
      chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
      firefox = ua.match(/Firefox\/([\d.]+)/)

    // Todo: clean this up with a better OS/browser seperation:
    // - discern (more) between multiple browsers on android
    // - decide if kindle fire in silk mode is android or not
    // - Firefox on Android doesn't specify the Android version
    // - possibly devide in os, device and browser hashes

    if (browser.webkit = !!webkit) browser.version = webkit[1]

    if (android) os.android = true, os.version = android[2]
    if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
    if (webos) os.webos = true, os.version = webos[2]
    if (touchpad) os.touchpad = true
    if (blackberry) os.blackberry = true, os.version = blackberry[2]
    if (bb10) os.bb10 = true, os.version = bb10[2]
    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
    if (playbook) browser.playbook = true
    if (kindle) os.kindle = true, os.version = kindle[1]
    if (silk) browser.silk = true, browser.version = silk[1]
    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
    if (chrome) browser.chrome = true, browser.version = chrome[1]
    if (firefox) browser.firefox = true, browser.version = firefox[1]

    os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) || (firefox && ua.match(/Tablet/)))
    os.phone  = !!(!os.tablet && (android || iphone || webos || blackberry || bb10 ||
      (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/))))
  }

  detect.call($, navigator.userAgent)
  // make available to unit tests
  $.__detect = detect

})(Zepto)

;(function($){
  var $$ = $.zepto.qsa, handlers = {}, _zid = 1, specialEvents={},
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eachEvent(events, fn, iterator){
    if ($.type(events) != "string") $.each(events, iterator)
    else events.split(/\s/).forEach(function(type){ iterator(type, fn) })
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (handler.e == 'focus' || handler.e == 'blur') ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || type
  }

  function add(element, events, fn, selector, getDelegate, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    eachEvent(events, fn, function(event, fn){
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = getDelegate && getDelegate(fn, event)
      var callback  = handler.del || fn
      handler.proxy = function (e) {
        var result = callback.apply(element, [e].concat(e.data))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    eachEvent(events || '', fn, function(event, fn){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    if ($.isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (typeof context == 'string') {
      return $.proxy(fn[context], fn)
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, callback){
    return this.each(function(){
      add(this, event, callback)
    })
  }
  $.fn.unbind = function(event, callback){
    return this.each(function(){
      remove(this, event, callback)
    })
  }
  $.fn.one = function(event, callback){
    return this.each(function(i, element){
      add(this, event, callback, null, function(fn, type){
        return function(){
          var result = fn.apply(element, arguments)
          remove(element, type, fn)
          return result
        }
      })
    })
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }
  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    $.each(eventMethods, function(name, predicate) {
      proxy[name] = function(){
        this[predicate] = returnTrue
        return event[name].apply(event, arguments)
      }
      proxy[predicate] = returnFalse
    })
    return proxy
  }

  // emulates the 'defaultPrevented' property for browsers that have none
  function fix(event) {
    if (!('defaultPrevented' in event)) {
      event.defaultPrevented = false
      var prevent = event.preventDefault
      event.preventDefault = function() {
        this.defaultPrevented = true
        prevent.call(this)
      }
    }
  }

  $.fn.delegate = function(selector, event, callback){
    return this.each(function(i, element){
      add(element, event, callback, selector, function(fn){
        return function(e){
          var evt, match = $(e.target).closest(selector, element).get(0)
          if (match) {
            evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
            return fn.apply(match, [evt].concat([].slice.call(arguments, 1)))
          }
        }
      })
    })
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, callback){
    return !selector || $.isFunction(selector) ?
      this.bind(event, selector || callback) : this.delegate(selector, event, callback)
  }
  $.fn.off = function(event, selector, callback){
    return !selector || $.isFunction(selector) ?
      this.unbind(event, selector || callback) : this.undelegate(selector, event, callback)
  }

  $.fn.trigger = function(event, data){
    if (typeof event == 'string' || $.isPlainObject(event)) event = $.Event(event)
    fix(event)
    event.data = data
    return this.each(function(){
      // items in the collection might not be DOM elements
      // (todo: possibly support events on plain old objects)
      if('dispatchEvent' in this) this.dispatchEvent(event)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, data){
    var e, result
    this.each(function(i, element){
      e = createProxy(typeof event == 'string' ? $.Event(event) : event)
      e.data = data
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return callback ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  ;['focus', 'blur'].forEach(function(name) {
    $.fn[name] = function(callback) {
      if (callback) this.bind(name, callback)
      else this.each(function(){
        try { this[name]() }
        catch(e) {}
      })
      return this
    }
  })

  $.Event = function(type, props) {
    if (typeof type != 'string') props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true, null, null, null, null, null, null, null, null, null, null, null, null)
    event.isDefaultPrevented = function(){ return this.defaultPrevented }
    return event
  }

})(Zepto)

;(function($){
  var jsonpID = 0,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.defaultPrevented
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options){
    if (!('type' in options)) return $.ajax(options)

    var callbackName = 'jsonp' + (++jsonpID),
      script = document.createElement('script'),
      cleanup = function() {
        clearTimeout(abortTimeout)
        $(script).remove()
        delete window[callbackName]
      },
      abort = function(type){
        cleanup()
        // In case of manual abort or timeout, keep an empty function as callback
        // so that the SCRIPT tag that eventually loads won't result in an error.
        if (!type || type == 'timeout') window[callbackName] = empty
        ajaxError(null, type || 'abort', xhr, options)
      },
      xhr = { abort: abort }, abortTimeout

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return false
    }

    window[callbackName] = function(data){
      cleanup()
      ajaxSuccess(data, xhr, options)
    }

    script.onerror = function() { abort('error') }

    script.src = options.url.replace(/=\?/, '=' + callbackName)
    $('head').append(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    accepts: {
      script: 'text/javascript, application/javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true,
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data)
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {})
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) &&
      RegExp.$2 != window.location.host

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)
    if (settings.cache === false) settings.url = appendQuery(settings.url, '_=' + Date.now())

    var dataType = settings.dataType, hasPlaceholder = /=\?/.test(settings.url)
    if (dataType == 'jsonp' || hasPlaceholder) {
      if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?')
      return $.ajaxJSONP(settings)
    }

    var mime = settings.accepts[dataType],
        baseHeaders = { },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(), abortTimeout

    if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest'
    if (mime) {
      baseHeaders['Accept'] = mime
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      baseHeaders['Content-Type'] = (settings.contentType || 'application/x-www-form-urlencoded')
    settings.headers = $.extend(baseHeaders, settings.headers || {})

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty;
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings)
          else ajaxSuccess(result, xhr, settings)
        } else {
          ajaxError(null, xhr.status ? 'error' : 'abort', xhr, settings)
        }
      }
    }

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async)

    for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name])

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      return false
    }

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    var hasData = !$.isFunction(data)
    return {
      url:      url,
      data:     hasData  ? data : undefined,
      success:  !hasData ? data : $.isFunction(success) ? success : undefined,
      dataType: hasData  ? dataType || success : success
    }
  }

  $.get = function(url, data, success, dataType){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(url, data, success, dataType){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(url, data, success){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope : scope + '[' + (array ? '' : key) + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(k, v){ this.push(escape(k) + '=' + escape(v)) }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)

;(function ($) {
  $.fn.serializeArray = function () {
    var result = [], el
    $( Array.prototype.slice.call(this.get(0).elements) ).each(function () {
      el = $(this)
      var type = el.attr('type')
      if (this.nodeName.toLowerCase() != 'fieldset' &&
        !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
        ((type != 'radio' && type != 'checkbox') || this.checked))
        result.push({
          name: el.attr('name'),
          value: el.val()
        })
    })
    return result
  }

  $.fn.serialize = function () {
    var result = []
    this.serializeArray().forEach(function (elm) {
      result.push( encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value) )
    })
    return result.join('&')
  }

  $.fn.submit = function (callback) {
    if (callback) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.defaultPrevented) this.get(0).submit()
    }
    return this
  }

})(Zepto)

;(function($, undefined){
  var prefix = '', eventPrefix, endEventName, endAnimationName,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' },
    document = window.document, testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming,
    animationName, animationDuration, animationTiming,
    cssReset = {}

  function dasherize(str) { return downcase(str.replace(/([a-z])([A-Z])/, '$1-$2')) }
  function downcase(str) { return str.toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : downcase(name) }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + downcase(vendor) + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback){
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    return this.anim(properties, duration, ease, callback)
  }

  $.fn.anim = function(properties, duration, ease, callback){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd

    if (duration === undefined) duration = 0.4
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      }
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0) this.bind(endEvent, wrappedCallback)

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)
;var DEFAULT_SET;
(function (DEFAULT_SET) {
    function changeStylesheet(args) {
        var ua = navigator.userAgent;
        var head = document.getElementsByTagName('head')[0];
        var query = location.search;

        if (query.indexOf("sass") != -1) {
            args.path = args.path.replace("css/", "css_debug/");
        }

        for (var val in args.file) {
            var prefix = (args.pure) ? '' : this.uaTypeFactory(ua) + '_';
            document.write('<link rel="stylesheet" type="text/css" href="' + args.path + prefix + args.file[val] + '">');
        }
    }
    DEFAULT_SET.changeStylesheet = changeStylesheet;
})(DEFAULT_SET || (DEFAULT_SET = {}));
;var DEFAULT_SET;
(function (DEFAULT_SET) {
    function countdownTimer(nodeName, limitOptions, redzoneOptions, callback) {
        var $el = $(nodeName);
        var _callback = (callback) ? callback : function () {
        };

        var createTimerElement = function (hour, month, second, isRedzone) {
            var h1 = (hour < 10) ? '0' : hour.toString().charAt(0);
            var h2 = (hour > 9) ? hour.toString().charAt(1) : hour.toString().charAt(0);
            var m1 = (month < 10) ? '0' : month.toString().charAt(0);
            var m2 = (month > 9) ? month.toString().charAt(1) : month.toString().charAt(0);
            var s1 = (second < 10) ? '0' : second.toString().charAt(0);
            var s2 = (second > 9) ? second.toString().charAt(1) : second.toString().charAt(0);

            var normalHTML = function () {
                return '<span class="countdown-pos-h1 countdown-num-' + h1 + '"></span>' + '<span class="countdown-pos-h2 countdown-num-' + h2 + '"></span>' + '<span class="countdown-pos-m1 countdown-num-' + m1 + '"></span>' + '<span class="countdown-pos-m2 countdown-num-' + m2 + '"></span>' + '<span class="countdown-pos-s1 countdown-num-' + s1 + '"></span>' + '<span class="countdown-pos-s2 countdown-num-' + s2 + '"></span>' + '<span class="countdown-pos-c1 countdown-num-anime-1"></span>' + '<span class="countdown-pos-c2 countdown-num-anime-2"></span>';
            };

            var redzoneHTML = function () {
                return '<span class="countdown-pos-h1 countdown-num-' + h1 + ' bit-more"></span>' + '<span class="countdown-pos-h2 countdown-num-' + h2 + ' bit-more"></span>' + '<span class="countdown-pos-m1 countdown-num-' + m1 + ' bit-more"></span>' + '<span class="countdown-pos-m2 countdown-num-' + m2 + ' bit-more"></span>' + '<span class="countdown-pos-s1 countdown-num-' + s1 + ' bit-more"></span>' + '<span class="countdown-pos-s2 countdown-num-' + s2 + ' bit-more"></span>' + '<span class="countdown-pos-c1 countdown-num-anime-1 bit-more"></span>' + '<span class="countdown-pos-c2 countdown-num-anime-2 bit-more"></span>';
            };

            return (function () {
                if (isRedzone) {
                    return redzoneHTML();
                }
                return normalHTML();
            })();
        };

        var timer = 0;
        var setTimer = function () {
            timer = setInterval(function () {
                var endDate = new Date(limitOptions.year, (limitOptions.month - 1), limitOptions.day, limitOptions.hour, limitOptions.minute);
                var redDate = new Date(redzoneOptions.year, (redzoneOptions.month - 1), redzoneOptions.day, redzoneOptions.hour, redzoneOptions.minute);
                var startDate = new Date();

                var remaindDate = (function () {
                    return endDate - startDate;
                })();

                var redzoneDate = (function () {
                    return endDate - redDate;
                })();

                var getRemaindDay = function () {
                    return Math.floor(remaindDate / (24 * 60 * 60 * 1000));
                };

                var getRemaindHour = function () {
                    return Math.floor((remaindDate % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
                };

                var getRemaindMonth = function () {
                    return Math.floor(((remaindDate % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60);
                };

                var getRemaindSecond = function () {
                    return Math.floor((remaindDate % (24 * 60 * 60 * 1000) / 1000) % 60 % 60);
                };

                var getRemaindTotalHour = function () {
                    return (getRemaindDay() * 24) + getRemaindHour();
                };

                function isRedzone() {
                    if (remaindDate - redzoneDate < 0) {
                        return true;
                    }
                    return false;
                }

                if (remaindDate < 0) {
                    clearInterval(timer);
                    $el.html('<span class="countdown-pos-h1 countdown-num-0 bit-more"></span>' + '<span class="countdown-pos-h2 countdown-num-0 bit-more"></span>' + '<span class="countdown-pos-m1 countdown-num-0 bit-more"></span>' + '<span class="countdown-pos-m2 countdown-num-0 bit-more"></span>' + '<span class="countdown-pos-s1 countdown-num-0 bit-more"></span>' + '<span class="countdown-pos-s2 countdown-num-0 bit-more"></span>' + '<span class="countdown-pos-c1 countdown-num-mini-0 bit-more"></span>' + '<span class="countdown-pos-c2 countdown-num-mini-0 bit-more"></span>');
                    _callback();
                    return;
                }

                $el.html(createTimerElement(getRemaindTotalHour(), getRemaindMonth(), getRemaindSecond(), isRedzone()));
            }, 1000);
        };

        setTimer();
    }
    DEFAULT_SET.countdownTimer = countdownTimer;
})(DEFAULT_SET || (DEFAULT_SET = {}));
;var DEFAULT_SET;
(function (DEFAULT_SET) {
    function disableDummyAnchor() {
        var anc = document.getElementsByTagName("a"), ancVal;
        for (var i = 0, I = anc.length; i < I; i++) {
            ancVal = anc[i].getAttribute("href");
            if (ancVal == "#" || ancVal == "") {
                anc[i].addEventListener("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }, false);
            }
        }
    }
    DEFAULT_SET.disableDummyAnchor = disableDummyAnchor;

    disableDummyAnchor();
})(DEFAULT_SET || (DEFAULT_SET = {}));
;var DEFAULT_SET;
(function (DEFAULT_SET) {
    function loadQflipper(options) {
        var qflipperOptions = {
            type: (options.flipType) ? options.flipType : 'simple',
            view: (options.viewNode) ? options.viewNode : '#zflickjs',
            item: (options.itemNode) ? options.itemNode : '.zcol'
        };
        var _options = {
            lampTagName: (options.lampItemNodeTagName) ? options.lampItemNodeTagName : 'div',
            lampClassName: (options.lampItemNodeClassName) ? options.lampItemNodeClassName : 'lamp',
            lampCurClassName: (options.lampItemNodeCurClassName) ? options.lampItemNodeCurClassName : 'cur',
            buttonEvent: (options.buttonEvent) ? options.buttonEvent : false,
            $nextButton: (options.nextItemElmId) ? $(options.nextItemElmId) : $('#flipsnapNext'),
            $prevButton: (options.prevItemElmId) ? $(options.prevItemElmId) : $('#flipsnapPrev')
        };
        var flipElm = (options.flipNode) ? options.flipNode : '#zcontents';
        var qflipper = new Q.Flipper(flipElm, qflipperOptions);

        var lampElm = (options.lampNode) ? options.lampNode : '#zflickLamp';
        var $lampAreaElm = $(lampElm);

        var lampCenterPos = function () {
            var lampWidth = $lampAreaElm.width(), wrapWidth = 320, rtnWidth = Math.floor((wrapWidth / 2) - (lampWidth / 2));
            $lampAreaElm.css('left', rtnWidth + 'px');
        };

        var setLamp = function () {
            var _lamp_list_html = '';
            for (var i = 0; i < qflipper.getMaxPoint(); i++) {
                if (i === qflipper.getPoint()) {
                    _lamp_list_html += '<' + _options.lampTagName + ' class="' + _options.lampClassName + ' ' + _options.lampCurClassName + '"></' + _options.lampTagName + '>';
                } else {
                    _lamp_list_html += '<' + _options.lampTagName + ' class="' + _options.lampClassName + '"></' + _options.lampTagName + '>';
                }
            }

            $lampAreaElm.html(_lamp_list_html);
            lampCenterPos();
        };

        setLamp();

        var changeLamp = function () {
            var $lampElms = $('.' + _options.lampClassName, $lampAreaElm);
            $lampElms.removeClass(_options.lampCurClassName);
            $lampElms.eq(qflipper.getPoint()).addClass(_options.lampCurClassName);
        };

        var IntervalTimer = {
            flag: false,
            timer: 0,
            setIntervalTimer: function (timer) {
                this.timer = timer;
            },
            hasIntervalTimer: function () {
                return this.flag;
            },
            on: function () {
                this.flag = true;
            },
            off: function () {
                this.flag = false;
            }
        };

        var autoMove = function () {
            if (qflipper.hasNext()) {
                qflipper.toNext();
                changeLamp();
                return;
            }
            qflipper.refresh();
            changeLamp();
        };

        var startAutoChanger = function (msec) {
            if (!IntervalTimer.hasIntervalTimer()) {
                IntervalTimer.on();
                IntervalTimer.setIntervalTimer(setInterval(autoMove, msec));
            }
        };

        var stopAutoChanger = function () {
            if (IntervalTimer.hasIntervalTimer()) {
                IntervalTimer.off();
                clearInterval(IntervalTimer.timer);
            }
        };

        var loadButtonEvent = function () {
            if (_options.buttonEvent) {
                if (!qflipper.hasNext()) {
                    _options.$nextButton.hide();
                }
                if (!qflipper.hasPrev()) {
                    _options.$prevButton.hide();
                }
                if (qflipper.hasNext()) {
                    _options.$nextButton.show();
                }
                if (qflipper.hasPrev()) {
                    _options.$prevButton.show();
                }
            }
        };

        var autoChangerFlag = (options.autoChanger) ? options.autoChanger : false;
        var autoChangerMsec = (options.autoChanerMsec) ? autoChangerMsec : 4000;
        if (autoChangerFlag) {
            startAutoChanger(autoChangerMsec);
        }

        qflipper.flipElement().on('fptouchstart', function () {
            if (autoChangerFlag) {
                stopAutoChanger();
            }
        });

        qflipper.flipElement().on('fptouchmove', function () {
            if (autoChangerFlag) {
                stopAutoChanger();
            }
        });

        qflipper.flipElement().on('fptouchend', function () {
            if (autoChangerFlag) {
                stopAutoChanger();
                startAutoChanger(autoChangerMsec);
            }
            loadButtonEvent();
            changeLamp();
        });

        if (_options.buttonEvent) {
            _options.$nextButton.show();

            _options.$nextButton.on('click', function () {
                qflipper.toNext();
                changeLamp();

                _options.$prevButton.show();

                if (!qflipper.hasNext()) {
                    $(this).hide();
                }
            });

            _options.$prevButton.on('click', function () {
                qflipper.toPrev();
                changeLamp();

                _options.$nextButton.show();

                if (!qflipper.hasPrev()) {
                    $(this).hide();
                }
            });
        }
    }
    DEFAULT_SET.loadQflipper = loadQflipper;
})(DEFAULT_SET || (DEFAULT_SET = {}));
;var DEFAULT_SET;
(function (DEFAULT_SET) {
    function scrollFixed(args) {
        var elm = document.getElementById(args.id);
        var flag = false;
        var minWidth = (args.responsiveMinWidth) ? args.responsiveMinWidth : false;
        var adjustment = (args.adjustment) ? args.adjustment : false;

        function getScrollTop() {
            return document.documentElement.scrollTop || document.body.scrollTop;
        }

        function fixed() {
            elm.setAttribute('class', 'fixed');
            if (adjustment) {
                elm.parentNode['style'].height = adjustment + 'px';
                flag = true;
                return;
            }
            return null;
        }

        function normal() {
            elm.removeAttribute('class');
            if (adjustment) {
                elm.parentNode['style'] = '';
                flag = false;
                return;
            }
            return null;
        }

        function scrollFunc() {
            if (getScrollTop() > args.position && !flag && window.innerWidth > minWidth) {
                fixed();
                return;
            } else if (getScrollTop() < args.position && flag) {
                normal();
                return;
            } else if (window.innerWidth <= minWidth) {
                normal();
                return;
            }
            return null;
        }

        window.addEventListener('scroll', scrollFunc);
    }
    DEFAULT_SET.scrollFixed = scrollFixed;
})(DEFAULT_SET || (DEFAULT_SET = {}));
;var DEFAULT_SET;
(function (DEFAULT_SET) {
    function tapped(tap, tapped) {
        var elms = document.getElementsByClassName(tap);

        function changeFunc() {
            event.stopPropagation();
            var re = new RegExp(' ' + tapped + ' ');

            if (!re.test(this.className)) {
                this.className += ' ' + tapped + ' ';
                return;
            }
            offFunc();
        }

        function offFunc() {
            this.className = this.className.replace(tapped, '');
            return;
        }

        for (var i = 0, L = elms.length; i < L; i++) {
            var val = elms[i];
            val.addEventListener('touchstart', changeFunc, false);
            val.addEventListener('touchmove', offFunc, false);
            val.addEventListener('touchend', offFunc, false);
        }
    }
    DEFAULT_SET.tapped = tapped;
})(DEFAULT_SET || (DEFAULT_SET = {}));
;var DEFAULT_SET;
(function (DEFAULT_SET) {
    function toggle(args) {
        var d = document;
        var toggleEvent = d.getElementById(args.action);
        var toggleContentsArrayFlag = args.contents instanceof Array;
        var toggleContents;
        var flag = (args.visible) ? true : false;
        var eventType = (args.event_type === 'touch') ? 'tochstart' : 'click';
        var initCallback = (args.initCallback) ? args.initCallback : function () {
        };
        var toggleCallback = (args.toggleCallback) ? args.toggleCallback : function () {
        };

        function toggleContentsCheck() {
            if (toggleContentsArrayFlag) {
                toggleContents = [];
                for (var elm in args.contents) {
                    toggleContents.push(d.getElementById(elm));
                }
                return;
            }
            toggleContents = d.getElementById(args.contents);
            return;
        }

        function toggleFunc() {
            if (!flag) {
                if (!toggleContentsArrayFlag) {
                    if (toggleContents.className.indexOf(args.hideClass) < 0) {
                        toggleContents.className += (' ' + args.hideClass);
                    }
                    if (toggleContents.className.indexOf(args.showClass) > 0) {
                        toggleContents.className = toggleContents.className.replace(args.showClass, '');
                    }
                    return;
                }
                for (var elm in toggleContents) {
                    if (toggleContents[elm].className.indexOf(args.hideClass) < 0) {
                        toggleContents[elm].className += (' ' + args.hideClass);
                    }
                }
                for (var elm in toggleContents) {
                    if (toggleContents[elm].className.indexOf(args.showClass) > 0) {
                        toggleContents[elm].className = toggleContents[elm].className.replace(args.showClass, '');
                    }
                }
                return;
            }

            if (!toggleContentsArrayFlag) {
                if (toggleContents.className.indexOf(args.showClass) < 0) {
                    toggleContents.className += (' ' + args.showClass);
                }
                if (toggleContents.className.indexOf(args.hideClass) > 0) {
                    toggleContents.className = toggleContents.className.replace(args.hideClass, '');
                }
                return;
            }
            for (elm in toggleContents) {
                if (elm.className.indexOf(args.showClass) < 0) {
                    elm.className += (' ' + args.showClass);
                }
            }
            for (elm in toggleContents) {
                if (elm.className.indexOf(args.hideClass) > 0) {
                    elm.className = elm.className.replace(args.hideClass, '');
                }
            }
            return;
        }

        function eventFunc() {
            toggleEvent.addEventListener(eventType, function () {
                flag = (flag) ? false : true;
                toggleFunc();
                toggleCallback();
            }, false);
        }

        function init() {
            toggleContentsCheck();
            eventFunc();
            toggleFunc();
            initCallback();
        }

        init();
    }
    DEFAULT_SET.toggle = toggle;
})(DEFAULT_SET || (DEFAULT_SET = {}));
;var DEFAULT_SET;
(function (DEFAULT_SET) {
    function uaTypeFactory(ua) {
        if (ua.match(/AppleWebKit/)) {
            return 'webkit';
        } else if (ua.match(/Opera/)) {
            return 'o';
        } else if (ua.match(/Firefox/)) {
            return 'moz';
        } else if (ua.match(/Trident/)) {
            return 'ms';
        }

        return '';
    }
    DEFAULT_SET.uaTypeFactory = uaTypeFactory;
})(DEFAULT_SET || (DEFAULT_SET = {}));
