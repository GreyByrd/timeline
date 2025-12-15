import "./style-2010.css";

const Event6 = () => {
  return (
    <div className="event-container-wide panel-gray">
      <div className="col-4">
        <img
          className="fullwidth"
          src="/src/assets/fullwidth-placeholder.jpg"
        />
      </div>
      <div className="col-1">
        <img src="/src/assets/profile-img.png" />
        <h1 className="date">September 13</h1>
        <h1 className="year-sm maroon">2014</h1>
        <h2>
          <a href="#">From the Mountain to the Sea</a> installed
        </h2>
        <p>
          The artwork, the first public art installation by a woman,{" "}
          <a href="#">Mary Weatherford</a> is acquired and featured in CMCs
          signature program the Athenaeum.
        </p>
      </div>
    </div>
  );
};

export default Event6;
