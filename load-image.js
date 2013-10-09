/**
 * Developed by Guilherme Cabrini da Silva
 * Created: 07/10/13 - 18:08
 * Load Image is a plugin responsible for loading the images according to the movement of the scroll.
 */

(function(win, doc) {
    // Só é preciso declarar uma vez já está encapsulado na função autoexecultável
    "use strict"; // JSLINT
    var loadApp = {
        classSelector: 'load-image',
        index: 0,

        init: function(){
            var images = doc.getElementsByClassName(this.classSelector);
            console.log(images);
            win.onscroll = function(){
                loadApp.showImage(images);
            };

            loadApp.showImage(images);
        },

        showImage: function(images) {

            if(images.length !== this.index) {

                var imgPosTop = images[this.index].offsetTop ? images[this.index].offsetTop : 0,
                    windowPosTop = win.pageYOffset,
                    windowHeight = win.innerHeight,
                    // Colocadas aqui por problemas de hoistings (hasteamento)
                    attrSrc = images[this.index].getAttribute('data-src'),
                    isVisible = imgPosTop - windowPosTop < windowHeight;
                    console.log(isVisible);
                if (isVisible) {
                    images[this.index].setAttribute('src', attrSrc);
                    images.item(this.index).removeAttribute('data-src');

                    this.index++;
                }
            }
        }
    };

    loadApp.init();

})(window, document);