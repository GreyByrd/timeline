import "./style-2000.css";

const Event6 = () => {
  return (
    <div className="event-container panel-white">
      <div className="col-1">
        <h1 className="date">September 16</h1>
        <h1 className="year purple-txt">2005</h1>
        <h2>Student Excellence</h2>
        <p>
          <strong>Lisal Smith ’07</strong>, an economics major and CMC Female
          Athlete of the Year in 2004, won first-place in the master’s women’s
          division of the La Jolla Rough Water competition (her first ocean
          swim). Smith, who entered the race with a handful of past and present
          Athenas by her side, also finished first in her age group, beating out
          more than 370 swimmers in her division to claim victory in the
          one-mile race.
        </p>
      </div>
      <div className="col-2">
        <img src="src/assets/placeholder-collage.png" alt="Image." />
      </div>
      <div className="col-2">
        <p className="quote quote-purple">
          "I'm sure that everyone's intention was to have some fun with an ocean
          swim. Once the race starts, though, it gets competitive. If you put
          Athenas into a body of water, they'll try to find a way to come out
          victorious.
          <br />
          <span className="quote-name">
            <em>
              —CMS head swimming coach Charlie Griffiths said of the results
            </em>
          </span>
        </p>
        <br />
        <p className="quote quote-purple">
          Lisal's win is significant. The ocean swimming circuit in Southern
          California is incredibly competitive, with many ex-NCAA Division I
          swimmers competing. Most of the top-finishers are well into their 30s.
          <br />
          <span className="quote-name">
            <em>—Former CMS swimmer, Lou Caron ’80</em>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Event6;
