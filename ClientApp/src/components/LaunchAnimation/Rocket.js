import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Rocket = ({ width, height, launchSuccessFail, launchStatus }) => {
  console.log(width, height);
  const successProps = useSpring({
    to: async (next, cancel) => {
      await next({
        position: "absolute",
        bottom: height / 2,
        left: width / 2,
        transform: "rotate(45deg)"
      });
      await next({
        position: "absolute",
        bottom: 0,
        left: width,
        transform: "rotate(90deg)"
      });
    },
    from: {
      position: "absolute",
      bottom: 0,
      left: 0,
      transform: "rotate(45deg)"
    }
  });

  const failureProps = useSpring({
    to: async (next, cancel) => {
      await next({
        position: "absolute",
        bottom: height / 2,
        left: width / 2,
        transform: "rotate(45deg)"
      });
      await next({
        position: "absolute",
        bottom: 0,
        left: width,
        transform: "rotate(90deg"
      });
    }
  })

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
