import { NavLink } from "react-router-dom";
import homeIma from "../assets/homeIma.svg";
import seguroverde from "../assets/seguroverde.svg";
import blurrosa from "../assets/blurrosa.svg";
import blurblue from "../assets/blurblue.svg";
import { Footer } from "./Footer";
import { useState } from "react";
import { user_data } from "../Utils/dataUser";
import moment from "moment";

// interface InputEventTarget {
//   name: string;
//   value: string;
// }
export const HomeSeguro = () => {
  const [form, setform] = useState({
    nume: "",
    tele: "",
  });
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [birthDate, setBirthDate] = useState(user_data.birthDay);

  const calculateAge = () => {
    const today = moment();
    const birthDateMoment = moment(birthDate, "DD-MM-YYYY");
    const years = today.diff(birthDateMoment, "years");
    const months = today.diff(birthDateMoment, "months", true) % 12; // Get fractional months
    const days = today.diff(birthDateMoment, "days");
    return { years, months, days };
  };
  const { years } = calculateAge();

  const valornu = (e: any) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const valocheck = (e: any) => {
    const { checked } = e.target;
    setIsChecked1(checked);
  };
  const valocheck2 = (e: any) => {
    const { checked } = e.target;
    setIsChecked2(checked);
  };

  const mostrar = () => {
    // console.log(form);
    // console.log(isChecked1);
    // console.log(isChecked2);
    const data = {
      nume: form.nume,
      tele: form.tele,
      isChecked1: isChecked1,
      isChecked2: isChecked2,
      name: user_data.name,
      lastName: user_data.lastName,
      birthDay: user_data.birthDay,
      edad: years,
    };
    // console.log(data);

    localStorage.setItem("dataHome", JSON.stringify(data));
  };

  return (
    <>
      <div className="content">
        <div className="content-img">
          <img className="c-img" src={homeIma} />
        </div>
        <div className="content-data">
          <div className="marco">
            <div className="marco-data">
              <div>
                <img className="marco-v" src={seguroverde} />
              </div>
              <p className="marco-text">Creado para tí y tu familia</p>
              <p className="marco-text2">
                Tú eliges cuanto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>
            </div>
            <div className="inpu1">
              <div className="inpu2">
                <select className="se">
                  <option value="0">TIPO DOCUMENTO</option>
                  <option value="1">DNI</option>
                </select>

                <form className="form">
                  <input
                    type="text"
                    name="nume"
                    value={form.nume}
                    onChange={valornu}
                    required
                  />
                  <label className="lbl-nombre">
                    <span className="text-nom">Nro.Documento</span>
                  </label>
                </form>
              </div>
              <div>
                <form className="form form2">
                  <input
                    type="text"
                    name="tele"
                    value={form.tele}
                    onChange={valornu}
                    required
                  />
                  <label className="lbl-nombre">
                    <span className="text-nom">Celular</span>
                  </label>
                </form>
              </div>
            </div>
            <div className="term">
              <div>
                <label className="container" id="c1">
                  Acepto la Política de Privacidad
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={valocheck}
                    className="checked"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div>
                <label className="container" id="c3">
                  Acepto la Política Comunicaciones Comerciales
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={valocheck2}
                    className="checked"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <p className="con-ter">Aplican Términos y Condiciones</p>
            </div>
            <div>
              <NavLink className="button-cotiza" onClick={mostrar} to="/planes">
                Cotiza Aquí
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="linea-content"></div>
      <div className="mostrar">
        <p className="marco-text3">
          Tú eliges cuanto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </p>
        <div className="inpu1-abajo">
          <div className="inpu2">
            <select className="se">
              <option value="0">TIPO DOCUMENTO</option>
              <option value="1">DNI</option>
              <option value="2">RUC</option>
              <option value="3">PASAPORTE</option>
            </select>

            <form className="form form5">
              <input
                type="text"
                name="nume"
                value={form.nume}
                onChange={valornu}
                required
              />
              <label className="lbl-nombre">
                <span className="text-nom">Nro.Documento</span>
              </label>
            </form>
          </div>
          <div>
            <form className="form form2 form4">
              <input
                type="text"
                name="tele"
                value={form.tele}
                onChange={valornu}
                required
              />
              <label className="lbl-nombre">
                <span className="text-nom">Celular</span>
              </label>
            </form>
          </div>
        </div>
        <div className="term4">
          <div>
            <label className="container" id="c1">
              Acepto la Política de Privacidad
              <input
                type="checkbox"
                checked={isChecked1}
                onChange={valocheck}
                className="checked"
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <label className="container" id="c3">
              Acepto la Política Comunicaciones Comerciales
              <input
                type="checkbox"
                checked={isChecked2}
                onChange={valocheck2}
                className="checked"
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <p className="con-ter">Aplican Términos y Condiciones</p>
        </div>
        <div>
          <NavLink className="button-cotiza bu2" onClick={mostrar} to="/planes">
            Cotiza Aquí
          </NavLink>
        </div>
      </div>
      <img className="blur-left" src={blurrosa} />
      <img className="blurde" src={blurblue} />
      <Footer />
    </>
  );
};
