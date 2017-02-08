/*Install node-require */
require('marko/node-require').install();
/*Load the template*/
var indexTemplate = require('./views/index.marko');
/* render in template*/ 
indexTemplate.renderToString({
        name: 'Saravanan'
},
    function(err, output) {
        if (err) {
            console.error('Rendering failed');
            return;
        }
         console.log('Output HTML: ' + output);
    });

