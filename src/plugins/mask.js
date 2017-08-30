exports.default = function(Vue) {
  Vue.directive('mask', {
    bind: function bind(el, _ref) {
      var value = _ref.value;
      updateMask(el.querySelector('input'), value);
      updateValue(el.querySelector('input'));
    },
    componentUpdated: function componentUpdated(el, _ref2) {
      var value = _ref2.value,
          oldValue = _ref2.oldValue;
      var isMaskChanged = value !== oldValue;
      if (isMaskChanged) {
        updateMask(el.querySelector('input'), value);
      }
      updateValue(el.querySelector('input'), isMaskChanged);
    }
  });
};
