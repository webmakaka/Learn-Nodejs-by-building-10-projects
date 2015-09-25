# Learn-Nodejs-by-building-10-projects
[Udemy] Learn Nodejs by building 10 projects [2015, ENG]

<br/>

### 03 Basic Express Website

002 Express  Jade Template Setup

    # npm install -g express
    # npm install -g express-generator

    $ express express-websit
    $ cd express-website/
    $ inpm install

    $ npm install --save nodemailer
    $ npm start

    http://localhost:3000/

    http://getbootstrap.com/getting-started/#download
    http://getbootstrap.com/examples/starter-template/

    http://html2jade.aaron-powell.com/


003 Page Routes Views

004 Nodemailer Setup

To send you should login to gmail


### 04 User Login System

002 MongoDB Install Setup

Installation MongoDB on windows


    $ mongo
    > use nodeauth
    > db.createCollection('users');
    > show collections
    > show dbs

    > db.users.insert({name:"Brad Traversy",email:"brad@techguywebsolutions.com", username:"devuser1",password:"1234"});
    > db.users.insert({name:"John Doe",email:"john@techguywebsolutions.com", username:"devuser2",password:"1234"});
    > db.users.find();
    > db.users.find().pretty();

    > db.users.update({username:"devuser1"},{$set:{email:"devuser1@gmail.com"}});


003 Application  Middleware Setup

    $ mikdir -p nodeauth
    $ cd nodeauth
    $ npm install --save mongodb
    $ npm install --save mongoose
    $ npm install --save connect-flash
    $ npm install --save express-validator
    $ npm install --save express-session
    $ npm install --save express-messages
    $ npm install --save passport
    $ npm install --save passport-local
    $ npm install --save passport-http
    $ npm install --save multer
    $ npm install

    $ npm start
