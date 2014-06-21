var  should = require('should')
   , buffers = require('../');

describe('Buffers', function() {
  describe('append', function() {
    it('should append the values to the given buffer', function() {
      var b1 = 'eat'
        , b2 = ' ALL'
        , b3 = ' the bacon!';
    
      buffers.to(b1).append(b2, b3).toString().should.be.equal('eat ALL the bacon!');
    });
  });

  describe('append', function() {
    it('should append the values to the given buffer', function() {
      var b1 = 'code'
        , b2 = 'Write ';
      
      buffers.to(b1).prepend(b2).toString().should.be.equal('Write code');
    });
  });
  
  describe('prepend', function() {
    it('should prepend the values to the given buffer', function() {
      var b1 = 'code'
        , b2 = 'Write ';
      
      buffers.to(b1).prepend(b2).toString().should.be.equal('Write code');
    });
  });

  describe('join', function() {
    it('should join the given buffers', function() {
      var b1 = 'code'
        , b2 = 'Write ';
      
      buffers.using(' ').join('I', 'GitHub', 'code').toString().should.be.equal('I GitHub code');
    });
  });
  
  describe('split', function() {
    it('should split a buffer using a given value', function() {
      var result = buffers.using(' ').split('I GitHub code');
      
      result = result.map(function(buffer) {
	return buffer.toString();
      });
      
      result.should.be.eql(['I', 'GitHub' ,'code']);
    });
  });
});