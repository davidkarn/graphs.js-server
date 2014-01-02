var engine = require('engine.io');
var server = engine.listen(3005);

function random_dec(upto, decs) {
    var exp = Math.pow(10, decs || 0);
    return Math.round(Math.random() * upto * exp , decs || 0) / exp; }




server.on('connection', function(socket) {

    setInterval(function() {
	console.log('emitting');
	socket.send(JSON.stringify({op: 'reload-data', 
		     data: [{label: 'first',
		      data: [{test: 'one', f: random_dec(50,2)}, 
			     {test: 'two', f: random_dec(50,2)}, 
			     {test: 'three', f: random_dec(50,2)}, 
			     {test: 'four', f: random_dec(50,2)}, 
			     {test: 'five', f: random_dec(50,2)}, 
			     {test: 'six', f: random_dec(50,2)}]},
		     {label: 'second',
		      data: [{test: 'one', f: random_dec(50,2)}, 
			     {test: 'two', f: random_dec(50,2)}, 
			     {test: 'three', f: random_dec(50,2)}, 
			     {test: 'four', f: random_dec(50,2)}, 
			     {test: 'five', f: random_dec(50,2)}, 
			     {test: 'six', f: random_dec(50,2)}]},
		     {label: 'third',
		      data: [{test: 'one', f: random_dec(50,2)}, 
			     {test: 'two', f: random_dec(50,2)}, 
			     {test: 'three', f: random_dec(50,2)}, 
			     {test: 'four', f: random_dec(50,2)}, 
			     {test: 'five', f: random_dec(50,2)}, 
			     {test: 'six', f: random_dec(50,2)}]}]})); },
		10 * 1000); });

