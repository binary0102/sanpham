import UserModel from './model/user.model'
export default function clientManager() {
    function getUserById(userId) {
        return UserModel.findOne({_id: userId})
        .then(doc => (doc.toObject()))
        .then(value => ( value._id.toString()))
        .then(value => {
            return value;
        })
    }
    return {
        getUserById
    }
}