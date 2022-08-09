const degrees=`CREATE TABLE degrees(
    Degree_Name VARCHAR(300),
    ID_fk VARCHAR(200),
    FOREIGN KEY(ID_fk) REFERENCES user(ID))`    
module.exports=degrees;