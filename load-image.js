/**
 * Developed by Guilherme Cabrini da Silva
 * Created: 07/10/13 - 18:08
 * Load Image is a plugin responsible for loading the images according to the movement of the scroll.
 */

(function(win, doc) {

    var loadApp = {
        classSelector: 'load-image'
        ,index: 0

        ,init: function(){
            "use strict"; // JSLINT
            var images;

            images = doc.getElementsByClassName(this.classSelector);

            win.onscroll = function(){
                loadApp.showImage(images);
            }

            loadApp.showImage(images);
        }

        ,showImage: function(images){
            "use strict"; // JSLINT

            if(images.length !== this.index) {

                var imgPosTop
                    ,windowPosTop
                    ,windowHeight;

                imgPosTop    = images[this.index].offsetTop ? images[this.index].offsetTop : 0;
                windowPosTop = win.pageYOffset;
                windowHeight = win.innerHeight;

                var isVisible = imgPosTop - windowPosTop < windowHeight;

                if (isVisible) {
                    var attrSrc;

                    if(attrSrc = images[this.index].getAttribute('data-src')) {
                        images[this.index].setAttribute('src', attrSrc);
                        images.item(this.index).removeAttribute('data-src');

                        this.index++;
                    }
                }
            }
        }
    }

    loadApp.init();

})(window, document);