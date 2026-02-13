import "./style-2020.css";
import rhodes01 from "../../../assets/2020-profile-sara-chen.png";

const Event5 = () => {
  return (
    <div className="event-container panel-white">
      <div className="content">
        <div className="col-3">
          <img src={rhodes01} alt="Sarah Chen ’22." />
        </div>
        <div className="col-3">
          <div>
            <h1 className="date">November</h1>
            <h1 className="year-sm yellow-txt">2021</h1>
            <h2>International Acclaim</h2>
            <p>
              <strong>Sarah Chen ’22</strong> became the first woman and third
              CMCer to be awarded a Rhodes Scholarship, recognized as the most
              competitive and prestigious scholarship in the world. A
              Philosophy, Politics, and Economics and International Relations
              dual major, Chen studied the emerging discipline of strategic
              wargaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event5;
