import "./style-1990.css";
import christine from "../../../assets/1990-profile-christine-w.png";

const Event5 = () => {
  return (
    <div className="event-container small">
      <div className="content">
        <div className="col-3">
          <img
            src={christine}
            alt="Christine Huddleson at CMC and present day."
          />
        </div>
        <div className="col-3">
          <h2>Student Leader</h2>
          <p>
            <strong>Christine (Wight) Huddleson ’91</strong> was the first
            female president of the Associated Students of CMC — and she was no
            stranger to the symbolism of her service. “One benefit to being the
            first female ASCMC president was the chance to help overcome some of
            the lingering stereotypes about CMC as a male-dominated campus,” she
            told authors of a CMC history retrospective in 2021. When she
            received a letter of congratulations from Timothy Donahoe ’74, she
            recognized how he played a role in making her service possible. “He
            had been student body president and a student representative on the
            Board of Trustee committee that evaluated the ramifications of CMC
            becoming co-ed – and ultimately recommended the admission of women,”
            she said. It was a sign that those who made a co-ed CMC a reality
            had “remained so engaged and supportive of women in our campus
            community.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event5;
