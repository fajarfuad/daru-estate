import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import {
  contentWidth,
  direction,
  layoutChange,
  navigationBg,
  navigationFull,
  sidebarCollapseButton,
  sidebarCollapsed,
  theme,
} from "../../../redux/customise/customiseActions";

import { Row, Col, Button, Tag } from "antd";
import { RiCloseFill } from "react-icons/ri";

export default function CustomiseTheme() {
  const [active, setActive] = useState(false);

  // Redux
  const customise = useSelector((state) => state.customise);
  const dispatch = useDispatch();

  // Location
  const location = useHistory();

  // Theme Active
  let themeRef = useRef(null);
  themeRef = [];

  const [themeLocal, setThemeLocal] = useState();
  const [themeClickCheck, setThemeClickCheck] = useState(false);

  function themeRefActive(e) {
    if (e == "light") {
      themeRef[0].classList.add("active");
      themeRef[1].classList.remove("active");
    }

    if (e == "dark") {
      themeRef[1].classList.add("active");
      themeRef[0].classList.remove("active");
    }
  }

  useEffect(() => {
    if (themeClickCheck == false) {
      if (location.location.search == "?theme=dark") {
        localStorage.setItem("theme", "dark");
        setThemeLocal("dark");
        themeRefActive("dark");
      } else if (location.location.search == "?theme=light") {
        localStorage.setItem("theme", "light");
        setThemeLocal("light");
        themeRefActive("light");
      }
    }

    if (localStorage) {
      setThemeLocal(localStorage.getItem("theme"));
    }

    if (themeLocal) {
      themeRefActive(themeLocal);
    } else {
      themeRefActive(customise.theme);
    }
  }, [themeRefActive]);

  function themeClick(index) {
    setThemeClickCheck(true);

    if (index == 0) {
      document.querySelector("body").classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
      setThemeLocal("light");

      dispatch(theme("light"));
    } else {
      document.querySelector("body").classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
      setThemeLocal("dark");

      dispatch(theme("dark"));
    }

    for (let i = 0; i < themeRef.length; i++) {
      if (index == i) {
        themeRef[i].classList.add("active");
      } else {
        themeRef[i].classList.remove("active");
      }
    }
  }

  return (
    <div className={`daru-theme-customise ${active && "active"}`}>
      <div
        className="daru-theme-customise-button"
        onClick={() => setActive(!active)}
      >
        <div className="daru-theme-customise-button-bg">
          <svg
            width="48"
            height="121"
            viewBox="0 0 48 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.6313 21.7613C46.5046 11.6029 47.6987 2.40985 48 0V61H0C1.03187 53.7789 1.67112 44.3597 13.2122 37.7607C22.0261 32.721 32.4115 29.7862 38.6313 21.7613Z"
              fill="white"
            />
            <path
              d="M38.6058 99.5632C46.502 109.568 47.6984 118.627 48 121V61H0C1.03532 68.1265 1.67539 77.4295 13.3283 83.9234C22.1048 88.8143 32.3812 91.6764 38.6058 99.5632Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="daru-theme-customise-button-icon">
          <span>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM5.67 3.5C5.67 3.09 6.01 2.75 6.42 2.75C6.83 2.75 7.17 3.09 7.17 3.5V7.4C7.17 7.81 6.83 8.15 6.42 8.15C6.01 8.15 5.67 7.81 5.67 7.4V3.5ZM7.52282 14.4313C7.31938 14.5216 7.17 14.7132 7.17 14.9358V16.5C7.17 16.91 6.83 17.25 6.42 17.25C6.01 17.25 5.67 16.91 5.67 16.5V14.9358C5.67 14.7132 5.5206 14.5216 5.31723 14.4311C4.36275 14.0064 3.7 13.058 3.7 11.95C3.7 10.45 4.92 9.22 6.42 9.22C7.92 9.22 9.15 10.44 9.15 11.95C9.15 13.0582 8.47913 14.0066 7.52282 14.4313ZM14.33 16.5C14.33 16.91 13.99 17.25 13.58 17.25C13.17 17.25 12.83 16.91 12.83 16.5V12.6C12.83 12.19 13.17 11.85 13.58 11.85C13.99 11.85 14.33 12.19 14.33 12.6V16.5ZM13.58 10.77C12.08 10.77 10.85 9.55 10.85 8.04C10.85 6.93185 11.5209 5.98342 12.4772 5.55873C12.6806 5.46839 12.83 5.27681 12.83 5.05421V3.5C12.83 3.09 13.17 2.75 13.58 2.75C13.99 2.75 14.33 3.09 14.33 3.5V5.06421C14.33 5.28681 14.4794 5.47835 14.6828 5.56885C15.6372 5.9936 16.3 6.94195 16.3 8.05C16.3 9.55 15.08 10.77 13.58 10.77Z"
              fill="#1E90FF"
            />
          </svg>
        </div>
      </div>

      <div className="daru-theme-customise-container daru-bg-black-0 daru-bg-dark-90">
        <div className="daru-theme-customise-container-header daru-bg-black-10 daru-bg-dark-85 daru-py-16 daru-px-24">
          <Row justify="space-between">
            <Col>
              <span className="h5 daru-d-block daru-text-color-black-80 daru-text-color-dark-0">
                Customise your screen
              </span>
              <span className="daru-caption daru-font-weight-500 daru-d-block daru-text-color-black-60">
                Preview in Real Time
              </span>
            </Col>

            <Col>
              <Button
                type="text"
                onClick={() => setActive(false)}
                className="daru-bg-dark-85"
              >
                <RiCloseFill
                  size={16}
                  className="daru-text-color-black-80 daru-text-color-dark-0"
                />
              </Button>
            </Col>
          </Row>
        </div>

        <div className="daru-theme-customise-container-body daru-pb-md-96 daru-py-24 daru-px-24">
          <Row className="daru-theme-customise-container-body-item">
            <Col span={24} className="daru-mb-16">
              <span className="daru-d-block daru-caption daru-text-color-black-60">
                THEME
              </span>
              <span className="daru-d-block h5 daru-text-color-black-100 daru-text-color-dark-0">
                Dark & Light
              </span>
            </Col>

            <Col span={24}>
              <Row gutter={[24, 24]}>
                <Col md={12} span={24}>
                  <div
                    className="daru-theme-customise-container-body-item-svg active"
                    ref={(ref) => {
                      themeRef[0] = ref;
                    }}
                    onClick={() => themeClick(0)}
                  >
                    <svg
                      width="244"
                      height="150"
                      viewBox="0 0 244 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="1" y="1" width="242" height="148" fill="white" />
                      <rect
                        width="37"
                        height="138"
                        transform="translate(6 6)"
                        fill="#DFE6E9"
                      />
                      <rect
                        width="191"
                        height="13"
                        transform="translate(47 6)"
                        fill="#DFE6E9"
                      />
                      <rect
                        width="191"
                        height="122"
                        transform="translate(47 22)"
                        fill="#DFE6E9"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="242"
                        height="148"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>

                    <div className="daru-theme-customise-container-body-item-svg-check">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="16.9987"
                          cy="17.0007"
                          r="14.1667"
                          fill="white"
                        />
                        <path
                          d="M16.9987 2.83398C9.1872 2.83398 2.83203 9.18915 2.83203 17.0007C2.83203 24.8122 9.1872 31.1673 16.9987 31.1673C24.8102 31.1673 31.1654 24.8122 31.1654 17.0007C31.1654 9.18915 24.8102 2.83398 16.9987 2.83398ZM16.9987 28.334C10.7498 28.334 5.66536 23.2496 5.66536 17.0007C5.66536 10.7517 10.7498 5.66732 16.9987 5.66732C23.2476 5.66732 28.332 10.7517 28.332 17.0007C28.332 23.2496 23.2476 28.334 16.9987 28.334Z"
                          fill="#2D3436"
                        />
                        <path
                          d="M14.1674 19.2479L10.9105 15.9966L8.91016 18.0026L14.1702 23.2514L23.6704 13.7512L21.6672 11.748L14.1674 19.2479Z"
                          fill="#2D3436"
                        />
                      </svg>
                    </div>
                  </div>
                </Col>

                <Col md={12} span={24}>
                  <div
                    className="daru-theme-customise-container-body-item-svg daru-position-relative"
                    ref={(ref) => {
                      themeRef[1] = ref;
                    }}
                    onClick={() => themeClick(1)}
                  >
                    <svg
                      width="244"
                      height="150"
                      viewBox="0 0 244 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="244" height="150" fill="#111314" />
                      <rect
                        width="37"
                        height="138"
                        transform="translate(6 6)"
                        fill="#2D3436"
                      />
                      <rect
                        width="191"
                        height="13"
                        transform="translate(47 6)"
                        fill="#2D3436"
                      />
                      <rect
                        width="191"
                        height="122"
                        transform="translate(47 22)"
                        fill="#2D3436"
                      />
                      <rect width="244" height="150" stroke="#DFE6E9" />
                    </svg>

                    <div className="daru-theme-customise-container-body-item-svg-check">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="16.9987"
                          cy="17.0007"
                          r="14.1667"
                          fill="white"
                        />
                        <path
                          d="M16.9987 2.83398C9.1872 2.83398 2.83203 9.18915 2.83203 17.0007C2.83203 24.8122 9.1872 31.1673 16.9987 31.1673C24.8102 31.1673 31.1654 24.8122 31.1654 17.0007C31.1654 9.18915 24.8102 2.83398 16.9987 2.83398ZM16.9987 28.334C10.7498 28.334 5.66536 23.2496 5.66536 17.0007C5.66536 10.7517 10.7498 5.66732 16.9987 5.66732C23.2476 5.66732 28.332 10.7517 28.332 17.0007C28.332 23.2496 23.2476 28.334 16.9987 28.334Z"
                          fill="#2D3436"
                        />
                        <path
                          d="M14.1674 19.2479L10.9105 15.9966L8.91016 18.0026L14.1702 23.2514L23.6704 13.7512L21.6672 11.748L14.1674 19.2479Z"
                          fill="#2D3436"
                        />
                      </svg>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
