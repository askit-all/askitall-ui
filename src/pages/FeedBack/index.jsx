import { secured } from "api/interceptors";
import Header from "components/Header";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const FeedbackForm = () => {
  const history = useNavigate();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const [rating, setRating] = useState(5);
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mentorId } = useParams();
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let payload = {
      rating: rating,
      description: description,
      mentorId: mentorId,
    };

    
    if (rating < 3) {
      if (!description) {
        toast.error("Feedback content is required");
        return;
      }
    }

    setIsSubmitting(true);
    secured.post("/reviews", payload).then((response) => {
      toast.success("Feedback saved!", {
        icon: "👏",
      });
      history("/questionnaire");
    });

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[1rem] w-full responsive-view">
      <Header className="bg-orange_500 w-full" />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg sm:w-[300px] w-[500px]">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Feedback Form
        </h2>
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
            <label htmlFor="description" className="block font-semibold mb-2">
              Feedback:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={description}
              onChange={handleFeedbackChange}
              className="border border-gray-300 rounded-lg w-full px-3 py-2 mt-1 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
