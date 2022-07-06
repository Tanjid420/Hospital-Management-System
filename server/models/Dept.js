
const dept=`CREATE TABLE dept (
    Id_fk VARCHAR(200),
    Name VARCHAR(20),
    FOREIGN KEY (Id_fk) REFERENCES user (ID) )`
module.exports=dept;