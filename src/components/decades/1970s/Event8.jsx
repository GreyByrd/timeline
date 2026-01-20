import "./style-1970.css";

const Event8 = () => {
  return (
    <div className="event-container">
      <div className="col-3">
        <img
          className="event-1-image"
          src="/src/assets/1970s-newspaper.png"
          alt="Newspaper outlets detailed the decision for Claremont McKenna to become co-ed."
        />
      </div>
      <div className="col-2">
        <h1 className="date">March</h1>
        <h1 className="year purple-txt">1976</h1>
        <p>
          With its first co-ed orientation, the fall semester of the 1976-77
          academic year marks the end of CMC’s 30-year history as a mens-only
          institution. The first 60 women of CMC made up fewer than 15 percent
          of the incoming class and resided in Wohlford, Benson, and Claremont
          Halls. The Starks’ warmth and welcoming attitude helped these
          trailblazers adjust to life on campus.
        </p>
        <p>
          Read a{" "}
          <a
            href="https://cmcarchives.omeka.net/exhibits/show/notformenonly/item/235"
            target="_blank"
            aria-label="CMC Co-education Archive (opens in new tab)"
          >
            list of arguments in favor and opposed to co-education
          </a>{" "}
          from January, 1974
        </p>
      </div>
      <p className="quote quote-white">
        <em>
          “Jil, particularly, was very active in her support. She wanted to make
          sure that no one felt like they were in the corner.”
        </em>
        <br />
        <span className="quote-name">—Meridith (Ulmann) Brenalvirez ’80</span>
      </p>
    </div>
  );
};

export default Event8;
