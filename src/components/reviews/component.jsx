export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              {review.user} | {review.text} | {review.rating}
            </li>
          )
        })}
      </ul>
    </>
  )
}
