import "./style-1980.css";

const Event1 = () => {
  return (
    <div id="1980" className="event-container panel-white">
      <div className="col-2">
        <div>
          <h1 className="eyebrow">A moment in history</h1>
          <h1 id="1980" className="maroon anchor">
            1980s
          </h1>
          <h2>XXX</h2>
          <p>
            Pretium nulla nisl at quis vel sed sit ut. Ornare eu eros consequat
            proin amet. Feugiat ut sem id vitae sagittis.Pretium nulla nisl at
            quis vel sed sit ut. Ornare eu eros consequat proin amet. Feugiat ut
            sem id vitae sagittis.
          </p>
        </div>
      </div>
      <div className="col-4">
        <video
          src="/src/assets/cloud-mountain.mp4"
          type="video/mp4"
          autoPlay="true"
          controls
          loop
          alt="Clouds blowing off a mountain."
        />
      </div>
    </div>
  );
};

export default Event1;
