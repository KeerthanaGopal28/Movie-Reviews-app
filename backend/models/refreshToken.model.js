import mongoose from "mongoose";

const refreshTokenSchema = new mangoose.Schema({
    user: {
        type: mangoose.Schema.Types.ObjectId,
        ref: "User",
        index: true
    },
    tokenHash: {
        type: String,
        required: true,
        unique: true
    },
    jti: {
        type: String,
        required: true,
        index: true
    },
    expiresAt: {
        type: Date,
        required: true,
        index: true
    },
    revokedAt: {
        type: Date,
        default: null
    },
    replacedBy: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    ip: String,
    userAgent: String
});

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

export default RefreshToken;