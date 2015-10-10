# Learn-Nodejs-by-building-10-projects
[Eduonix] Learn Nodejs by building 10 projects [2015, ENG]

<br/>

### 03 Basic Express Website

002 Express Jade Template Setup

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

To send emails you should be logged in  gmail

<br/>

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


003 Application Middleware Setup

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
    $ npm install --save multer@0.1.8
    $ npm install

    $ npm start


004 Views  Layouts Part A  

005 Views and Layouts Part B  

006 User Registration PART-A

007 User Registration PART-B

    $ mongo
    > use nodeauth
    > db.users.find().pretty();
    > db.users.remove({})

008 Password Encryption with Bcrypt

Installation componetns for windows (Open SSL)

    $ npm install --save node-gyp
    $ npm install --save bcrypt

009 User Authentication with Passport

010 Logout Access Control Part A

011 Logout  Access Control Part B


<br/>

### 05 Node Blog System

002 Modules, Middleware  Template Part A

    $ express nodeblog
    $ cd nodeblog/
    $ npm install --save mongodb
    $ npm install --save monk
    $ npm install --save connect-flash
    $ npm install --save express-validator
    $ npm install --save express-session
    $ npm install --save express-messages
    $ npm install --save multer@0.1.8
    $ npm install --save moment
    $ npm install

    $ mkdir public/images/uploads

    $ mongo
    > use nodeblog

    > db.createCollection('posts');
    > db.createCollection('categories');

    $ npm start


003 Modules, Middleware Template Part B

004 Homepage Blog Posts Part A

    $ mongo
    > use nodeblog

    > db.posts.insert({title:"Blog Post One", category: "Technology", author:"Brad Traversy", body:"This is the body", date: ISODate()})
    > db.posts.insert({title:"Blog Post Two", category: "Fasion", author:"John Doe", body:"This is the body for a fasion post", date: ISODate()})

    > db.posts.find().pretty()

    $ npm start

005 Homepage Blog Posts Part B

    $ npm start

006 Adding Posts PART -A

007 Adding Posts PART -B

    $ mongo
    > use nodeblog

    > db.categories.insert({title:"Technology"})
    > db.categories.insert({title:"Fasion"})

<br/>

Web Text Editor - http://ckeditor.com/ (Version 4.5.3)

    $ npm start

008 Adding Categories

    $ npm start

009 View Posts By Category

    $ mongo
    > use nodeblog
    > db.posts.remove({})


http://lipsum.com/

    $ npm start


010 Single Posts Comments Part A

    $ npm start

011 Single Posts Comments Part B

    $ npm start


<br/>

### 06 Community Events

002 MongoLab Drywall Setup Part A

mongolab.com

create new database: comevents
create a new user:


    # npm install -g grunt-cli

https://github.com/jedireza/drywall/

    $ git clone https://github.com/jedireza/drywall/  comevents
    $ cd comevents/
    $ npm install

    $ cp config.example.js config.js
    $ vi config.js
    $ grunt

003 MongoLab  Drywall Setup Part B

    $ mongo ds027744.mongolab.com:27744/comevents -u user1 -p user1
    rs-ds027744:PRIMARY> use comevents

    db.admingroups.insert({ _id: 'root', name: 'Root' });
    db.admins.insert({ name: {first: 'Root', last: 'Admin', full: 'Root Admin'}, groups: ['root'] });
    var rootAdmin = db.admins.findOne();
    db.users.save({ username: 'root', isActive: 'yes', email: 'your@email.addy', roles: {admin: rootAdmin._id} });
    var rootUser = db.users.findOne();
    rootAdmin.user = { id: rootUser._id, name: rootUser.username };
    db.admins.save(rootAdmin);

    db.users.update({email:'your@email.addy'}, {$set: {email:'your_email@gmail.com'}})


reset password  
http://localhost:3000/login/forgot/


004 Event Schema Frontend Display Part A

005 Event Schema Frontend Display Part B


    $ mongo ds027744.mongolab.com:27744/comevents -u user1 -p user1
    rs-ds027744:PRIMARY> use comevents
    rs-ds027744:PRIMARY> show collections
    rs-ds027744:PRIMARY> db.createCollection('events');

    rs-ds027744:PRIMARY> db.events.insert({name:'Event One', description:'This is the description', date:new Date('July 04,2015'), venu: 'Venu One', startTime:'2:00pm', endTime:'5:00pm', username:'brad'})

    rs-ds027744:PRIMARY> db.events.find().pretty();
    {
    	"_id" : ObjectId("560fbefca828926163531a0f"),
    	"name" : "Event One",
    	"description" : "This is the description",
    	"date" : ISODate("2015-07-04T00:00:00Z"),
    	"venu" : "Venu One",
    	"startTime" : "2:00pm",
    	"endTime" : "5:00pm",
    	"username" : "brad"
    }

<br/>

    $ grunt


006 Details Page Adding Events

007 Details Page Adding Events Part B

    $ npm install --save connect-flash
    $ npm install --save express-messages

    $ grunt

008 Edit and Delete Events

009 Edit and Delete Events Part B

    $ grunt


<br/>

