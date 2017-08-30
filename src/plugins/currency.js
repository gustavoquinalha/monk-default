module.exports = {
  install: function (Vue, options) {

//    Object.defineProperties(Vue.prototype, {
//      $moment: {
//        get: function() {
//          return Vue.moment.bind(this);
//        },
//      },
//    });


//    Vue.currency = function(data) {
//      return moment(data);
//    }

    Vue.filter('currency', function (n, x, s, c) {
//      var args = Array.prototype.slice.call(arguments);
//
//
//      return args[0].toLocaleString()
    });
  },
};
