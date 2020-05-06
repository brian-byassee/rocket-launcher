//Created File
import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Rocket = ({ width, height, launchSuccessful, launchStatus }) => {
  const successProps = useSpring({
    config: { duration: 500 },
    to: async (next, cancel) => {
      await next({
        position: "absolute",
        bottom: 325,
        left: 325,
        transform: "rotate(45deg)"
      });
      await next({
        position: "absolute",
        bottom: 350,
        left: 350,
      });
      await next({
        position: "absolute",
        bottom: 375,
        left: 375,
      });
      await next({
        position: "absolute",
        bottom: 400,
        left: 400,
      });
      await next({
        position: "absolute",
        bottom: 425,
        left: 425,
      });
      await next({
        position: "absolute",
        bottom: 450,
        left: 450,
        transform: "rotate(90deg)"
      });
      await next({
        position: "absolute",
        bottom: 425,
        left: 455,
        transform: "rotate(95deg)"
      });
      await next({
        position: "absolute",
        bottom: 400,
        left: 460,
        transform: "rotate(100deg)"
      });
      await next({
        position: "absolute",
        bottom: 375,
        left: 465,
        transform: "rotate(110deg)"
      });
      await next({
        position: "absolute",
        bottom: 350,
        left: 475,
        transform: "rotate(120deg)"
      });
      await next({
        position: "absolute",
        bottom: 325,
        left: 475,
        transform: "rotate(130deg)"
      });
      await next({
        position: "absolute",
        bottom: 300,
        left: 465,
        transform: "rotate(135deg)"
      });
      await next({
        position: "absolute",
        bottom: 275,
        left: 460,
        transform: "rotate(140deg)"
      });
      await next({
        position: "absolute",
        bottom: 250,
        left: 455,
        transform: "rotate(145deg)"
      });
    },
    from: {
      position: "absolute",
      bottom: 300,
      left: 300,
      transform: "rotate(45deg)"
    }
  });

  const failureProps = useSpring({
    config: { duration: 1000 },
    to: async (next, cancel) => {
      await next({
        position: "absolute",
        bottom: 100,
        left: 100,
        transform: "rotate(45deg)"
      });
      await next({
        position: "absolute",
        bottom: 200,
        left: 300,
        transform: "rotate(90deg)"
      });
      await next({
        position: "absolute",
        bottom: 300,
        left: 300,
        transform: "rotate(90deg)"
      });
    },
    from: {
      position: "absolute",
      bottom: 300,
      left: 300,
      transform: "rotate(45deg)"
    }
  });

  return (
    <div className="Rocket" >
      {launchStatus === 'grounded' && <div className="grounded-rocket"><FontAwesomeIcon icon={faRocket} /></div>}
      {
        launchStatus === 'launched' && (
          <animated.div style={launchSuccessful ? successProps : failureProps}>
            <div className="launched-rocket">
              <FontAwesomeIcon icon={faRocket} />
            </div>
          </animated.div>
        )
      }
    </div >
  );
};

Rocket.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  launchSuccessful: PropTypes.bool.isRequired,
  launchStatus: PropTypes.string.isRequired,
}

export default Rocket;
