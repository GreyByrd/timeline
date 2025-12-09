import "./style-1980.css";

const Event2 = () => {
  return (
    <div className="event-container panel-yellow">
      <div className="profile-content">
        <h1 className="date">July</h1>
        <h1 className="year">1983</h1>
        <p>
          <em>
            CMC received its single largest bequest in its history at the time:
            a $1.273m gift from the estate of the late Madeline Kaiser of
            Altadena, to be used to establish a scholarship fund in memory of
            her father.
          </em>
        </p>
      </div>
      <div className="col-2">
        <img
          className="event-1-image"
          src="src/assets/1970s_Collage_JackS.jpg"
          alt="Jack Stark."
        />
      </div>
      <img src="/src/assets/1980s_placeholder.png"></img>
    </div>
  );
};

export default Event2;
