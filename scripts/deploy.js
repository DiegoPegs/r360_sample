const ghpages = require('gh-pages');
console.log('rodando publish')
ghpages.publish('build', function(err){});