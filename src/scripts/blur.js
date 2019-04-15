var blur = (function () {

  var wrapper = document.querySelector('.blur__form-wrapper'),
    form = document.querySelector('.blur__form');

    return {
      set: function() {
        var imgW = document.querySelector('.blur__bg').offsetHeight,
        posL = -wrapper.offsetLeft,
        posT =  -wrapper.offsetTop,
        blurCss = form.style;
        console.log(imgW);
        blurCss.backgroundSize = 'auto' + ' ' + imgW + 'px';
        blurCss.backgroundPosition = posL + 'px' + ' ' + posT + 'px';
        console.log(posL);
        console.log(posT);

      }
    }

}());

blur.set();

window.onresize = function() {
  blur.set();
}