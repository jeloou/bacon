bacon
====
A less ugly way to deal with buffers.

API
====

    var bacon = require('bacon');

bacon.to([b1,...,bn] || b1,...,bn).append([b1,..., bn] || b1,...,bn)
----

Appends all the buffers passed to "append" to every buffer passed to "to".


    var b$ = require('bacon');
    var b1 = 'eat ', 
        result;

    result = b$.to(b1).append(' ALL', ' the bacon!');

    console.log(result.toString());
    // eat ALL the bacon!


bacon.to([b1,...,bn] || b1,..., bn).prepend([b1,..., bn] || b1,...,bn)	      
----

Prepends all the buffers passed to "prepend" to every buffer passed to "to".

    var b$ = require('bacon');
    var b1 = 'code.', 
        result;

    result = b$.to('Read', 'Write').prepend(b1);

    result.forEach(function(buffer) {
        console.log(buffer.toString());
    });
    // Read code.
    // Write code.


TODO
---

A lot of things (:
