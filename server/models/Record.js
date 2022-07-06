const record=`CREATE TABLE record (
    Record_ID VARCHAR(200) PRIMARY KEY UNIQUE,
    Time VARCHAR(20),
    Date DATE,
    Serialno INTEGER,
    PaitentId_fk VARCHAR(200),
    PtientPhone VARCHAR(11),
    DoctorId_fk VARCHAR(200),
    FOREIGN KEY(PaitentId_fk) REFERENCES user(ID),
    FOREIGN KEY(DoctorId_fk) REFERENCES user(ID))`
    module.exports=record;