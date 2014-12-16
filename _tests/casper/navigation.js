var site = casper.cli.get('site');

describe('Basic site navigation', function() {

  before(function() {
    casper.start(site, function() {
      this.getTitle().should.contain('Childminder Dunnington York');
    });
  });

  it('Clicking Home should display the correct page', function() {
    casper.then(function() {
      this.clickLabel('Home', 'a');
    });

    casper.then(function() {
      this.getTitle().should.contain('Home');
      '.page-title'.should.have.text('Dear Parents/Carers,');
    });
  });

  it('Clicking EYFS should display the correct page', function() {
    casper.then(function() {
      this.clickLabel('EYFS', 'a');
    });

    casper.then(function() {
      this.getTitle().should.contain('EYFS');
      '.page-title'.should.have.text('Early Years Foundation Stage (Revised 2012)');
    });
  });

  it('Clicking Policies should display the correct page', function() {
    casper.then(function() {
      this.clickLabel('Policies', 'a');
    });

    casper.then(function() {
      this.getTitle().should.contain('Policies');
      '.page-title'.should.have.text('Policies');
    });
  });

  it('Clicking Times/Fees should display the correct page', function() {
    casper.then(function() {
      this.clickLabel('Times/Fees', 'a');
    });

    casper.then(function() {
      this.getTitle().should.contain('Times/Fees');
      '.page-title'.should.have.text('Times and Fees');
    });
  });

  it('Clicking Misc. should display the correct page', function() {
    casper.then(function() {
      this.clickLabel('Misc.', 'a');
    });

    casper.then(function() {
      this.getTitle().should.contain('Misc.');
      '.page-title'.should.have.text('Miscellaneous Information');
    });
  });

  it('Clicking Gallery should display the correct page', function() {
    casper.then(function() {
      this.clickLabel('Gallery', 'a');
    });

    casper.then(function() {
      this.getTitle().should.contain('Gallery');
      '.page-title'.should.have.text('Our Gallery');
    });
  });

  it('Clicking Contacts should display the correct page', function() {
    casper.then(function() {
      this.clickLabel('Contacts', 'a');
    });

    casper.then(function() {
      this.getTitle().should.contain('Contacts');
      '.page-title'.should.have.text('Contact Details');
    });
  });
});
