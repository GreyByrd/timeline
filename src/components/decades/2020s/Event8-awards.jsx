import "./style-2020.css";
import awardees from "../../../assets/2020-profile-awardees.png";

const Event8 = () => {
  return (
    <div className="event-container">
      <div className="content">
        <div className="col-3">
          <h1 className="date">May 25</h1>
          <h1 className="year-sm yellow-txt">2022</h1>
          <h2>Public Service</h2>
          <p>
            <strong>Ivanna Morales Mercado ’25</strong> and{" "}
            <strong>Alejandra Vázquez Baur ’17</strong> were{" "}
            <a
              className="yellow-txt"
              href="https://www.cmc.edu/newsfeed/emerging-cmc-leaders-honored-obama-foundation"
              target="_blank"
              aria-label="Read article: Emerging CMC leaders honored by Obama Foundation"
            >
              named to national scholarship programs
            </a>{" "}
            sponsored by the Obama Foundation. Mercado became the first woman
            and second CMCer in history to receive the Voyager Scholarship for
            Public Service from the Obama Foundation. Baur was selected in the
            inaugural cohort of the Obama Foundation Leaders USA program which
            supports “values-driven changemakers” in acquiring new skills and
            tools to accelerate change in their communities. Two years later,{" "}
            <strong>Annabel Chung ’27</strong> became the second woman to{" "}
            <a
              className="yellow-txt"
              href="https://www.cmc.edu/newsfeed/emerging-cmc-leaders-honored-obama-foundation"
              target="_blank"
              aria-label="Read article about Annabel Chung's scholarship win (opens in new tab)"
            >
              earn an Obama-Chesky Scholarship
            </a>{" "}
            for Public Service.
          </p>
        </div>
        <div className="col-3">
          <img src={awardees} />
        </div>
      </div>
    </div>
  );
};

export default Event8;
