import { NavLink } from "react-router-dom";
import butvolver from "../assets/butvolver.svg";
import Parami from "../assets/Parami.svg";
import Addmi from "../assets/Addmi.svg";
import Casaplan from "../assets/Casaplan.svg";

// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Planes_datae } from "../Utils/dataPlanes";
import { useState } from "react";

export const CotizarPlanes = () => {
  // const data_extraidaresumen = localStorage.getItem("data_resu");
  // const resu_data = data_extraidaresumen
  //   ? JSON.parse(data_extraidaresumen)
  //   : null;
  // const data_nombre = localStorage.getItem("dataHome");
  // const resu_datano = data_nombre ? JSON.parse(data_nombre) : null;
  // console.log(resu_data);
  // console.log(resu_datano);

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [idplan, setidplan] = useState("");

  const valocheck = (e: any) => {
    const { checked } = e.target;
    setIsChecked1(checked);
  };
  const valocheck2 = (e: any) => {
    const { checked } = e.target;
    setIsChecked2(checked);
  };

  const enviarre = (plan) => {
    setidplan(plan);
    const data_resu = {
      checkmi: !isChecked1,
      checkalguien: !isChecked2,
      plan: plan,
    };
    // console.log(data_resu);
    localStorage.setItem("data_resu", JSON.stringify(data_resu));
  };

  return (
    <>
      <div className="centrar-content">
        <div className="pasos-vol">
          <div>
            <NavLink className="but-volver" to="/">
              <img src={butvolver} />
            </NavLink>
          </div>

          <span>Volver</span>
        </div>

        <div className="main-cajas">
          <div className="trescajas">
            <p>Rocío ¿Para quién deseas cotizar?</p>
            <span className="selecci">
              Selecciona la opción que se ajuste más a tus necesidades.
            </span>
            <div className="twoele">
              <div className="first-caja">
                <label className="containerpla" id="c5">
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={valocheck}
                    className="checkedpla"
                  />
                  <span className="checkmarkpla"></span>
                </label>
                <div className="im">
                  <img className="i" src={Parami} />
                </div>
                <div className="te">Para mi</div>
                <div className="texto-mo">
                  Cotiza tu seguro de salud y agrega familiares si así lo
                  deseas.
                </div>
              </div>

              <div className="first-caja">
                <label className="containerpla" id="c5">
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={valocheck2}
                    className="checkedpla"
                  />
                  <span className="checkmarkpla"></span>
                </label>
                <div className="im">
                  <img className="i" src={Addmi} />
                </div>
                <div className="te">Para alguien más</div>
                <div>
                  Realiza una cotización para uno de tus familiares o cualquier
                  persona.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* planes para mi */}
        <div className="cajas-parami">
          {Planes_datae.map((plan, index) => (
            <div key={index} className="borde-cajaplan">
              <div className="plan-header">
                <div className="plan-verti">
                  <p className="plan-title">{plan.name}</p>
                  <span className="tema-titu">COSTO DEL PLAN</span>
                  <span className="precio">${plan.price} al mes</span>
                </div>
                <img className="imm" src={Casaplan} />
              </div>
              <div>
                <ul className="lista">
                  {plan.description.map((desc, index) => (
                    <li key={index}>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bu-elegirplan">
                <NavLink
                  className="but-seleplan"
                  onClick={() => enviarre(plan)}
                  to="/resumen"
                >
                  Seleccionar Plan
                </NavLink>
              </div>
            </div>
          ))}

          {/* <div className="borde-cajaplan">
            <div className="plan-header">
              <div className="plan-verti">
                <p className="plan-title">Plan en Casa</p>
                <span className="tema-titu">COSTO DEL PLAN</span>
                <span className="precio">$39 al mes</span>
              </div>
              <img className="imm" src={Casaplan} />
            </div>
            <div>
              <ul className="lista">
                <li>
                  <span>Consulta médica a domicilio</span>
                  <span> por S/.20 y medicinas cubiertas al 100%.</span>
                </li>
                <li>
                  <span>Videoconsulta y</span>
                  <span>
                    orientación telefónica al 100% en medicina general
                    +pediatría.
                  </span>
                </li>
                <li>
                  <span>Indemnización de S/.300</span>
                  <span>caso de hospitalización por más de un día.</span>
                </li>
              </ul>
            </div>
            <div className="bu-elegirplan">
              <NavLink className="but-seleplan" to="/resumen">
                Seleccionar Plan
              </NavLink>
            </div>
          </div> */}
        </div>

        {/* planes para alguien más */}
        <div className="cajas-parami paraalguienmas ">
          <div className="borde-cajaplan">
            <div className="plan-header">
              <div className="plan-verti">
                <p className="plan-title">Plan en Casa</p>
                <span className="tema-titu">COSTO DEL PLAN</span>
                <span className="precio">$37 al mes</span>
              </div>
              <img className="imm" src={Casaplan} />
            </div>
            <div>
              <ul className="lista">
                <li>
                  <span>Consulta médica a domicilio</span>
                  <span> por S/.37 y medicinas cubiertas al 100%.</span>
                </li>
                <li>
                  <span>Videoconsulta y</span>
                  <span>
                    orientación telefónica al 100% en medicina general
                    +pediatría.
                  </span>
                </li>
                <li>
                  <span>Indemnización de S/.300</span>
                  <span>caso de hospitalización por más de un día.</span>
                </li>
              </ul>
            </div>
            <div className="bu-elegirplan">
              <NavLink className="but-seleplan" to="/resumen">
                Seleccionar Plan
              </NavLink>
            </div>
          </div>

          <div className="borde-cajaplan">
            <div className="plan-header">
              <div className="plan-verti">
                <p className="plan-title">Plan en Casa</p>
                <span className="tema-titu">COSTO DEL PLAN</span>
                <span className="precio">$94 al mes</span>
              </div>
              <img className="imm" src={Casaplan} />
            </div>
            <div>
              <ul className="lista">
                <li>
                  <span>Consulta médica a domicilio</span>
                  <span> por S/.94 y medicinas cubiertas al 100%.</span>
                </li>
                <li>
                  <span>Videoconsulta y</span>
                  <span>
                    orientación telefónica al 100% en medicina general
                    +pediatría.
                  </span>
                </li>
                <li>
                  <span>Indemnización de S/.300</span>
                  <span>caso de hospitalización por más de un día.</span>
                </li>
              </ul>
            </div>
            <div className="bu-elegirplan">
              <NavLink className="but-seleplan" to="/resumen">
                Seleccionar Plan
              </NavLink>
            </div>
          </div>

          <div className="borde-cajaplan">
            <div className="plan-header">
              <div className="plan-verti">
                <p className="plan-title">Plan en Casa</p>
                <span className="tema-titu">COSTO DEL PLAN</span>
                <span className="precio">$46.55 al mes</span>
              </div>
              <img className="imm" src={Casaplan} />
            </div>
            <div>
              <ul className="lista">
                <li>
                  <span>Consulta médica a domicilio</span>
                  <span> por S/.20 y medicinas cubiertas al 100%.</span>
                </li>
                <li>
                  <span>Videoconsulta y</span>
                  <span>
                    orientación telefónica al 100% en medicina general
                    +pediatría.
                  </span>
                </li>
                <li>
                  <span>Indemnización de S/.300</span>
                  <span>caso de hospitalización por más de un día.</span>
                </li>
              </ul>
            </div>
            <div className="bu-elegirplan">
              <NavLink className="but-seleplan" to="/resumen">
                Seleccionar Plan
              </NavLink>
            </div>
          </div>
        </div>

        {/* swiper */}
        <div className="bo1">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {/* {Planes_datae.map((plan) => ( */}
            <SwiperSlide>
              <div className="borde-cajaplan swi ">
                <div className="plan-header">
                  <div className="plan-verti">
                    <p className="plan-title">hhhhh</p>
                    <span className="tema-titu">COSTO DEL PLAN</span>
                    <span className="precio">44444</span>
                  </div>
                  <img className="imm" src={Casaplan} />
                </div>
                <div>
                  <ul className="lista">
                    <li>dddd</li>
                  </ul>
                </div>
                <div className="bu-elegirplan">
                  <NavLink className="but-seleplan" to="/resumen">
                    Seleccionar Plan
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
            {/* ))} */}
            {/* <SwiperSlide>
              <div className="borde-cajaplan swi">
                <div className="plan-header">
                  <div className="plan-verti">
                    <p className="plan-title">Plan en Casa</p>
                    <span className="tema-titu">COSTO DEL PLAN</span>
                    <span className="precio">$99 al mes</span>
                  </div>
                  <img className="imm" src={Casaplan} />
                </div>
                <div>
                  <ul className="lista">
                    <li>
                      <span>Consulta médica a domicilio</span>
                      <span> por S/.20 y medicinas cubiertas al 100%.</span>
                    </li>
                    <li>
                      <span>Videoconsulta y</span>
                      <span>
                        orientación telefónica al 100% en medicina general
                        +pediatría.
                      </span>
                    </li>
                    <li>
                      <span>Indemnización de S/.300</span>
                      <span>caso de hospitalización por más de un día.</span>
                    </li>
                  </ul>
                </div>
                <div className="bu-elegirplan">
                  <NavLink className="but-seleplan" to="/resumen">
                    Seleccionar Plan
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="borde-cajaplan swi">
                <div className="plan-header">
                  <div className="plan-verti">
                    <p className="plan-title">Plan en Casa</p>
                    <span className="tema-titu">COSTO DEL PLAN</span>
                    <span className="precio">$49 al mes</span>
                  </div>
                  <img className="imm" src={Casaplan} />
                </div>
                <div>
                  <ul className="lista">
                    <li>
                      <span>Consulta médica a domicilio</span>
                      <span> por S/.20 y medicinas cubiertas al 100%.</span>
                    </li>
                    <li>
                      <span>Videoconsulta y</span>
                      <span>
                        orientación telefónica al 100% en medicina general
                        +pediatría.
                      </span>
                    </li>
                    <li>
                      <span>Indemnización de S/.300</span>
                      <span>caso de hospitalización por más de un día.</span>
                    </li>
                  </ul>
                </div>
                <div className="bu-elegirplan">
                  <NavLink className="but-seleplan" to="/resumen">
                    Seleccionar Plan
                  </NavLink>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>

        {/* swiper para alguien mas */}
        <div className="bo2">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {Planes_datae.map((plan, index) => (
              <SwiperSlide>
                <div key={index} className="borde-cajaplan swi ">
                  <div className="plan-header">
                    <div className="plan-verti">
                      <p className="plan-title">{plan.name}</p>
                      <span className="tema-titu">COSTO DEL PLAN</span>
                      {/* <span className="tema-titu tachado">S/.39 antes</span> */}
                      <span className="precio">${plan.price} al mes</span>
                    </div>
                    <img className="imm" src={Casaplan} />
                  </div>
                  <div>
                    <ul className="lista">
                      {plan.description.map((desc, index) => (
                        <li key={index}>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bu-elegirplan">
                    <NavLink
                      className="but-seleplan"
                      onClick={() => enviarre(plan)}
                      to="/resumen"
                    >
                      Seleccionar Plan
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <div className="borde-cajaplan swi">
                <div className="plan-header">
                  <div className="plan-verti">
                    <p className="plan-title">Plan en Casa</p>
                    <span className="tema-titu">COSTO DEL PLAN</span>
                    <span className="tema-titu tachado">S/.39 antes</span>
                    <span className="precio">$94.05 al mes</span>
                  </div>
                  <img className="imm" src={Casaplan} />
                </div>
                <div>
                  <ul className="lista">
                    <li>
                      <span>Consulta médica a domicilio</span>
                      <span> por S/.20 y medicinas cubiertas al 100%.</span>
                    </li>
                    <li>
                      <span>Videoconsulta y</span>
                      <span>
                        orientación telefónica al 100% en medicina general
                        +pediatría.
                      </span>
                    </li>
                    <li>
                      <span>Indemnización de S/.300</span>
                      <span>caso de hospitalización por más de un día.</span>
                    </li>
                  </ul>
                </div>
                <div className="bu-elegirplan">
                  <NavLink className="but-seleplan" to="/resumen">
                    Seleccionar Plan
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="borde-cajaplan swi">
                <div className="plan-header">
                  <div className="plan-verti">
                    <p className="plan-title">Plan en Casa</p>
                    <span className="tema-titu">COSTO DEL PLAN</span>
                    <span className="tema-titu tachado">S/.39 antes</span>
                    <span className="precio">$46.55 al mes</span>
                  </div>
                  <img className="imm" src={Casaplan} />
                </div>
                <div>
                  <ul className="lista">
                    <li>
                      <span>Consulta médica a domicilio</span>
                      <span> por S/.20 y medicinas cubiertas al 100%.</span>
                    </li>
                    <li>
                      <span>Videoconsulta y</span>
                      <span>
                        orientación telefónica al 100% en medicina general
                        +pediatría.
                      </span>
                    </li>
                    <li>
                      <span>Indemnización de S/.300</span>
                      <span>caso de hospitalización por más de un día.</span>
                    </li>
                  </ul>
                </div>
                <div className="bu-elegirplan">
                  <NavLink className="but-seleplan" to="/resumen">
                    Seleccionar Plan
                  </NavLink>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
        <div className="blanco"></div>
      </div>
    </>
  );
};
