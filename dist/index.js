"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var utility = exports.utility = {
  /*******************************
  function getDoc(page): 
  目的 : 抓出文件的高度，寬度。用來設定照相的高，寬。
  *******************************/
  getDoc: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page) {
      var doc;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return page.evaluate(function () {
                return {
                  width: document.body.clientWidth,
                  height: document.body.clientHeight
                };
              });

            case 2:
              doc = _context.sent;
              return _context.abrupt("return", doc);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getDoc(_x) {
      return _ref.apply(this, arguments);
    }

    return getDoc;
  }(),
  /*******************************
  function capture(page)
  目的 : 照相  
  *******************************/
  capture: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(page) {
      var doc, img;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.getDoc(page);

            case 2:
              doc = _context2.sent;
              _context2.next = 5;
              return page.setViewport({ width: doc.width, height: doc.height });

            case 5:
              _context2.next = 7;
              return page.screenshot({
                clip: { x: 0, y: 0, width: doc.width, height: doc.height }
              });

            case 7:
              img = _context2.sent;
              return _context2.abrupt("return", img);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function capture(_x2) {
      return _ref2.apply(this, arguments);
    }

    return capture;
  }()
};
