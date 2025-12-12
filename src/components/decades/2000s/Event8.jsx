import "./style-2000.css";

const Event8 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="col-2">
        <div>
          <h1 className="date">April 8</h1>
          <h1 className="year purple-txt">2006</h1>
          <h2>Notable Speakers</h2>
          <p>
            Kenyan environmentalist and political activist{" "}
            <strong>Wangari Maathai</strong>, winner of the 2004 Nobel Peace
            Prize and first African woman to win the Nobel Prize for her
            "contribution to sustainable development, democracy, and peace,
            visits the Marian Miner Cook Athenaeum for her presentation,
            "Sustainable Development, Democracy, and Peace: A Critical Link."
          </p>
        </div>
        <p className="caption-alt">
          The Marian Miner Cook Athenaeum has been hosted several notable
          figures such as <a href="#">XYZ</a> and <a href="#">ABC</a>.{" "}
          <a href="#">See more xxxxx</a>
        </p>
      </div>
      <div className="col-3">
        <img src="src/assets/placeholder.png" alt="Image." />
      </div>
    </div>
  );
};

export default Event8;
