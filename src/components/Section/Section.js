import { FeedbackList } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <FeedbackList>
      <h2>{title}</h2>
      {children}
    </FeedbackList>
  );
};

export default Section;
