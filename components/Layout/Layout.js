import { Fragment, useContext } from 'react';
import MainHeader from './MainHeader';
import Feedback from '../UI/Feedback';
import FeedbackContext from '../../pages/store/feedback';

const Layout = (props) => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {feedback && (
        <Feedback
          title={feedback.title}
          message={feedback.message}
          status={feedback.status}
        />
      )}
    </Fragment>
  );
};

export default Layout;
