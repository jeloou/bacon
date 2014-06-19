# bacon

A less ugly way to deal with buffers.

### Getting started

Install with [npm](http://npmjs.org/)

```
npm install bacon
```

# API


    var buffers = require('bacon');

### bacon.to([b1,...,bn] || b1,...,bn).append([b1,..., bn] || b1,...,bn)

Appends all the buffers passed to "append" to every buffer passed to "to".


    var buffers = require('bacon');
    var b1 = 'eat ', 
        result;

    result = buffers.to(b1).append(' ALL', ' the bacon!');

    console.log(result.toString());
    // eat ALL the bacon!


### bacon.to([b1,...,bn] || b1,..., bn).prepend([b1,..., bn] || b1,...,bn)

Prepends all the buffers passed to "prepend" to every buffer passed to "to".

    var buffers = require('bacon');
    var b1 = 'code.', 
        result;

    result = buffers.to('Read', 'Write').prepend(b1);

    result.forEach(function(buffer) {
        console.log(buffer.toString()); // Read code, Write code
    });


###  bacon.using(S).join([b1,..., bn] || b1,...,bn)

Returns a buffer which is the concatenation of buffers passed to join.  The separator between elements is S.

    var buffers = require('bacon');
	
    result = buffers.using(' ').join('I', 'GitHub', 'code');
    result.toString() // I GitHub code


### bacon.using(S).split(buffer)	      

Returns an array of buffers, using S as the delimiter buffer. 

    var buffers = require('bacon');
	
    result = buffers.using(' ').split('I GitHub code');
    result.forEach(function(buffer){
        console.log(buffer.toString()); // I, GitHub, code
    });

### Contributing

Feel free to open a pull request with a nice feature or a fix for some bug.

## License
See the `LICENSE` file.
