const fees=`CREATE TABLE fees (
    TransictionID VARCHAR(200) UNIQUE,
    TestName_fk VARCHAR(100),
    PaitentId_fk VARCHAR(200),
    EmailID VARCHAR(100),
    FOREIGN KEY (TestName_fk) REFERENCES cost(TestNameCost_FK),
    FOREIGN KEY (PaitentId_fk) REFERENCES user(ID))`
    module.exports=fees;
