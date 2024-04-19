import { NavLink } from "react-router-dom";
import { BarPlanes } from "./BarPlanes";
import butvolver from "../assets/butvolver.svg";
import family from "../assets/family.svg";
import "../resumen.css";
// import { localStorage } from 'react';

export const Resumen = () => {
  const data_extraidaresumen = localStorage.getItem("data_resu");
  const resu_data = data_extraidaresumen
    ? JSON.parse(data_extraidaresumen)
    : null;
  const data_nombre = localStorage.getItem("dataHome");
  const resu_datano = data_nombre ? JSON.parse(data_nombre) : null;
  // console.log(resu_data);
  // console.log(resu_datano);
  const { name, lastName, tele, nume } = resu_datano;
  const { plan, checkmi, checkalguien } = resu_data;

  const Disco = (price: any) => {
    const discountAmount = (price * 5) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice;
  };

  // if (!checkalguien) {
  //   console.log("alguien mas true");
  // }
  // if (!checkmi) {
  //   console.log("parami true");
  // }

  return (
    <>
      <BarPlanes />
      <div className="centrar-contentre">
        <div className="pasos-vol">
          <div>
            <NavLink className="but-volver" to="/planes">
              <img src={butvolver} />
            </NavLink>
          </div>

          <span>Volver</span>
        </div>
        <div className="bor-resumen">
          <p className="ti">Resumen del Seguro:</p>
          <div className="caja-resumen">
            <div className="re-bo">
              <p className="pre">PRECIOS CALCULADOS PARA:</p>
              <div>
                <div className="res">
                  <img className="re-ico" src={family} />
                  <span className="re-no">
                    {name} {lastName}
                  </span>
                </div>
              </div>
            </div>
            <div className="re-cajafinal">
              <p className="negrita">Responsable de Pago</p>
              <p>
                <span className="negrita">DNI:</span> <span>{nume}</span>
              </p>
              <p>
                <span className="negrita">Celular: </span> <span>{tele}</span>
              </p>
            </div>
            <div className="re-cajafinal">
              <p className="negrita">Plan elegido</p>
              <p>{plan.name}</p>
              {checkalguien == false && (
                <p>
                  Costo de Plan: <span>S/.{Disco(plan.price)} al mes</span>
                </p>
              )}
              {!checkmi == true && (
                <p>
                  Costo de Plan: <span>S/.{plan.price} al mes</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
