const admin=`CREATE TABLE admin (
    File VARCHAR(200),
    DoctorId_fk VARCHAR(200),
    EmployeeId_fk VARCHAR(200),
    FOREIGN KEY (DoctorId_fk) REFERENCES user(ID),
    FOREIGN KEY (EmployeeId_fk) REFERENCES user(ID))`
    module.exports=admin;