### 07 Bookstore (eCommerce)

    Kraken Framework
    MongoDB with Mongoose
    Dust Templates
    Custom Templating
    PayPal Integration


002 Kraken Setup

krakenjs.com

    # npm install -g yo generator-kraken bower grunt-cli
    $ yo kraken


    ? Name: TekBooks
    ? Description: Simple shopping cart
    ? Author: Brad Traversy
    ? Template library? Dust (via Makara 2)
    ? Include i18n support? Yes
    ? Front end package manager ? Bower
    ? CSS preprocessor library? LESS
    ? JavaScript library? RequireJS

    $ cd TekBooks/

    $ npm install --save mongodb
    $ npm install --save mongoose
    $ npm install --save connect-flash
    $ npm install --save express-messages

    $ npm start

    http://localhost:8000/


Foundation

http://foundation.zurb.com/

Download Complete


003 Frontend Routes Templates Part A

    $ npm start

004 Frontend Routes Templates Part B

005 Frontend Routes Templates Part C

    $ npm start

006 Database Model

    $ mongo
    > use takbooks
    > db.createCollection('books');
    > db.createCollection('categories');
    > db.books.insert({title:"Professional Node.js", description:"Node.js is a powerful and popular new Framework for writing scalable network programs using JavaScript.", category:"NodeJS", author:"Pedro Teixeira", publisher: "Wiley", price:"21.56", cover:"node1.jpg"});
    > db.books.insert({title:"Node.js Blueprints", description:"A straightforward, practical guide containing ste-by-tep tutorials that will push your Node.js programming skills to the next level. If you are a web developer", category:"NodeJS", author:"Krasimir Tsonev", publisher: "Packt Publishing", price:"54.79", cover:"node2.jpg"});


007 Display Data From MongoDB Part A

008 Display Data From MongoDB Part B

    $ mongo
    > use tekbooks
    > db.categories.insert({name:"NodeJS"});

009 Admin CRUD Part A

Now we could add new books  
http://localhost:8000/manage/books/add


010 Admin CRUD Part B

011 Shopping Cart Part A

    $ npm start

012 Shopping Cart Part B


Errors:  
1) Flash Messages is not Show  
2) When i tryind to add book without name or price, i get exception: uncaughtException Can't set headers after they are sent.  
3) Summ total in order is not working.



<br/>

### 08 ChatIO

002 ChatIO User Interface

003 Sending Chat Messages

    $ npm install
    $ node app

004 Adding Usernames

    $ node app

005 App Hosting With Heroku

skipped


<br/>

### 09 FindaDoc Directory

    Apache Cassandra

002 Install Cassandra  Setup Keyspace

Template:  
http://www.free-css-templates.com/preview/Simple/

Apache Cassandra (DataStax Community Edition)  
http://www.planetcassandra.org/cassandra/

    # cqlsh

    cqlsh> create KEYSPACE testdb WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor':3};

    cqlsh> describe KEYSPACES;

    cqlsh> USE testdb;

    cqlsh:testdb> CREATE TABLE users(id uuid, name text, email text, username text, PRIMARY KEY(id, name, email, username));

    cqlsh:testdb> DESCRIBE TABLE USERS;

    cqlsh:testdb> INSERT INTO users(id, name, email, username) VALUES(now(), 'Brad Traversy', 'techguyinfo@gmail.com', 'techguy');

    cqlsh:testdb> Select name from users;


003 FindaDoc User Interface

004 Create App With Layout Part A


    # cqlsh

    CREATE KEYSPACE findadoc WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor':3};

    CREATE TABLE findadoc.doctors(doc_id uuid, full_name text, category text, practice_name text, street_address text, city text, state text, zip text, new_patients boolean, graduation_year int, PRIMARY KEY(doc_id, full_name, category, city, state));

    DESCRIBE KEYSPACES;
    DESCRIBE KEYSPACE findadoc;

    USE findadoc;

    CREATE TABLE categories(cat_id uuid, name text, PRIMARY KEY(cat_id, name));

    INSERT INTO categories(cat_id, name) VALUES (now(), 'General');
    INSERT INTO categories(cat_id, name) VALUES (now(), 'Neurologist');
    INSERT INTO categories(cat_id, name) VALUES (now(), 'Dentist');

    INSERT INTO doctors(doc_id, full_name, category, practice_name, street_address, city, state, zip, new_patients, graduation_year) VALUES (now(), 'Thomas Smith MD', 'General', 'Family Medical', '50 Main st', 'Saugus', 'MA', '01906', true, 1997);

    INSERT INTO doctors(doc_id, full_name, category, practice_name, street_address, city, state, zip, new_patients, graduation_year) VALUES (now(), 'James Walsh MD', 'General', 'Mass Medical', '10 Congress st', 'Amesbury', 'MA', '01913', true, 1997);

    SELECT * FROM doctors;
    SELECT * FROM categories;

    $ express
    $ npm install
    $ npm install --save cassandra-driver
    $ npm install --save express-session
    $ npm install --save express-messages
    $ npm install --save connect-flash


005 Create App With Layout Part B

    $ npm start

006 Reading From Cassandra Part A

    $ npm start
