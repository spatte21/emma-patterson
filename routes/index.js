var express = require('express');
var router = express.Router();

function getSliderImagesStartingAt(firstImage) {
  var sliderImages = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 1; i < firstImage; i++) {
    sliderImages.push(sliderImages.shift());
  }
  return sliderImages;
}

/* GET home */
router.get('/', function(req, res) {
  res.render('index', {page:'index', sliderImages: getSliderImagesStartingAt(1)});
});

/* GET home */
router.get('/index', function(req, res) {
  res.render('index', {page:'index', sliderImages: getSliderImagesStartingAt(1)});
});

/* GET eyfs */
router.get('/eyfs', function(req, res) {
  res.render('eyfs', {page:'eyfs', sliderImages: getSliderImagesStartingAt(2)});
});

/* GET policies */
router.get('/policies', function(req, res) {
  res.render('policies', {page:'policies', sliderImages: getSliderImagesStartingAt(3)});
});

/* GET timesfees */
router.get('/timesfees', function(req, res) {
  res.render('timesfees', {page:'timesfees', sliderImages: getSliderImagesStartingAt(4)});
});

/* GET misc */
router.get('/misc', function(req, res) {
  res.render('misc', {page:'misc', sliderImages: getSliderImagesStartingAt(5)});
});

/* GET gallery */
router.get('/gallery', function(req, res) {
  res.render('gallery', {page:'gallery', sliderImages: getSliderImagesStartingAt(6)});
});

/* GET contacts */
router.get('/contacts', function(req, res) {
  res.render('contacts', {page:'contacts', sliderImages: getSliderImagesStartingAt(7)});
});

module.exports = router;
