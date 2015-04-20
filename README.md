# Pinga

A smart product recommendation website

## Instructions

### Try

To try out the production release, execute the following on the command line
(requires [Bower](http://bower.io/), [Node Package Manager (NPM)](https://www.npmjs.com/),
and [Grunt](http://gruntjs.com/)).

1. Install Bower dependencies  
`bower install`
2. Install Node.js dependencies  
`npm install`
3. Use Grunt to start up the production client and server  
`grunt prod:view`

### Grunt

### Other

**Manually start the MongoDB server**  
`mkdir -p ./data/mongodb && mkdir -p ./logs`
`mongod --dbpath ./data/mongodb --logpath ./logs/mongodb.log --logappend --fork`

**Manually terminate the MongoDB server**  
`mongod --dbpath ./data/mongodb --shutdown`
