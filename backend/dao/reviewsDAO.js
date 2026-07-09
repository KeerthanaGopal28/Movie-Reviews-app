import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO{
    static async injectDB(conn){
        if(reviews){
            return
        }
        try {
            reviews = await conn.db("reviews").collection("reviews")
        }
        catch(e){
             console.error(`Unable to establish collection handles in userDAO:${e}`)
        }
    }

    // static async addReview(movieId,user,review){
    //     try{
    //         const reviewDoc = {
    //             movieId,
    //             user: userId,
    //             username,
    //             review,
    //         }
    //         return await reviews.insertOne(reviewDoc);
    //     }
    //     catch(e){
    //         console.error.apply(`Unable to post review:${e}`)
    //         return {error: e}
    //     }
    // }
    
    const addReview = async () => {
  console.log("Button clicked");

  try {
    const res = await fetch(APILINK + "new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        review: newReview,
        movieId,
      }),
    });

    console.log("Status:", res.status);

    const data = await res.json();
    console.log("Response:", data);

    fetchReviews();
  } catch (err) {
    console.log(err);
  }
};

    static async getReview(reviewId){
        try{
            return await reviews.findOne({_id: new ObjectId(reviewId)})
        }
        catch(e){
            console.error.apply(`Unable to get review:${e}`)
            return {error: e}   
        }
    }
    
    static async updateReview(reviewId,user,review){
        try{
            return await reviews.updateOne(
            {
                _id: new ObjectId(reviewId),
                user: userId
            },
            {
                $set: {
                    review: review
                }
            }
        );    
        }
        catch(e){
            console.error.apply(`Unable to update review:${e}`)
            return {error: e}
        }
    }

    static async deleteReview(reviewId){
        try{
            return await reviews.deleteOne({
            _id: new ObjectId(reviewId),
            user: userId
        });
        }
        catch(e){
            console.error(`Unable to delete review: ${e}`);
            return { error: e}
        }
    }

    static async getReviewsByMovieId(movieId){
        try{
            const cursor = await reviews.find({movieId: parseInt(movieId)})
            return cursor.toArray();
        }
        catch(e){
            console.error(`Unable to get reviews by movie ID: ${e}`);
            return { error: e }
        }
    }


}