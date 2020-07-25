import BlueberryServer from "./Server";

const Server = new BlueberryServer('mongodb+srv://logic:JSqgo7BV3Sgli8ZQ@cluster0-vtqet.mongodb.net/test?retryWrites=true&w=majority');

Server.initDatabase();
//  Server.initChangeStreamListener();
Server.initControllers();
Server.startServer(80);
