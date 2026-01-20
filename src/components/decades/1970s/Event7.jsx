import "./style-1970.css";

const Event7 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="col-2">
        <h1 className="date">March</h1>
        <h1 className="year purple-txt">1976</h1>
        <h2>First women on campus</h2>
      </div>
      <div className="col-3">
        <img
          src="src/assets/1970s_Kathleen-campus.gif"
          alt="Collage of images related to Kathleen Evans early time on campus."
        />
        <p className="caption">
          Coeducation is official, and Kathleen Evans Hurley ’80 P’07 from
          Colorado is the first woman to be admitted and enroll at CMC. “Miss
          Evans typifies the student Claremont Men’s College strives to admit,”
          said President Stark in a{" "}
          <a
            href="https://cmcarchives.omeka.net/items/show/198"
            target="_blank"
            aria-label="CMC Archives (open in new tab)"
          >
            press release
          </a>
          . “She is an excellent student, goal oriented, and highly motivated.
          We are all delighted she will be attending CMC in the fall.” Hurley
          would go on excel as an Economics major and all-Southern California
          Intercollegiate Athletics Conference athlete.
        </p>
      </div>
    </div>
  );
};

export default Event7;
