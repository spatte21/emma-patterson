'use strict';

module.exports = function() {
  return [
    {
      method: 'GET',
      path: '/css/{path*}',
      handler: {
        directory: {
          path: './public/css',
          listing: false,
          index: false
        }
      }
    },
    {
      method: 'GET',
      path: '/img/{path*}',
      handler: {
        directory: {
          path: './public/img',
          listing: false,
          index: false
        }
      }
    },
    {
      method: 'GET',
      path: '/js/{path*}',
      handler: {
        directory: {
          path: './public/js',
          listing: false,
          index: false
        }
      }
    }
  ];
}();
