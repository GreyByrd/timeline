import "./style-1990.css";
import tanya from "../../../assets/1990-profile-tanya.png";

const Event8 = () => {
  return (
    <div className="event-container">
      <div className="content-container">
        <div className="col-3">
          <h1 className="date">May</h1>
          <h1 className="year-sm yellow-txt">1994</h1>
          <h2>Doctor for the people</h2>
          <p>
            When she graduated from CMC in 1994,{" "}
            <strong>Tanya (Remer) Altmann</strong> knew she wanted to practice
            medicine. She didn’t know that she would go on to be one of the most
            recognizable pediatricians in the country. In addition to regular
            appearances on major media outlets, Dr. Altmann also consults with
            companies on the design and marketing of products for children,
            serves as a spokesperson for the American Academy for Pediatrics,
            and also serves on the board of the CMC Alumni Association. “It is
            just what CMCers do,” she said. “I think we are all trying to make a
            difference in the world in our own way.”
          </p>
          <a
            className="yellow-txt"
            href="https://www.cmc.edu/news/dr-tanya-altmann-combines-media-medicine-to-educate-about-childrens-health"
            target="_blank"
          >
            <p>Read more about Dr. Altmann</p>
          </a>
        </div>
        <div className="col-2">
          <img src={tanya}></img>
        </div>
      </div>
    </div>
  );
};

export default Event8;
