const duplicateUser=`CREATE TABLE duplicateUser (
    TransictionId_fk VARCHAR(200),
    EmailDuInfo_fk VARCHAR(100),
    FOREIGN KEY (EmailDuInfo_fk) REFERENCES duplicateUserInfo(EmailID),
    FOREIGN KEY (TransictionId_fk) REFERENCES fees(TransictionID))`
    module.exports=duplicateUser;