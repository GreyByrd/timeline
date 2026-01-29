import "./style-1970.css";
import WE1970 from "../../../assets/World-Event-1970.gif";

const Event1 = () => {
  return (
    <div id="1970" className="event-container">
      <div className="content-container">
        <div className="col-2">
          <h1 className="eyebrow">A moment in history</h1>
          <h1 className="purple-txt">1970s</h1>
          <h2>The age of change</h2>
          <p>
            Times were changing. People were changing. Our nation and our world
            were changing. A rise in airline travel connected people like never
            before and global citizens were created. Congress approved the Equal
            Rights Amendment to the U.S. Constitution, advancing a conversation
            across the country about the status of women in society. With the
            landmark Roe v. Wade decision at the Supreme Court, a new framework
            for women’s rights was taking shape.
          </p>
        </div>
        <div className="col-4">
          <img src={WE1970} />
        </div>
      </div>
    </div>
  );
};

export default Event1;
