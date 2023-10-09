import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Topic = mongoose.models.topic || mongoose.model("topic", topicSchema);

export default Topic;