var para = (function () {
  var bg = document.querySelector('.hero__image');
    var user = document.querySelector('.hero__user');
    var head = document.querySelector('.hero__head');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var style = block.style;
            style.top = strafe;
        },

        init: function(wScroll) {
          this.move(bg, wScroll, 45);
        }
        // init: function(wScroll) {
        //   this.move(head, wScroll, 75);
        // };
        // init: function(wScroll) {
        //   this.move(user, wScroll, 105);
        // };
    }

}());

window.onscroll = function () {
  var wScroll = window.pageYOffset;
  
  para.init(wScroll);
  // console.log(wScroll);

}