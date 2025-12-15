import "./style-2020.css";

const Event3 = () => {
  return (
    <div className="event-container-sm panel-black">
      <section>
        <h1 className="honors-white">Alumni-in-Action</h1>
        <div className="profile-section">
          <div className="profile-mini">
            <p className="profile">
              <strong>August 29, 2022: Tamara Lawson ’92</strong> has been named
              the new dean of University of Washington School of Law.
            </p>
            <img
              className="profile"
              src="src/assets/profile-img.png"
              alt="Image."
            />
          </div>
          <div className="profile-mini">
            <img
              className="profile"
              src="src/assets/profile-img.png"
              alt="Image."
            />
            <p className="profile">
              <strong>March 7, 2024: Harriet Nembhard ’91</strong>{" "}
              <a className="yellow-txt" href="#">
                inaugurated president of Harvey Mudd College
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event3;
