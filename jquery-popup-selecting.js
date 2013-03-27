/*

[jquery popup selecting]
ver    :  1.0.0
author :  Andriy Sokolovskiy (sokandpal@yandex.ru)

*/
(function($) {
    "use strict";
    var methods = {
        init: function(userOptions) {
            var that = $.that;

            var settings = $.extend({
                showKey     : 32,
                leftKey     : 37,
                rightKey    : 39,
                activateKey : 13,
                speed       : 200,
                doActivate  : undefined,
                useShowKey  : false
            }, userOptions);

            var selectedNum = 0;
            var childCount  = that.children().length;

            // move function
            var elementMove = function(direct) {
                switch (direct) {
                    case 'right':
                        selectedNum += 1;
                        break;
                    case 'left':
                        selectedNum -= 1;
                        break;
                }
                if (childCount === selectedNum) {
                    selectedNum = childCount - 1;
                }
                if (selectedNum < 0) {
                    selectedNum = 0;
                }              
                that.children().removeClass('selected').each(function(i,e) {
                    if(i === selectedNum) {
                        $(e).addClass('selected');
                    }
                });
            };

            // first selected as default
            that.children(":first").addClass('selected');

            // selecting by mouse
            that.children().each(function(i,e) {
                $(e).on('mouseover', function() {
                    that.children().removeClass('selected');
                    $(e).addClass('selected');
                    selectedNum = i;
                });
                $(e).click(function() {
                    if(typeof settings.doActivate !== "undefined") {
                        settings.doActivate();
                    }
                });
            });

            // selecting by keyboard
            $(document).on('keyup', function(e) {
                var isVisible = that.is(":visible");
                switch (e.which) {
                    case settings.showKey:
                        if (settings.useShowKey) {
                            if (!isVisible) {
                                that.show(settings.speed);
                            }
                            else {
                                that.hide(settings.speed);
                            }
                        }
                        break;
                    case settings.rightKey:
                        if (isVisible) {
                            elementMove('right');
                        }
                        break;
                    case settings.leftKey:
                        if (isVisible) {
                            elementMove('left');
                        }
                        break;
                    case settings.activateKey:
                        if (isVisible) {
                            if (typeof settings.doActivate !== "undefined") {
                                settings.doActivate();
                            }
                        }
                        break;
                }
            });
        }
    };

    $.fn.popselect = function(method) {
        $.that = this;

        // method calling logic

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments,1));
        }
        else if(typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error( 'Can not find method ' +  method);
        }

    };
})(jQuery);
