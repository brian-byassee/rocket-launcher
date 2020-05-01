import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Rocket = ({ width, height, launchSuccessFail, launchStatus }) => {
  const successProps = useSpring({
    to: async (next, cancel) => {
      await next({
        duration: 2000,
        position: "absolute",
        bottom: 350,
        left: 350,
        transform: "rotate(45deg)"
      });
      await next({
        duration: 2000,
        position: "absolute",
        bottom: 450,
        left: 450,
        transform: "rotate(90deg)"
      });
    },
    from: {
      duration: 2000,
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
        bottom: 350,
        left: 350,
        transform: "rotate(45deg)"
      });
      await next({
        position: "absolute",
        bottom: 500,
        left: 500,
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
          <animated.div style={launchStatus === 'success' ? successProps : failureProps}>
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
  launchSuccessFail: PropTypes.string.isRequired,
  launchStatus: PropTypes.string.isRequired,
}

export default Rocket;
