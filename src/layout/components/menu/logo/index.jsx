import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Yoda from "../../../../assets/images/logo/logo.svg";
import YodaDark from "../../../../assets/images/logo/logo-dark.svg";
import YodaRtl from "../../../../assets/images/logo/logo-rtl.svg";
import YodaRtlDark from "../../../../assets/images/logo/logo-rtl-dark.svg";

import themeConfig from "../../../../configs/themeConfig.jsx";

export default function MenuLogo(props) {
  const customise = useSelector((state) => state.customise);

  return (
    <div className="daru-header-logo daru-d-flex daru-align-items-end">
      <Link to="/" onClick={props.onClose}>
        {customise.direction == "rtl" ? (
          customise.theme == "light" ? (
            <img className="daru-logo" src={YodaRtl} alt="logo" />
          ) : (
            <img className="daru-logo" src={YodaRtlDark} alt="logo" />
          )
        ) : customise.theme == "light" ? (
          <img className="daru-logo" src={Yoda} alt="logo" />
        ) : (
          <img className="daru-logo" src={YodaDark} alt="logo" />
        )}
      </Link>

      <span
        className="daru-p1-body daru-font-weight-500 daru-text-color-black-40 daru-mb-16 daru-ml-4"
        style={{
          letterSpacing: -1.5,
        }}
      >
        {themeConfig.version}
      </span>
    </div>
  );
}
