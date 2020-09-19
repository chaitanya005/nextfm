import React from "react";

const Sponsor = () => {
  return (
    <section className="partner sponsor" style={{ backgroundColor: "#151853" }}>
      <br />
      <div
        className="section-heading-2 text-center wow fadeInUp"
        data-wow-delay="300ms"
      >
        <p>Brands Behind Us</p>
        <h4>Our Great Sponsors</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="single-partner">
              <ul>
                <li>
                  <a href="https://talkpython.fm/exploiting" target="_blank">
                    {" "}
                    <img
                      style={{
                        borderRadius: "10px",
                      }}
                      src="../img/core-img/TalkPython_gt.png"
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.manning.com/?utm_source=affiliates&utm_medium=affiliates&a_aid=exploitchat"
                    target="_blank"
                  >
                    {" "}
                    <img
                      style={{ borderRadius: "10px" }}
                      src="../img/core-img/manning_logo_gt.png"
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a href="http://crio.do/" target="_blank">
                    {" "}
                    <img
                      style={{ borderRadius: "10px" }}
                      src="../img/core-img/crio_gt.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a href="/sponsor" className="btn-2">
        BECOME A SPONSOR
      </a>

      <br />
      <br />
    </section>
  );
};

export default Sponsor;
