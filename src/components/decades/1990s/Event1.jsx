import "./style-1990.css";
import WE1990 from "../../../assets/World-Event-1990.gif";

const Event1 = () => {
  return (
    <div className="event-container-wide panel-white">
      <div className="content">
        <div className="col-3">
          <h1 className="eyebrow">A moment in history</h1>
          <h1 className="yellow-txt">1990s</h1>
          <p>
            The fall of the Iron Curtain and the collapse of Communism showed
            that the 1990s would be a time of quickening change. The world
            watched as Los Angeles erupted in race-related violence in 1992, a
            stark reminder of the price of discrimination. The founding of the
            European Union spoke of an increased focus on global interconnection
            and cooperation, even as the first impeachment of a U.S. President
            in 130 years showed how politics was still a full-contact sport. On
            the playing field, the “Dream Team” U.S. men’s basketball team, the
            Women’s World Cup, and the Summer Olympics in Atlanta highlighted
            the U.S.’s indomitable position as a sports powerhouse, and yet the
            bombing at that same Olympics and the shooting at Columbine High
            School showed tragedy could come without notice. And in the world of
            technology, the arrival of the first Web browser and the launch of
            Google and Amazon laid the path for the “Information Superhighway.”
          </p>
        </div>
        <div className="col-3">
          <img src={WE1990} />
        </div>
      </div>
    </div>
  );
};

export default Event1;
