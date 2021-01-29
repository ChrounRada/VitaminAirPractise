import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spin } from "antd";

function HomePage() {
  // spin loading

  const [spinding, setSpinding] = useState({ spindings: [] });

  const enterSpinding = index => {
    setSpinding = ({ spindings }) => {
      const newSpindings = [...spindings];
      newSpindings[index] = true;
      return {
        spindings: newSpindings
      };
    };
    setTimeout(() => {
      setSpinding(({ spindings }) => {
        const newSpindings = [...spindings];
        newSpindings[index] = false;

        console.log((newSpindings[index] = false));
        return {
          spindings: newSpindings
        };
      });
    }, 6000);
  };

  return (
    <React.Fragment>
      <div className="homepage">
        <div className="content">
          <h1>EDUCATION</h1>
        </div>
        <div className="content1">
          <h1>
            <ul className="nav-links1">
              <Link to="/reforesting">
                <li>
                  Reforesting{" "}
                  <Spin
                    onClick={() => enterSpinding(0)}
                    tip="Loading..."
                    spinning={true}
                    loading={spinding.spindings[0]}
                    delay={6000}
                  ></Spin>
                </li>
              </Link>

              <Link to="/natural-farming">
                <li>Natural Farming</li>
              </Link>
              <Link to="/ecoturism">
                <li>Ecotourism</li>
              </Link>
            </ul>
            <br />
            <br />
            <br />
            <ul className="nav-links2">
              <Link to="/seeds-bomb">
                <li>Seeds Bomb</li>
              </Link>
              <Link to="/air-water">
                <li>Air Water</li>
              </Link>
            </ul>
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
