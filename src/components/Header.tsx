import LogoRimac from "../assets/LogoRimac.svg";
import Phone from "../assets/Phone.svg";

export const Header = () => {
  return (
    <>
      <div className="header-main">
        <div>
          <img className="logo" src={LogoRimac} />
        </div>
        <div className="header-contact">
          <span className="ocu">¡Compra por otro medio!</span>
          <div className="header-phone">
            <span>
              <img className="p" src={Phone} />
            </span>
            <span>(01) 441 6001</span>
          </div>
        </div>
      </div>
    </>
  );
};
