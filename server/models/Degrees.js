const degrees=`CREATE TABLE Degrees(
    Degree_Name VARCHAR(300),
    DoctorId_fk VARCHAR(200),
    FOREIGN KEY(DoctorId_fk) REFERENCES User(ID))`
module.exports=degrees;