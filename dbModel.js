import mongoose from 'mongoose';

const tiktokSchema = mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    messages:String,
    description:String,
    shares:String,
})
// collection inside the description
export default mongoose.model('tiktokVideos', tiktokSchema)