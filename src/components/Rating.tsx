import { useState } from "react";
import styles from "./Rating.module.css";

export function Rating() {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleRatingClicked(rating: number) {
    setSelectedRating(rating);
  }

  function handleFormSubmitted(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
  }
  return isSubmitted ? (
    <div className={styles["thank-you-panel"]}>
      <img src="../public/images/illustration-thank-you.svg" />
      <p className={styles.selected}>You selected {selectedRating} out of 5</p>
      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.description}>We appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!</p>
    </div>
  ) : (
    <form onSubmit={(handleFormSubmitted) => setIsSubmitted(true)} className={styles.panel}>
      <img className={styles.star} src="../public/images/icon-star.svg" alt="star" />
      <h1 className={styles.title}>how did we do?</h1>
      <p className={styles.description}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      {/* {selectedRating} */}
      <div className={styles.list}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button type="button" onClick={() => handleRatingClicked(rating)} className={styles.rank}>
            {rating}
          </button>
        ))}
        {/* <button onClick={} className={styles.rank}>
          2
        </button>
        <button onClick={} className={styles.rank}>
          3
        </button>
        <button onClick={} className={styles.rank}>
          4
        </button>
        <button onClick={} className={styles.rank}>
          5
        </button> */}
      </div>
      <button disabled={selectedRating === undefined} className={styles.submit}>
        Submit
      </button>
    </form>
  );
}
