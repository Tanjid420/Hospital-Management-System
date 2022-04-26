const admin=`CREATE TABLE Admin (
    File VARCHAR(200),
    DoctorId_fk VARCHAR(200),
    EmployeeId_fk VARCHAR(200),
    FOREIGN KEY (DoctorId_fk) REFERENCES User(ID),
    FOREIGN KEY (EmployeeId_fk) REFERENCES User(ID))`
    module.exports=admin;