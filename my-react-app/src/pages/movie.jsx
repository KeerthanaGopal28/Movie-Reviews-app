import { useEffect, useState } from "react";

const APILINK =
  "https://movie-reviews-fullstack-app.onrender.com/api/v1/reviews/";

export default function Movie() {
  const url = new URL(window.location.href);
  const movieId = url.searchParams.get("id");
  const movieTitle = url.searchParams.get("title");

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newUser, setNewUser] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editReview, setEditReview] = useState("");
  const [editUser, setEditUser] = useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const res = await fetch(APILINK + "movie/" + movieId);
    const data = await res.json();
    setReviews(data);
  };

  const addReview = async () => {
    await fetch(APILINK + "new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: newUser,
        review: newReview,
        movieId,
      }),
    });

    setNewReview("");
    setNewUser("");
    fetchReviews();
  };

  const updateReview = async (id) => {
    await fetch(APILINK + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: editUser,
        review: editReview,
      }),
    });

    setEditingId(null);
    fetchReviews();
  };

  const deleteReview = async (id) => {
    await fetch(APILINK + id, {
      method: "DELETE",
    });

    fetchReviews();
  };

  return (
    <>
      <div className="topnav">
        <a className="active" href="/">
          Movies Site
        </a>
      </div>

      <h1>Reviews for:</h1>
      <h3>{movieTitle}</h3>

      <section id="section">
  <div className="row">
    <div className="column">
      <div className="card">
        <h3>New Review</h3>

        <p>
          <strong>Review:</strong>
        </p>
        <input
          type="text"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />

        <p>
          <strong>User:</strong>
        </p>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />

        <br />
        <br />

        <button onClick={addReview}>Save</button>
      </div>
    </div>

    {reviews.map((review) => (
      <div className="column" key={review._id}>
        <div className="card">
          {editingId === review._id ? (
            <>
              <p>
                <strong>Review:</strong>
              </p>

              <input
                type="text"
                value={editReview}
                onChange={(e) => setEditReview(e.target.value)}
              />

              <p>
                <strong>User:</strong>
              </p>

              <input
                type="text"
                value={editUser}
                onChange={(e) => setEditUser(e.target.value)}
              />

              <br />
              <br />

              <button
                onClick={() => updateReview(review._id)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <h3>{movieTitle}</h3>

              <p>
                <strong>Review:</strong>
                <br />
                {review.review}
              </p>

              <p>
                <strong>User:</strong>
                <br />
                {review.user}
              </p>

              <button
                onClick={() => {
                  setEditingId(review._id);
                  setEditReview(review.review);
                  setEditUser(review.user);
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteReview(review._id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
    </>
  );
}