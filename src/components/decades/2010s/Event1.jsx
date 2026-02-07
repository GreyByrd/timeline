import "./style-2010.css";
import WE2010 from "../../../assets/World-Event-2010.gif";

const Event1 = () => {
  return (
    <div id="2010" className="event-container wide panel-white">
      <div className="content">
        <div className="col-3">
          <h1 className="eyebrow">A moment in history</h1>
          <h1 className="maroon-txt">2010s</h1>
          <p>
            If the Internet started as a superhighway, by the 2010s it had
            accelerated to warp speed. From their launch, the iPhone and
            Android-compatible handsets drove new changes in friendships,
            family, and business. The cultural shifts were tectonic, prompting
            the American Dialect Society to choose “app” as their Word of the
            year 2010. By August 2018, Apple had broken through to become the
            world’s first company valued at more than $1 trillion. Yet as new
            possibilities for connection came to life, society also grew more
            isolated, with social media companies, global political parties, and
            traditional institutions all taking blame for breaking down
            traditional connections between peoples. The “Brexit” vote in the
            United Kingdom and election of Donald Trump as U.S. President in
            2016 crystallized the salience of inequality and protectionism as
            political forces in the second half of the decade.
          </p>
          <p>
            These trends were present at CMC as well, as the College continued
            its educational leadership in business, government, and the
            professions. Research institutes, faculty, and students all engaged
            in understanding the impact of these shifts on women, men, and
            society.
          </p>
        </div>
        <div className="col-3">
          <img
            src={WE2010}
            alt="Collage featuring smart phones and graffiti concerning Brexit."
          />
        </div>
      </div>
    </div>
  );
};

export default Event1;
