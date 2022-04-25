const user=`CREATE TABLE User (
    ID  VARCHAR(200) PRIMARY KEY UNIQUE,
    Name VARCHAR(20) NOT NULL,
    Email VARCHAR(30) NOT NULL UNIQUE ,
    Password VARCHAR(200) NOT NULL,
    Sex VARCHAR(10) NOT NULL,
    Image VARCHAR(200),
    Role VARCHAR(200),
    Status BOOLEAN)`
module.exports=user;
