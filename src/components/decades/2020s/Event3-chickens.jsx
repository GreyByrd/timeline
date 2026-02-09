import "./style-2020.css";

const Event3 = () => {
  return (
    <div className="event-container panel-black">
      <div className="content">
        <div className="col-3">
          <h1 className="date">Fall</h1>
          <h1 className="year-sm white-txt">2020</h1>
          <h2>Healthy Food</h2>
          <p>
            After studying Economics and Government at CMC,{" "}
            <strong>Alice Chang '15</strong> and{" "}
            <strong>Sara Linssen ’16</strong> found themselves in an unlikely
            enterprise: Supplying purpose-bred chickens to farmers in East
            Africa. The socially minded graduates built on their coursework,
            experiences at CMC, and student consulting work to lead Uzima
            Chicken Rwanda and Uganda and open new avenues for food resiliency
            in Rwanda, Uganda, and Kenya.
          </p>
          <a
            className="yellow-txt"
            href="https://www.cmc.edu/newsfeed/alice-chang-15-and-sara-linssen-16-sell-chickens-fight-poverty-east-africa"
            target="_blank"
            aria-label="Read article: Alice Chang ’15 and Sara Linssen ’16 sell chickens, fight poverty in East Africa (opens in new tab)"
          >
            <p>Read their story</p>
          </a>
        </div>
        <div className="col-3">
          <img src="src/assets/profile-img.png" alt="Image." />
        </div>
      </div>
    </div>
  );
};

export default Event3;
