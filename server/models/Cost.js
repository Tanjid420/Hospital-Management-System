const cost=`CREATE TABLE Cost(
    TestNameCost_FK VARCHAR(100),
    Amount INTEGER,
    FOREIGN KEY(TestNameCost_FK) REFERENCES Facilities(TestNAME))`
    module.exports=cost;