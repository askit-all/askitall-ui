import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for feedback submission
      const response = await axios.post("YOUR_API_ENDPOINT", {
        rating: rating,
        feedback: feedback,
      });

      setSubmissionResult(response.data.message);
    } catch (error) {
      setSubmissionResult("Failed to submit feedback. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="rating" className="block font-semibold mb-2">
            Rating:
          </label>
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleRatingChange(value)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    value <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2l2.697 8.09L22 9.245l-6.182 4.682 1.636 6.088L12 17.314l-5.454 2.701 1.636-6.088L2 9.245l7.303 0.845L12 2z"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block font-semibold mb-2">
            Feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            value={feedback}
            onChange={handleFeedbackChange}
            className="border border-gray-300 rounded-lg w-full px-3 py-2 mt-1 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </button>
        {submissionResult && (
          <p className="mt-2 text-green-500 text-center">{submissionResult}</p>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
