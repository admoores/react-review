"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextDisplay = function (_React$Component) {
  _inherits(TextDisplay, _React$Component);

  function TextDisplay(props) {
    _classCallCheck(this, TextDisplay);

    return _possibleConstructorReturn(this, (TextDisplay.__proto__ || Object.getPrototypeOf(TextDisplay)).call(this, props));
  }

  _createClass(TextDisplay, [{
    key: "render",
    value: function render() {
      if (this.props.display) {
        return React.createElement(
          "p",
          null,
          this.props.message
        );
      }
      return React.createElement("p", null);
    }
  }]);

  return TextDisplay;
}(React.Component);

window.TextDisplay = TextDisplay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RleHREaXNwbGF5LmpzeCJdLCJuYW1lcyI6WyJUZXh0RGlzcGxheSIsInByb3BzIiwiZGlzcGxheSIsIm1lc3NhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFIQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsVUFBSSxLQUFLQSxLQUFMLENBQVdDLE9BQWYsRUFBd0I7QUFDdEIsZUFBUTtBQUFBO0FBQUE7QUFBSSxlQUFLRCxLQUFMLENBQVdFO0FBQWYsU0FBUjtBQUNEO0FBQ0QsYUFBUSw4QkFBUjtBQUNEOzs7O0VBVnVCQyxNQUFNQyxTOztBQWNoQ0MsT0FBT04sV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoidGV4dERpc3BsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUZXh0RGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzcGxheSkge1xuICAgICAgcmV0dXJuICg8cD57dGhpcy5wcm9wcy5tZXNzYWdlfTwvcD4pO1xuICAgIH1cbiAgICByZXR1cm4gKDxwPjwvcD4pO1xuICB9XG59XG5cblxud2luZG93LlRleHREaXNwbGF5ID0gVGV4dERpc3BsYXk7Il19