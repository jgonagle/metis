# Metis

A smart product recommendation website

### Install Bower and JavaScript dependencies

Execute the following on the command line from this directory (requires
[Bower](http://bower.io/) and [Node Package Manager (NPM)](https://www.npmjs.com/)).
```
bower install
npm install
```

## Instructions

### Try

To try out the development release, execute the following on the command line
(requires [Grunt](http://gruntjs.com/)).  
```
grunt
```

### Grunt

### Other

**Manually start the MongoDB server**
```
cd src/server
mkdir -p ./data/mongodb && mkdir -p ./logs
mongod --dbpath ./data/mongodb --logpath ./logs/mongodb.log --logappend --fork
cd ../..
```

**Manually terminate the MongoDB server**
```
cd src/server
mongod --dbpath ./data/mongodb --shutdown
cd ../..
```
