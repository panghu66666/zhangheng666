"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Magnifier =
/*#__PURE__*/
function () {
  function Magnifier(newSmallBox, newBigBox, newMask) {
    _classCallCheck(this, Magnifier);

    this.smallBox = newSmallBox;
    this.bigBox = newBigBox;
    this.mask = newMask;
  } //鼠标划上：


  _createClass(Magnifier, [{
    key: "onmouseover",
    value: function onmouseover() {
      var tHat = this; //定义中间变量

      this.smallBox.onmouseover = function () {
        tHat.bigBox.style.display = "block";
        tHat.mask.style.display = "block";
      };
    } //鼠标离开：

  }, {
    key: "onmouseout",
    value: function onmouseout() {
      var tHat = this;

      this.smallBox.onmouseout = function () {
        tHat.bigBox.style.display = "none";
        tHat.mask.style.display = "none";
      };
    } //鼠标移动：

  }, {
    key: "onmousemove",
    value: function onmousemove() {
      var tHat = this;

      this.smallBox.onmousemove = function (evt) {
        var e = evt || event; //tHat可以换成this			 tHat不能换成this

        var Left = e.pageX - tHat.smallBox.offsetLeft - tHat.mask.offsetWidth / 2;
        var Top = e.pageY - tHat.smallBox.offsetTop - tHat.mask.offsetHeight / 2; //临界问题：

        if (Left < 0) {
          Left = 0;
        }

        var maxLeft = tHat.smallBox.offsetWidth - tHat.mask.offsetWidth;

        if (Left > maxLeft) {
          Left = maxLeft;
        }

        if (Top < 0) {
          Top = 0;
        }

        var maxTop = tHat.smallBox.offsetHeight - tHat.mask.offsetHeight;

        if (Top > maxTop) {
          Top = maxTop;
        }

        tHat.mask.style.left = Left + "px";
        tHat.mask.style.top = Top + "px";
        var x = tHat.bigBox.offsetWidth * Left / tHat.mask.offsetWidth;
        var y = tHat.bigBox.offsetHeight * Top / tHat.mask.offsetHeight;
        tHat.bigBox.style.backgroundPositionX = -x + "px";
        tHat.bigBox.style.backgroundPositionY = -y + "px";
      };
    }
  }, {
    key: "eventBind",
    value: function eventBind() {
      this.onmouseover();
      this.onmouseout();
      this.onmousemove();
    }
  }]);

  return Magnifier;
}();