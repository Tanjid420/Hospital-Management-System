const duplicateUser=`CREATE TABLE DuplicateUser (
    TransictionId_fk VARCHAR(200),
    EmailDuInfo_fk VARCHAR(100),
    FOREIGN KEY (EmailDuInfo_fk) REFERENCES DuplicateUserInfo(EmailID),
    FOREIGN KEY (TransictionId_fk) REFERENCES Fees(TransictionID))`
    module.exports=duplicateUser;