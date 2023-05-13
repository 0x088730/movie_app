import "./LastFooter.css";
import $ from "jquery";

const LastFooter = () => {
  $("#toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  return (
    <>
      <div className="write__footer">
        <div className="container2 ">
          <span>
            © 2022 CinemyPlex. All Rights Reserved. Designed by{" "}
            <a href="https://jameswaweru.herokuapp.com/">James Waweru</a>.
          </span>
          <h6 href="w" className="scroll-to-top">
            <span id="toTop">Back to top &#8593;</span>
            <span className=""></span>
          </h6>
        </div>
      </div>
    </>
  );
};

export default LastFooter;
