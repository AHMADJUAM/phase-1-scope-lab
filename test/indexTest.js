require ( './helpers.js' );

describe('Fix the Scope', function() {
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', function() {
      expect(window.customerName).to.equal('bob');
    });
  });

  describe('upperCaseCustomerName()', function() {
    it('modifies the customerName variable', function() {
      expect(window.customerName).to.equal('bob');

      upperCaseCustomerName();

      expect(window.customerName).to.equal('BOB');
    });
  });
  describe('setBestCustomer()', function() {
    it('setBestCustomer', function() {
      expect(window.bestCustomer).to.equal(undefined);

      setBestCustomer();

      expect(window.bestCustomer).to.equal('not bob');
    });
  });

  describe('overwriteBestCustomer()', function() {
    it('overwrites the best customer', function() {
      overwriteBestCustomer('maybe bob');

      expect(window.bestCustomer).to.equal('maybe bob');
    });
  });

  function changeLeastFavoriteCustomer() {
    try {
      leastFavoriteCustomer = 'new value'; // Attempting to reassign a constant variable
    } catch (error) {
      throw new Error('Assignment to constant variable.');
    }
  }
  
});
