import "./style-2000.css";

const Event3 = () => {
  return (
    <div className="event-container panel-white">
      <div className="col-2">
        <div>
          <h1 className="date">January</h1>
          <h1 className="year purple-txt">2011</h1>
          <h2>Student Excellence</h2>
          <p>
            <strong>March 16: Suzy Nicoletti ’02</strong> becomes the first CMS
            women’s national champion. She was awarded the Avery scholarship to
            swim in China to study first-hand what the country’s rigorous swim
            institutes are like.
          </p>
        </div>
      </div>
      <img src="src/assets/placeholder-collage.png" alt="Image." />
      <p className="quote quote-maroon">
        One of the best parts of working on this book...was having the
        opportunity to talk to all these alumni who were interested in what was
        happening at the college, and even interested in my personal plans. The
        conversations I had while working on the book allowed me to realize that
        I was connected to generations of alumni through a shared CMC
        experience.”
        <span className="quote quote-maroon">—Priscilla Hsu 13</span>
      </p>
    </div>
  );
};

export default Event3;
