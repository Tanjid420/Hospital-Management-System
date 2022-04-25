const medicalHistory=`CREATE TABLE MedicalHistory (
    PaitentId_fk VARCHAR(200),
    MedicalHistory VARCHAR(300),
    FOREIGN KEY(PaitentId_fk) REFERENCES User(ID))`
    module.exports=medicalHistory;