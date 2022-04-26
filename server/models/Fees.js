const fees=`CREATE TABLE Fees (
    TransictionID VARCHAR(200) UNIQUE,
    TestName_fk VARCHAR(100),
    PaitentId_fk VARCHAR(200),
    EmailID VARCHAR(100),
    FOREIGN KEY (TestName_fk) REFERENCES Cost(TestNameCost_FK),
    FOREIGN KEY (PaitentId_fk) REFERENCES User(ID))`
    module.exports=fees;
