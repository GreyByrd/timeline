import "./style-2020.css";

const Event12 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="content">
        <div className="col-3">
          <img src="#" />
        </div>
        <div className="col-1">
          <h1 className="year-sm">2025</h1>
          <h2>All-Around Achievement</h2>
          <p>
            <strong>Ella Brissett</strong> has made it her business to promote
            women in sports and education. As a student at CMC, she founded the
            Women’s Empowerment in Sports Club and was a peer mentor for Women
            in STEM. As a member of CMS Women’s Tennis, she played crucial roles
            in the team’s back-to-back national championships in 2022 and 2023.
            And in 2025, she was named the Division III women’s{" "}
            <a
              className="yellow-txt"
              href="https://cmsathletics.org/news/2025/11/5/womens-tennis-ella-brissett-earns-ncaa-impact-award-for-athenas-tennis.aspx"
              target="_blank"
              aria-label="Read CMS article about Ella (opens in new tab)"
            >
              winner of the NCAA Impact Award
            </a>
            , heralded as “the pinnacle of student-athlete recognition.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event12;
