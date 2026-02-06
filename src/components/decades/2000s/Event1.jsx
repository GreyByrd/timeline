import "./style-2000.css";
import WE2000 from "../../../assets/Wolrd-Event-2000.gif"

const Event1 = () => {
  return (
    <div id="2000" className="event-container wide panel-white">
      <div className="col-3">
        <div>
          <h1 className="eyebrow">A moment in history</h1>
          <h1 className="purple-txt">2000s</h1>
          <p>
            Fears of the “Y2K” bug notwithstanding, the world entered the 2000s
            with widespread global growth. Double-digit growth in India and
            China drove emerging markets into the forefront, challenging
            long-held beliefs in business and economics. These changes grew
            during the Great Recession of 2008, upending mortgages, bankrupting
            businesses, and slowing global growth for the end of the decade. The
            shocking terrorist attacks of Sept. 11, 2001, ignited military
            action in Afghanistan and Iraq, reorienting our understanding of
            national security and creating a new generation of veterans affected
            by global conflict. We began to consume our news and entertainment
            online, with social media and online video beginning a fragmentation
            of the media world that has only accelerated. On Jan. 20, 2009,
            Barack Obama began his first term as President of the United States,
            demonstrating that leadership came in many colors.
          </p>
          <p>
            At CMC, the first decade of the third millennium A.D. saw increased
            opportunity for women as students, alumnae, and leaders at the
            College. The years also saw CMC’s current landscape take shape, as
            the Kravis Center began to rise in place of Pitzer Hall.
          </p>
        </div>
      </div>
      <div className="col-3">
        <img src={WE2000} alt="Collage featuring events of 2000, such as the Occupy recession protest of 2008 and the Twin Towers memorial park." />
      </div>
    </div>
  );
};

export default Event1;
