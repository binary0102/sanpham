import ThreadModel from '../model/thread.model';
let a = [{client_id: 1}];
function createThread(req, res, next) {
    let {threadName, participants, } = req.body;
    if (threadName !== undefined && participants !== undefined) {
        let thread = new ThreadModel({ name: "threadName", participants: a })
        return thread.save().then(doc => {
            res.status(200).send({thread: doc, code: 200})
        })
        .catch(err => res.status(200).send({code: 400, message: "Create document Error"}))
    }else {
        res.status(200).send({code: 400, message: "Something Error"});
    }
}
function updateThread(req, res, next) {
   
}
function deleteThread(req, res, next) {
    const {threadId} = req.params;

    if (threadId !== undefined) {
        return ThreadModel.delete({_id : threadId})
        .then(doc => {
         res.status(200).send({threads: doc, code: 200})
        }).catch(err => res.status(200).send({code: 400, message: "Some thing wrong ! "}))
    }
}
function getSigleThread(req, res, next) {
    const {threadId} = req.params;
   
    if (threadId !== undefined) {
        return ThreadModel.find({_id : threadId})
        .then(doc => {
         res.status(200).send({threads: doc, code: 200})
        }).catch(err => res.status(200).send({code: 400, message: "Some thing wrong ! "}))
    }
}
function getThreads(req, res, next) {
    return ThreadModel.find({}).then(doc => {
        res.status(200).send({threads: doc, code: 200})
    }).catch(err => res.status(200).send({code: 400, message: "Some thing wrong ! "}))
}
export {
    createThread,
    getThreads,
    updateThread,
    deleteThread,
    getSigleThread,    
}