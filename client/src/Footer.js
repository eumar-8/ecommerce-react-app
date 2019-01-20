import React from "react";
import Media from "react-media";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <Media query="(min-width: 500px)">
          {matches =>
            matches ? (
              <div className="footer">
                <div className="footer-links">
                  {/* <a href="#"> */}
                  <i style={styles.icon} className="fab fa-github" />
                  {/* </a> */}
                  {/* <a href="#"> */}
                  <i style={styles.icon} className="fab fa-instagram" />
                  {/* </a> */}
                  {/* <a href="#"> */}
                  <i style={styles.icon} className="fab fa-facebook" />
                  {/* </a> */}
                  {/* <a href="#"> */}
                  <i style={styles.icon} className="fab fa-twitter" />
                  {/* </a> */}
                  {/* <a href="#"> */}
                  <i style={styles.icon} className="fab fa-linkedin" />
                  {/* </a> */}
                </div>
                <div className="footer-copyright">
                  This footer is made with <i className="fas fa-heart" /> by
                  Eugenia
                </div>
              </div>
            ) : (
              <div className="footer">
                <div className=" text-center footer-copyright">
                  This footer is made with <i className="fas fa-heart" /> by
                  Eugenia
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}

const styles = {
  icon: {
    paddingRight: 10
  }
};
