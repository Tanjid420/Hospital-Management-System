const conversation=`CREATE TABLE Conversation(
    ChatID VARCHAR(200) PRIMARY KEY UNIQUE,
    User1Id_fk VARCHAR(200),
    User2Id_fk VARCHAR(200),
    TimeStamp TIMESTAMP,
    Status BOOLEAN,
    FOREIGN KEY(User1Id_fk) REFERENCES User(ID),
    FOREIGN KEY(User2Id_fk) REFERENCES User(ID))`
    module.exports=conversation;
