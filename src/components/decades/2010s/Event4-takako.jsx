import "./style-2010.css";

const Event4 = () => {
  return (
    <div className="event-container panel-maroon">
      <div className="content">
        <div className="col-3">
          <h1 className="date white-txt">March</h1>
          <h1 className="year-sm white-txt">2011</h1>
          <h2>Header</h2>
          <p>
            International Relations major <strong>Takako Mino '11</strong> won
            the{" "}
            <a
              href="https://www.cmc.edu/news/takako-mino-11-wins-inaugural-napier-creative-leadership-award"
              target="_blank"
              aria-label="Read article: Takako Mino '11 Wins Inaugural Napier Creative Leadership Award"
            >
              inaugural Napier Award for Creative Leadership
            </a>{" "}
            that helped expand her humanitarian efforts and nascent student
            debate program in East and Central Africa. Mino was one of two
            students from The Claremont Colleges to receive the inaugural award,
            which carried a cash grant of $10,000.
          </p>
        </div>
        <div className="col-3">
          <img src="src/assets/1980s-placeholder-duo.png" alt="Image." />
        </div>
      </div>
    </div>
  );
};

export default Event4;
