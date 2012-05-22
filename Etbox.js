/**
 * JQuery Plugin for a tbox
 * It will make you a popup box with all HTML and styling
 * Author: tareq jobayere
 * URL: http://tarex.name
 * 
 */

(function($){
          $.fn.Etbox=function(tx)
            {
            var options=$.extend({
            height : "450",
			width : "450",
			title:"Extended T-Box",
			description: "<div id='Flashplayer'></div><script type='text/javascript'>var so = new SWFObject('video_player.swf', 'swfplayer', '400', '327', '9', '#000000'); so.addVariable('flv', 'video.flv'); so.addVariable('jpg','imagen.jpg'); so.addVariable('autoplay','false'); so.addParam('allowFullScreen','true'); so.write('Flashplayer'); </script>simply dummy text of the printing and typesetting industry. </div>",
			top: "20%",
			left: "30%",
               },tx);
            return this.click(function(e){
                 start_blocking();
                 start_txxbox();
                 start_style();
                  $('.tx_box').fadeIn();
               });
         function start_style(){
                           $('.tx_box').css({
                                'position':'absolute', 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'0px solid #000',
				'box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow':'inset 1px 1px 4px 1px #000',
                                '-moz-box-shadow':'inset 1px 1px 4px 1px #000',
                                 'box-shadow':'inset 1px 1px 4px 1px #000',
				'border-radius':'6px',
				'-moz-border-radius':'6px',
				'-webkit-border-radius':'6px',
				'background': '#fff', 
				'z-index':'50',
                         });
                        $('.tx_clear').css({
                        'position':'relative',
				'top':'-20px',
				'left':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'background': 'url(close.png) no-repeat',
                           });
                           $('.tblock').css({
                           'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':'100%',
				'width':'100%',
				'z-index':'10'
                          });
                          $('.tx_inbox').css({
                          'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'10px',
				'margin':'15px',
                          });
                     }
  function start_blocking(){
          var block=$('<div class="tblock"></div>');
                $(block).appendTo('body');
         }
          function start_txxbox()
         { 
              var pop=$('<div class="tx_box"><a href="#" class="tx_clear"></a><div class="tx_inbox"><h2>'+options.title +'</h2> <p>'+options.description+'</p> </div></div>');
                $(pop).appendTo('.tblock');
           $('.tx_clear').click(function(){
                 $(this).parent().fadeOut().remove();
                $('.tblock').fadeOut().remove();
            });
          }
  return this;
};
})(jQuery);
