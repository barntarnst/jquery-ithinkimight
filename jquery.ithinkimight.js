        /**
        *
        *  I Think I Might Organize - jQuery Plugin 
        *  by Bärnt & Ärnst
        *  github.com/barntarnst
        *
        *  Simply
        *       
        *  $("#my_container").ithinkimight(".my_elements", max_width, min_width); 
        *  
        *  to arrange all elements with class my_elements 
        *
        *   
        *  Todo:
        *  - Check if "float: left"  and "clear: left" are set, if not set them!
        *  - Simplify setup (shouldn't need extra container element)
        *  -  
        *
        **/
        (function($) {
          $.fn.ithinkimight = function(class_name, content_class_name, max_width, min_width, overlap, way, rand, marginleft, self, zindex, obj) {
            if(typeof class_name === 'undefined') { class_name = 'post'; }
            if(typeof content_class_name === 'undefined') { content_class_name = class_name; }
            if(typeof max_width === 'undefined') { max_width = 410; }
            if(typeof min_width === 'undefined') { min_width = 220; }
            if(typeof overlap === 'undefined') { overlap = 0.9; }
            obj = this;
            obj.zindex = 1;
            obj.getzindex = function() 
            {
                obj.zindex++;
                if(obj.zindex>499) {
                    $(this).children('.'+class_name).css("z-index", "0");
                    obj.zindex = 9;
                }
                return obj.zindex;
            }
            return this.each(function() {
                rand = 0;
                way = -1;
                self = $(this);
                $(this).children('.'+class_name).each(function() {
                    $(this).css('position', 'relative');
                    $(this).css('left', '50%');
                    $(this).css('float', 'left');
                    $(this).css('clear', 'both');
                    rand = Math.random()*(max_width-min_width) + min_width;
                    if(rand != 0) {
                        $(this).css('margin-top', (-1 * Math.random() * (rand*overlap)) + 'px' );
                    }
                    marginleft = Math.random()*($(self).width()/2-rand/2-75) + 75;
                    way = -1*way;
                    marginleft = way * marginleft;
                    marginleft = -(rand+80)/2 + marginleft;
                    $(this).css('margin-left', marginleft + 'px' );
                    if($(this).children('.'+content_class_name).children('img').length==0) {
                        $(this).width(rand); 
                    } else {
                        $(this).children('.'+content_class_name).children('img').height(rand);
                        $(this).height(rand);
                        $(this).width(rand);
                    }

                    $(this).mouseover(function() {
                        if($(this).css("z-index") != obj.zindex) {
                            $(this).css("z-index", obj.getzindex());
                        }
                    }); 
                });
            });
          };
        })(jQuery);