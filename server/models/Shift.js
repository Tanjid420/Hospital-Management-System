const shift=`CREATE TABLE shift (
    Id_fk VARCHAR(200),
    Time TIME,
    FOREIGN KEY(Id_fk) REFERENCES user(ID))`
    module.exports=shift;
    