import { NavLink, useLocation } from "react-router-dom";
import Progre from "../assets/Progre.svg";
import Regre from "../assets/Regre.svg";

export const BarPlanes = () => {
  const ruta = useLocation();
  const { pathname } = ruta;
  // console.log(pathname);

  return (
    <>
      <div className="back">
        <div className="back-section">
          <div>
            <span className={`paso ${pathname == "/planes" ? "paso-re" : ""}`}>
              1
            </span>
            <span
              className={`bar-text-pri ${
                pathname == "/planes" ? "bar-text" : ""
              }`}
            >
              Planes y Coberturas
            </span>
          </div>
          <p className="li-color">----</p>
          <div>
            <span className={`paso ${pathname == "/resumen" ? "paso-re" : ""}`}>
              2
            </span>
            <span
              className={`bar-text-pri ${
                pathname == "/resumen" ? "bar-text" : ""
              }`}
            >
              Resumen
            </span>
          </div>
        </div>
      </div>
      {/* <div className="back-movil"> */}
      <div className={` back-movil ${pathname == "/resumen" ? "negro" : ""}`}>
        <div className="pasos">
          <div>
            <NavLink className="regres" to="/">
              <img src={Regre} />
            </NavLink>
          </div>
          <span>PASO 1 DE 2</span>
        </div>
        <img src={Progre} />
      </div>
      <div className="long-line"></div>
    </>
  );
};
