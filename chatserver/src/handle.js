import ClientManager from './clientManager';
import ThreadManager from './threadManager';

const clientManager = ClientManager();
const threadManager  = ThreadManager();
function makeHandleEvent(client) {
    function ensureExits(getter, rejectionMessage) {
        return new Promise(function(resolve, reject) {
            const res = getter()

            return res.then(doc => { resolve(doc)}).catch( error => reject(rejectionMessage));
            /* return res
              ? resolve(res)
              : reject(rejectionMessage) */
        })
    }
    function ensureValidThread(threadId) {
        return ensureExits(() => threadManager.getThreadById(threadId),"Thread Not fount ")
    }
    function ensureUser(clientId) {
        return ensureExits(() => clientManager.getUserById(clientId,"Client not fount"))
    }
    function ensureValidThreadAndUser(threadId) {
        return Promise.all([
            ensureValidThread(threadId),
            ensureUser(client.decoded.id),
        ])
        .then(([threadId, clientId]) => {
          
            return [threadId,clientId];
        } )
        .then(([threadId, clientId])   => Promise.resolve({ threadId, clientId}))
    }
    function handleEvent(message,threadId,callback ) {
        return  ensureValidThreadAndUser(threadId).then(({threadId, clientId}) => {
         
         threadManager.addMessageOfThread({message,threadId,clientId}).then(doc => {
          
            threadManager.broadcastMessage(doc);
          });
            
           
        
        }).catch(callback)
    }
    function handleJoinThread(threadId,skip,callback) {
       
        return ensureValidThreadAndUser(threadId).then(({threadId}) => {
             threadManager.addUser(client);
             threadManager.getChatHistory(threadId,skip).then(listMessage => {
                
                 callback(null,listMessage)
             });
         
        }).catch(callback)
    }
    return {
        handleEvent,
        handleJoinThread,
    };
     
}
export const makeHandlers  = (client) => {
   const {handleEvent,handleJoinThread} = makeHandleEvent(client)
    const handleMessage = (message,threadId, callback) => {
          
          handleEvent(message,threadId,callback);
     
    }
    const handleJoin = (threadId, skip,callback) => {
       
        handleJoinThread(threadId,skip, callback)
    }
  
    const handleGetThreads = (userId, callback) => {
        console.log(userId)
        threadManager.serializeChatrooms(userId)
        .then((threads) => {
        
            
           
            callback(null, threads);
        })
        .catch(callback);
    }
    return { 
        handleMessage,
        handleJoin, 
        handleGetThreads
    }
}