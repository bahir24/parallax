var para = (function () {
<<<<<<< HEAD
  var bg = document.querySelector('.hero__image');
=======
    var bg = document.querySelector('.hero__image');
>>>>>>> 9a6246070a2763edc5e0f1f5bda3d74ddf5ab218
    var user = document.querySelector('.hero__user');
    var head = document.querySelector('.hero__head');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var trString = 'translate3d(0, '+ strafe +', 0)';


            // var strafe2 = strafe1 + '%';
            // var strafe3 = strafe1 / 2 + '%';
            // var trString = 'translate3d('+ strafe3 +', '+ strafe2 +', 0)';

            var style = block.style;

            style.transform = trString;
            style.webkittransform = trString;
            // style.top = strafe;
        },

        init: function(wScroll) {
          this.move(bg, wScroll, 45);
          this.move(user, wScroll, 10);
          this.move(head, wScroll, 30);
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
<<<<<<< HEAD
  // console.log(wScroll);
=======
>>>>>>> 9a6246070a2763edc5e0f1f5bda3d74ddf5ab218

}