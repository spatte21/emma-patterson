var site = casper.cli.get('site');

describe('Routes', function() {

  it('default route should take you to Home', function() {
    casper.start(site, function() {
      this.getTitle().should.contain('Home');
    });
  });

  it('index route should work as expected', function() {
    casper.start(site + '/index', function() {
      this.getTitle().should.contain('Home');
    });
  });

  it('eyfs route should work as expected', function() {
    casper.start(site + '/eyfs', function() {
      this.getTitle().should.contain('EYFS');
    });
  });

  it('policies route should work as expected', function() {
    casper.start(site + '/policies', function() {
      this.getTitle().should.contain('Policies');
    });
  });

  it('timesfees route should work as expected', function() {
    casper.start(site + '/timesfees', function() {
      this.getTitle().should.contain('Times/Fees');
    });
  });

  it('misc route should work as expected', function() {
    casper.start(site + '/misc', function() {
      this.getTitle().should.contain('Misc.');
    });
  });

  it('gallery route should work as expected', function() {
    casper.start(site + '/gallery', function() {
      this.getTitle().should.contain('Gallery');
    });
  });

  it('contacts route should work as expected', function() {
    casper.start(site + '/contacts', function() {
      this.getTitle().should.contain('Contacts');
    });
  });

});
