const mongoose = require('mongoose');
const User = require('./user');

const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 160,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Must be the same as the string defined in ./user export
    },  
}, {timestamp: true});

MessageSchema.pre('remove', async function(next) {
    try {
        let user = await User.findById(this.user);
        user.messages.remove(this.id);
        await user.save();
        return next();
    } catch(err) {
        next(err.message);
    }
}); 

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;