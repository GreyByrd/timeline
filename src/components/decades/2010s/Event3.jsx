import "./style-2010.css";

const Event3 = () => {
  return (
    <div className="event-container panel-white">
      <div className="col-3">
        <h1 className="date">January</h1>
        <h1 className="year purple-txt">2011</h1>
        <h2>Student Excellence</h2>
        <p>
          <strong>January 2011: Priscilla Hsu ’13</strong> and{" "}
          <strong>Anne Rynearson ’13</strong> create first Myths, Legends, and
          Tall Tales (MLTT), an amusing, fascinating, and occasionally inspiring
          collection of alumni stories. The Office of Annual Giving gave the
          book to donors for Valentine's Day.
        </p>
        <p className="quote quote-maroon">
          One of the best parts of working on this book...was having the
          opportunity to talk to all these alumni who were interested in what
          was happening at the college, and even interested in my personal
          plans. The conversations I had while working on the book allowed me to
          realize that I was connected to generations of alumni through a shared
          CMC experience.”
          <br />
          <span className="quote-name">—Priscilla Hsu ’13</span>
        </p>
      </div>
      <div className="col-2">
        <img src="src/assets/placeholder-collage-02.png" alt="Image." />
      </div>
    </div>
  );
};

export default Event3;
