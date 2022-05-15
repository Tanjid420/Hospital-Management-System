const shift=`CREATE TABLE Shift (
    Id_fk VARCHAR(200),
    Time TIME,
    FOREIGN KEY(Id_fk) REFERENCES User(ID))`
    module.exports=shift;
    