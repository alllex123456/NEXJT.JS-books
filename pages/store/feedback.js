import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext({
  feedback: null,
  showFeedback: (data) => {},
  hideFeedback: () => {},
});

export const FeedbackContextProvider = (props) => {
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    if (
      feedback &&
      (feedback.status === 'success' || feedback.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setFeedback(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const showFeedbackHandler = (data) => {
    setFeedback(data);
  };

  const hideFeedbackHandler = () => {
    setFeedback(null);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        showFeedback: showFeedbackHandler,
        hideFeedback: hideFeedbackHandler,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
