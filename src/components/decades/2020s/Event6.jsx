import "./style-2020.css";

const Event6 = () => {
  return (
    <div className="event-container-sm panel-black">
      <section>
        <h1 className="honors-white">Faculty Excellence</h1>
        <div className="profile-section">
          <div className="profile-mini">
            <p className="profile">
              <strong>2022:</strong> CMC <strong>Prof. Jennifer Feitosa</strong>
              has joined an elite cadre, having recently been recognized with a
              prestigious U.S. Scholar Fulbright grant.
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
              <strong>November 7, 2023: Professor Emily Wiley</strong> earns
              Fulbright Scholar Award.
            </p>
          </div>
          <div className="profile-mini">
            <p className="profile">
              <strong>2024: Emerita Professor Nita Kumar</strong>is awarded a
              Guggenheim Fellowship to research and write a social history of an
              Indian family.
            </p>
            <img
              className="profile"
              src="src/assets/profile-img.png"
              alt="Image."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event6;
