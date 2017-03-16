(function() {
    'use strict';

let expect = window.chai.expect;

describe('calc', function(){

  describe('sum function', function(){
    it('should add the provided numbers and then return the total', function(){
      let result =  window.calc.sum([5, 2]);

      expect( result ).to.be.a('number');
      expect( result ).to.equal( 7 );
    });

    it('should handle no arguments', function(){
      let result =  window.calc.sum();

      expect( result ).to.equal( 0 );
    });

    it('should handle one argument', function(){
      let result =  window.calc.sum( [15] );

      expect( result ).to.be.a('number');
      expect( result ).to.be.equal( 15 );
    });

    it('should handle one argument that is not an array', function(){
      let result = window.calc.sum( 14 );

      expect( result ).to.be.NaN;
    });

    it('should covert strings to numbers for addition', function(){
       let result =  window.calc.sum(['3','7']);
       expect( result ).to.be.a('number').and.to.equal(10);
    });

});

    describe('factorial function', function(){
      it('should return the factorial of any given number', function(){
        let result =  window.calc.factorial(5);
        expect( result ).to.be.a('number').and.to.equal(120);
     });

      it('should handle no arguments', function(){
        let result =  window.calc.factorial();
        expect( result ).to.be.a('number').and.to.equal(0);
      });

      it('should convert string to number to factorial')
        let result =  window.calc.factorial('5');
        expect( result ).to.be.a('number').and.to.equal('120');



  });

});




})();
