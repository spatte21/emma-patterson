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
        reply.view('index', {page:'Home', sliderImages: getSliderImagesStartingAt(1)});
      }
    },
    {
      method: 'GET',
      path: '/index',
      handler: function(request, reply) {
        reply.view('index', {page:'Home', sliderImages: getSliderImagesStartingAt(1)});
      }
    },
    {
      method: 'GET',
      path: '/eyfs',
      handler: function(request, reply) {
        reply.view('eyfs', {page:'EYFS', sliderImages: getSliderImagesStartingAt(2)});
      }
    },
    {
      method: 'GET',
      path: '/policies',
      handler: function(request, reply) {
        reply.view('policies', {page:'Policies', sliderImages: getSliderImagesStartingAt(3)});
      }
    },
    {
      method: 'GET',
      path: '/timesfees',
      handler: function (request, reply) {
        reply.view('timesfees', {page: 'Times/Fees', sliderImages: getSliderImagesStartingAt(4)});
      }
    },
    {
      method: 'GET',
      path: '/misc',
      handler: function(request, reply) {
        reply.view('misc', {page:'Misc.', sliderImages: getSliderImagesStartingAt(5)});
      }
    },
    {
      method: 'GET',
      path: '/gallery',
      handler: function(request, reply) {
        reply.view('gallery', {page:'Gallery', sliderImages: getSliderImagesStartingAt(6)});
      }
    },
    {
      method: 'GET',
      path: '/contacts',
      handler: function(request, reply) {
        reply.view('contacts', {page:'Contacts', sliderImages: getSliderImagesStartingAt(7)});
      }
    }
  ];
}();
