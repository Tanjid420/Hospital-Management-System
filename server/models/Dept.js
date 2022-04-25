const User=require('./User')
const dept=`CREATE TABLE Dept (
    Id_fk VARCHAR(200),
    Name VARCHAR(20),
    FOREIGN KEY (Id_fk) REFERENCES User (ID) )`
module.exports=dept;