const verificationToken=`CREATE TABLE verificationToken(
    Token INTEGER,
    Time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)`
module.exports=verificationToken