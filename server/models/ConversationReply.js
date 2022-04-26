const conversationReply=`CREATE TABLE ConversationReply (
    CnversationReplyID VARCHAR(200) PRIMARY KEY  UNIQUE,
    File VARCHAR(200),
    Messages VARCHAR(3000),
    UserId_fk VARCHAR(200),
    Time_Stamp TIMESTAMP,
    Status BOOLEAN,
    ChatId_fk VARCHAR(200),
    FOREIGN KEY(UserId_fk) REFERENCES Conversation(User1Id_fk),
    FOREIGN KEY(ChatId_fk) REFERENCES Conversation(ChatID))`
    module.exports=conversationReply;
