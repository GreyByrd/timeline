import "./style-2010.css";

const Event3 = () => {
  return (
    <div className="event-container panel-white">
      <div className="content">
        <div className="col-3">
          <h1 className="date">January</h1>
          <h1 className="year purple-txt">2011</h1>
          <h2>Tales to Tell</h2>
          <p>
            <strong>Priscilla Hsu ’13</strong> and{" "}
            <strong>Anne Rynearson ’13</strong> created the first edition of{" "}
            <em>Myths, Legends, and Tall Tales</em>, an amusing, fascinating,
            and occasionally inspiring collection of alumni stories. The book
            would become a Valentine's Day gift for the College’s supporters for
            a number of years.
          </p>
        </div>
        <div className="col-2">
          <img src="src/assets/placeholder-collage-02.png" alt="Image." />
        </div>
      </div>
    </div>
  );
};

export default Event3;
