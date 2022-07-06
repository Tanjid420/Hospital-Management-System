const user=`CREATE TABLE user (
    ID  VARCHAR(200) PRIMARY KEY UNIQUE,
    Name VARCHAR(30) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE ,
    Password VARCHAR(500) NOT NULL,
    Sex VARCHAR(10) NOT NULL,
    File VARCHAR(300),
    Role VARCHAR(200),
    Status BOOLEAN,
    Image VARCHAR(300))`
module.exports=user;
