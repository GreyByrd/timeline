import "./style-2020.css";
import WE2020 from "../../../assets/World-Event-2020.gif";

const Event1 = () => {
  return (
    <div className="event-container wide panel-white">
      <div className="content">
        <div className="col-3">
          <div>
            <h1 className="eyebrow">A moment in history</h1>
            <h1 className="yellow-txt">2020s</h1>
            <p>
              After decades of constant global expansion, the first few months
              of the 2020s shrank the world back to four walls and a
              video-conference screen. The COVID-19 pandemic upended cultural
              assumptions about work, school, and family and unleashed a torrent
              of innovation across a range of economic sectors. At the same
              time, shocking moments of violence, including the May 2020 murder
              of George Floyd, elevated important conversations on racism and
              justice, and Russia’s invasion of Ukraine in 2022 strained global
              relationships. The re-election of Donald Trump in 2024, along with
              other rightward shifts around the globe, showed that assumptions
              about government were also due for a recalibration.
            </p>
            <p>
              At CMC, the recalibration that began in 1976 continued to pay
              dividends through the first half of the 2020s. Women lead in
              business, government, the professions, the liberal arts, and
              higher education, distinguishing themselves and the CMC community
              through their actions and achievements.
            </p>
          </div>
        </div>
        <div className="col-3">
          <img
            src={WE2020}
            alt="Depictions of 2020 events like the pandemic impact."
          />
        </div>
      </div>
    </div>
  );
};

export default Event1;
