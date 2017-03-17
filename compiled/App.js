'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      display: true,
      message: _this.repeatWord()
    };
    return _this;
  }

  _createClass(App, [{
    key: 'repeatWord',
    value: function repeatWord() {
      var message = '';
      for (var i = 0; i < this.props.number; i++) {
        message += this.props.word + '\n';
      }
      return message;
    }
  }, {
    key: 'toggleDisplay',
    value: function toggleDisplay() {
      var temp = !this.state.display;
      this.setState({
        display: temp
      });
    }
  }, {
    key: 'display',
    value: function display() {
      if (this.state.display) {
        return this.state.message;
      } else {
        return '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { onClick: this.toggleDisplay.bind(this) },
          'Switch Display'
        ),
        React.createElement(
          'div',
          null,
          React.createElement(TextDisplay, { message: this.state.message, display: this.state.display })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImRpc3BsYXkiLCJtZXNzYWdlIiwicmVwZWF0V29yZCIsImkiLCJudW1iZXIiLCJ3b3JkIiwidGVtcCIsInNldFN0YXRlIiwidG9nZ2xlRGlzcGxheSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLElBREU7QUFFWEMsZUFBUyxNQUFLQyxVQUFMO0FBRkUsS0FBYjtBQUZpQjtBQU1sQjs7OztpQ0FFWTtBQUNYLFVBQUlELFVBQVUsRUFBZDtBQUNBLFdBQUksSUFBSUUsSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS0wsS0FBTCxDQUFXTSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekNGLG1CQUFXLEtBQUtILEtBQUwsQ0FBV08sSUFBWCxHQUFrQixJQUE3QjtBQUNEO0FBQ0QsYUFBT0osT0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJSyxPQUFPLENBQUMsS0FBS1AsS0FBTCxDQUFXQyxPQUF2QjtBQUNBLFdBQUtPLFFBQUwsQ0FBYztBQUNaUCxpQkFBU007QUFERyxPQUFkO0FBR0Q7Ozs4QkFFUztBQUNSLFVBQUksS0FBS1AsS0FBTCxDQUFXQyxPQUFmLEVBQXdCO0FBQ3RCLGVBQU8sS0FBS0QsS0FBTCxDQUFXRSxPQUFsQjtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sRUFBUDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsU0FBVyxLQUFLTyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFkO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsV0FBRCxJQUFhLFNBQVMsS0FBS1YsS0FBTCxDQUFXRSxPQUFqQyxFQUEwQyxTQUFTLEtBQUtGLEtBQUwsQ0FBV0MsT0FBOUQ7QUFERjtBQUZGLE9BREY7QUFRRDs7OztFQXpDZVUsTUFBTUMsUzs7QUE2Q3hCQyxPQUFPZixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICBtZXNzYWdlOiB0aGlzLnJlcGVhdFdvcmQoKVxuICAgIH07XG4gIH1cblxuICByZXBlYXRXb3JkKCkge1xuICAgIHZhciBtZXNzYWdlID0gJyc7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMubnVtYmVyOyBpKyspIHtcbiAgICAgIG1lc3NhZ2UgKz0gdGhpcy5wcm9wcy53b3JkICsgJ1xcbic7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB2YXIgdGVtcCA9ICF0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiB0ZW1wXG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpc3BsYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIG9uQ2xpY2sgPSB7dGhpcy50b2dnbGVEaXNwbGF5LmJpbmQodGhpcyl9PlN3aXRjaCBEaXNwbGF5PC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUZXh0RGlzcGxheSBtZXNzYWdlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==