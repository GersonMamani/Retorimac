import Logowhite from "../assets/Logowhite.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-seco">
          <div className="footer-i">
            <img src={Logowhite} alt="" />{" "}
          </div>
          <div className="linea-fo"></div>
          <div className="footer-c">© RIMAC Seguros y Reasegurados </div>
        </div>
      </footer>
    </>
  );
};
