import "./style-2010.css";
import mountain from "../../../assets/2010-mountain-to-sea.jpg";
import mary from "../../../assets/mary-weatherford-headshot.png";

const Event8 = () => {
  return (
    <div className="event-container-wide panel-gray">
      <div className="content">
        <div className="col-4">
          <img className="red-outline" src={mountain} />
        </div>
        <div className="col-1">
          <img src={mary} />
          <p>
            <em>Photo by Antony Hoffman courtesy of Gagosian.</em>
          </p>
          <h1 className="date">September 13</h1>
          <h1 className="year-sm maroon">2014</h1>
          <h2>
            <a href="#">From the Mountain to the Sea</a> installed
          </h2>
          <p>
            The artwork, the first public art installation by a woman,{" "}
            <a
              href="https://www.cmc.edu/public-art/mary-weatherford-%E2%80%9Cfrom-mountain-to-sea%E2%80%9D"
              target="_blank"
              aria-label="CMC Public Art: Mary Weatherford"
            >
              Mary Weatherford
            </a>{" "}
            is acquired and featured in CMCs signature program the Athenaeum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event8;
