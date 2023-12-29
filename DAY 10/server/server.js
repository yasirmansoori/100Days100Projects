const mongoose = require('mongoose')
const Document = require('./document')
require('dotenv').config();

const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const username = encodeURIComponent(process.env.MONGODB_USERNAME);
const database = encodeURIComponent(process.env.MONGODB_DATABASE);
const cluster = encodeURIComponent(process.env.MONGODB_CLUSTER);

const CONNECTION_URI = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority` || 'mongodb://localhost/google-docs-clone';
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URI).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

const io = require('socket.io')(PORT, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  }
})

io.on('connection', socket => {
  socket.on('get-document', async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit('load-document', document.data)

    socket.on('send-changes', delta => {
      socket.broadcast.to(documentId).emit('recieve-changes', delta)
    })
    socket.on('save-document', async data => {
      await Document.findByIdAndUpdate(documentId, { data })
    })
  })
})

const defaultValue = ''

async function findOrCreateDocument(id) {
  if (!id) return;
  try {
    const document = await Document.findById(id);
    if (document) return document;
    return await Document.create({ _id: id, data: defaultValue });
  } catch (error) {
    console.error('Error finding or creating document:', error);
  }
}
