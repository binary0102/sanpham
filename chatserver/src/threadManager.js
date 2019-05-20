import MessageModel from './model/message.model';
import ThreadModel from './model/thread.model';
import UserModel from './model/user.model';
export default function ThreadManager() {
    const members = new Map()

    function getThreadById(threadId) {

        return ThreadModel.findOne({ _id: threadId }).then(doc => (doc.toObject()))

            .then(doc => (doc._id.toString()))

    }
    function addUser(client) {

        members.set(client.decoded.id, client);
    }
    function broadcastMessage(message) {
        members.forEach((m) => {
        
            m.emit('messagereceived', message)
        })
    }
    function getChatHistory(threadId, skip) {

        return MessageModel.find({ thread_id: threadId }).sort({ created_at: -1 }).skip(skip).limit(20).then(doc => {

            return doc;
        })

    }
    function serializeChatrooms(userId) {

        return ThreadModel.find({ participants: userId }).then(threads => {
            let IdOfParticipants = threads.map(e => e.participants);
            let lengthOfParticipants = IdOfParticipants.length;

            let newParticipants = []
            for (let indexOfClient = 0; indexOfClient < lengthOfParticipants; indexOfClient++) {
                newParticipants = newParticipants.concat(IdOfParticipants[indexOfClient]);
            }

            var getAvatarAndName = UserModel.find({ _id: { $in: newParticipants } })
                .then(users => {
                    return users.map(user => {
                        return {
                            avatar: user.avatar,
                            id: user._id,
                            name: `${user.first_name} ${user.last_name}`,
                            first_name: user.first_name,
                            last_name : user.last_name,
                        };
                    })
                })
            function editThreads() {
                let tempThreads = threads;

                let newThreads = getAvatarAndName.then(users => {

                    return tempThreads.map((thread) => {

                        let a = thread.participants.map(clientId => {

                            for (let indexOfUser = 0; indexOfUser < users.length; indexOfUser++) {

                                if (clientId.toString() === users[indexOfUser].id.toString()) {

                                    return users[indexOfUser];
                                }
                            }
                            return clientId;
                        })
                        return {
                            thread: thread.id,
                            current_message: thread.current_message,
                            participants: a,
                            avatar: thread.avatar,
                            created_at: thread.created_at,
                            updated_at: thread.updated_at,
                            _id: thread.id,
                            name: thread.name,
                        
                        }

                    })

                })

                return newThreads;
            }

            let id = editThreads().then(value => {

                return value;
            });

            // console.log(doc)
            return id;
        })

            .catch(err => {
                console.log(err.message)
            })

    }
    function addMessageOfThread({ message, threadId, clientId }) {
      
        if (message !== "") {
            let messageObj = new MessageModel({ client_id: clientId, message: message, thread_id: threadId, created_at: Date.now() });
            return messageObj.save().then(doc => {

                ThreadModel.updateOne({ _id: threadId }, { current_message: { message: message, client_id: clientId, date: doc.created_at } }).then(doc => {

                })

                return doc;
            }).then(doc => doc);
        }
    }
    return {
        addMessageOfThread,
        getThreadById,
        broadcastMessage,
        addUser,
        getChatHistory,
        serializeChatrooms
    }
}