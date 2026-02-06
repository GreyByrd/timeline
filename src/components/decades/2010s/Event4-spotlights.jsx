import "./style-2010.css";
import spotlight from "../../../assets/2010-profile-takako-kristin.png";

const Event4 = () => {
  return (
    <div className="event-container">
      <div className="content">
        <div className="col-1">
          <h1 className="date">March</h1>
          <h1 className="year-sm maroon-txt">2011</h1>
          <h2>Creativity at Work</h2>
          <p>
            International Relations major <strong>Takako Mino '11</strong> won
            the inaugural Napier Award for Creative Leadership that helped
            expand her humanitarian efforts and nascent student debate program
            in East and Central Africa. Mino was one of two students from The
            Claremont Colleges to receive the inaugural award, which carried a
            cash grant of $10,000.
          </p>
        </div>
        <div className="col-3">
          <img src={spotlight} alt="Takako Mino ’11" />
        </div>
        <div className="col-1">
          <h1 className="date">January</h1>
          <h1 className="year-sm maroon">2012</h1>
          <h2>Award-Winning Student</h2>
          <p>
            CMC student-athlete <strong>Kristin Lim</strong> was nominated for
            the Honda Award in NCAA Division III tennis. Lim was the first CMC
            student-athlete to be nominated for this recognition, which is given
            annually for outstanding athletic achievement and leadership,
            academic excellence and community involvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event4;
