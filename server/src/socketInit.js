const { Server } = require('socket.io');
const chatController = require('./controllers/sockets/ChatController');
const notificationController = require('./controllers/sockets/NotificationController');


const cors = {
  origin: '*',
};

module.exports.createConnection = (httpServer) => {
  const io = new Server(httpServer, { cors });
  notificationController.connect('/notifications', io);
  chatController.connect('/chat', io);
};

module.exports.getChatController = () => {
  return chatController;
};

module.exports.getNotificationController = () => {
  return notificationController;
};
