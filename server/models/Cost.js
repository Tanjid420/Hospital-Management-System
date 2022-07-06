const cost=`CREATE TABLE cost(
    TestNameCost_FK VARCHAR(100),
    Amount INTEGER,
    FOREIGN KEY(TestNameCost_FK) REFERENCES facilities(TestNAME))`
    module.exports=cost;