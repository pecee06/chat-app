import {Schema, model} from "mongoose"

const ChatSchema = new Schema({
    chatName: {
        type: "String",
        required: true,
        lowercase: true,
        trim: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
    latestMessage: {
        type: Schema.Types.ObjectId,
        ref: "Message"
    },
    isGroupChat: {
        type: Boolean,
        default: false,
        required: true
    },
    groupAdmin: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

const Chat = model("Chat", ChatSchema)

export default Chat