'use strict';

function getSliderImagesStartingAt(firstImage) {
  var sliderImages = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 1; i < firstImage; i++) {
    sliderImages.push(sliderImages.shift());
  }
  return sliderImages;
}

module.exports = function() {
  return [
    {
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
        reply.view('index', {page:'index', sliderImages: getSliderImagesStartingAt(1)});
      }
    },
    {
      method: 'GET',
      path: '/index',
      handler: function(request, reply) {
        reply.view('index', {page:'index', sliderImages: getSliderImagesStartingAt(1)});
      }
    },
    {
      method: 'GET',
      path: '/eyfs',
      handler: function(request, reply) {
        reply.view('eyfs', {page:'eyfs', sliderImages: getSliderImagesStartingAt(2)});
      }
    },
    {
      method: 'GET',
      path: '/policies',
      handler: function(request, reply) {
        reply.view('policies', {page:'policies', sliderImages: getSliderImagesStartingAt(3)});
      }
    },
    {
      method: 'GET',
      path: '/timesfees',
      handler: function (request, reply) {
        reply.view('timesfees', {page: 'timesfees', sliderImages: getSliderImagesStartingAt(4)});
      }
    },
    {
      method: 'GET',
      path: '/misc',
      handler: function(request, reply) {
        reply.view('misc', {page:'misc', sliderImages: getSliderImagesStartingAt(5)});
      }
    },
    {
      method: 'GET',
      path: '/gallery',
      handler: function(request, reply) {
        reply.view('gallery', {page:'gallery', sliderImages: getSliderImagesStartingAt(6)});
      }
    },
    {
      method: 'GET',
      path: '/contacts',
      handler: function(request, reply) {
        reply.view('contacts', {page:'contacts', sliderImages: getSliderImagesStartingAt(7)});
      }
    }
  ];
}();
