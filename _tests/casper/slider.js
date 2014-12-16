var site = casper.cli.get('site');

describe('Slider behaviour', function() {

  it('Image 1 should be the initial image on the Home page', function() {
    casper.start(site, function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-1.jpg');
    });
  });

  it('The slider should cycle to the next image after 10 seconds', function() {
    casper.start(site);
    casper.wait(10000, function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-2.jpg');
    });
  });

  it('Image 2 should be the initial image on the EYFS page', function() {
    casper.start(site + '/eyfs', function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-2.jpg');
    });
  });

  it('Image 3 should be the initial image on the Policies page', function() {
    casper.start(site + '/policies', function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-3.jpg');
    });
  });

  it('Image 4 should be the initial image on the Times/Fees page', function() {
    casper.start(site + '/timesfees', function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-4.jpg');
    });
  });

  it('Image 5 should be the initial image on the Misc. page', function() {
    casper.start(site + '/misc', function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-5.jpg');
    });
  });

  it('Image 6 should be the initial image on the Gallery page', function() {
    casper.start(site + '/gallery', function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-6.jpg');
    });
  });

  it('Image 7 should be the initial image on the Contacts page', function() {
    casper.start(site + '/contacts', function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-7.jpg');
    });
  });

  it('Clicking the next button moves the slider forward one image', function() {
    casper.start(site, function() {
      this.click('.next');
    });

    // there's a 700 millisec transition on the slider
    casper.wait(1000, function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-2.jpg');
    });
  });

  it('Clicking the previous button moves the slider back one image', function() {
    casper.start(site, function() {
        this.click('.prev');
    });

    // there's a 700 millisec transition on the slider
    casper.wait(1000, function() {
      this.getElementAttribute('.pic', 'style').should.contain('slider-8.jpg');
    });
  });

});
