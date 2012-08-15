(function() {
    var to = function(obj) { 
	if ( !Array.isArray(obj) ) {
	    obj = Array.prototype.slice.call(arguments);
	}

	return new wrapper(obj); 

    };

    var wrapper = function(obj) { this._wrapped = obj; };

    var _concat = function(buffers) {
	var _buffers = [];
	buffers.forEach(function(buffer) {
	    if ( !Buffer.isBuffer(buffer) ) {
		buffer = new(Buffer)(buffer);
	    }

	    _buffers.push(buffer);

	});

	return Buffer.concat(_buffers);

    };


    wrapper.prototype.append = function(buffers) {
	if ( !Array.isArray(buffers) ) {
	    buffers = Array.prototype.slice.call(arguments);
	}

	var _buffers = [];
	this._wrapped.forEach(function(buffer) {
	    _buffers.push(_concat([buffer].concat(buffers)));

	});

	return _buffers;

    };

    wrapper.prototype.prepend = function(buffers) {
	if ( !Array.isArray(buffers) ) {
	    buffers = Array.prototype.slice.call(arguments);
	}

	var _buffers = [];
	this._wrapped.forEach(function(buffer) {
	    _buffers.push(_concat(buffers.concat(buffer)));

	});

	return _buffers;

    };

    exports.to = to;

})();