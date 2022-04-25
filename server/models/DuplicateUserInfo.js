const duplicateUserInfo=`CREATE TABLE DuplicateUserInfo (
    Name VARCHAR(30),
    EmailID VARCHAR(100) PRIMARY KEY UNIQUE,
    Phone VARCHAR(20))`
    module.exports=duplicateUserInfo;
