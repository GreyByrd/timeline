import "./style-2020.css";

const Event10 = () => {
  return (
    <div className="event-container event-narrative panel-maroon">
      <h1 className="year-sm">2023</h1>
      <h2>Obama Foundation</h2>
      <p>
        <a href="#">Learn more about the recipients</a>
      </p>
      <div className="col-2">
        <img src="/src/assets/profile-img.png" />
        <p>
          <strong>Ivanna Morales Mercado ’25</strong> receives Voyager
          Scholarship from Obama Foundation
        </p>
      </div>
      <div className="col-2">
        <img src="/src/assets/profile-img.png" />
        <p>
          <strong>Alejandra Vázquez Baur ’17</strong> named to inaugural cohort
          of Obama Foundation Leaders USA program
        </p>
      </div>
    </div>
  );
};

export default Event10;
