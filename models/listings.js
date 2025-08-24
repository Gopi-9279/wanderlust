const mongoose = require("mongoose");
const review = require("./review");

const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title :{
        type: String,
        required : true,
    },
    description : String ,
    image :{ 
        url: String,
        filename : String,
        
    },
    price : Number,
    location : String,
    country : String,
    reviews : [
    {
        type : Schema.Types.ObjectId,
        ref : "Review",
    }
    ],
    owner :{
      type : Schema.Types.ObjectId,
      ref : "user",
    },
    geometry :{
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  
    }
})
// agar listing ke sath ham reviews ko bhi delete karna chahte hai to steps and method niche hai

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await review.deleteMany({_id   : {$in : listing.reviews}});
  }
  
})



const listing = mongoose.model("listing",listingSchema);
module.exports = listing;