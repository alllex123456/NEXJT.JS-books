import { createContext, useState } from 'react';

const FeedbackContext = createContext({
  feedback: null,
  showFeedback: (data) => {},
  hideFeedback: () => {},
});

export const FeedbackContextProvider = (props) => {
  const [feedback, setFeedback] = useState();

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
