import { useState } from "react";
import styles from "./App.module.css";


import Dasturlar from "./components/Button";
import Link from "./components/Link";
import Header from "./components/Header";


function App() {
  const [fotoPush, setFotoPush] = useState("https://picsum.photos/200/300");
  const [campany, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("null");
  const [davlat, setDavlat] = useState("");
  const [shahar, setShahar] = useState("");
  const [joy, setJoy] = useState("");
  const [soni, setSoni] = useState("null");
  const [izoh, setIzoh] = useState("");
  
  function validate() {
  

    return true;
  }


  function handlePush() {
    setFotoPush(prompt("Rasm linkini kiriting"));
  }
  function handleCompany(event) {
    setCompany(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePhone(event) {
    setPhone(event.target.value);
  }

  function handleDavlat(event) {
    setDavlat(event.target.value);
  }
  function handleShahar(event) {
    setShahar(event.target.value);
  }
  function handleJoy(event) {
    setJoy(event.target.value);
  }
  function handleSoni(event) {
    setSoni(event.target.value);
  }
  function handleIzoh(event) {
    setIzoh(event.target.value);
  }
  function handleForm(event) {
    event.preventDefault();

    let isValid = validate();
    if (!isValid) {
      return;
    }

    let company = {
      companyName: campany,
      email: email,
      phone: phone,
      davlati: davlat,
      shahari: shahar,
      yashashJoyi: joy,
      hodimlarSoni: soni,
      izoh: izoh,
    };
    
    const companyInfo = JSON.stringify(company);
    localStorage.setItem("companyInfo", companyInfo);
  }
  


  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.h1}>Kompaniya ma`lumotlari</h1>
        <p className={styles.p}>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        <div className={styles.img}>
          <img src={fotoPush} alt="Iltimos link yuboring" />
          <button className={styles.btn} onClick={handlePush}>
            Yuklash
          </button>
        </div>

        <form> 
          <div className={styles.box}>
            <label htmlFor="">
              Kompaniya nomi <span className={styles.zvezda}>*</span>
            </label>
            <input
              onChange={handleCompany}
              type="text"
              placeholder="Kompaniya nomi"
            />
          </div>
          <div className={styles.box}>
            <label htmlFor="">
              Email <span className={styles.zvezda}>*</span>
            </label>
            <input onChange={handleEmail} type="text" placeholder="Email" />
          </div>
          <div className={styles.box}>
            <label htmlFor="">
              Telefon raqam <span className={styles.zvezda}>*</span>
            </label>
            <input onChange={handlePhone} type="number" placeholder="Uz +998" />
          </div>
          <Dasturlar />
          <Link />
          <div className={styles.flexs}>
            <div className={styles.miniBox}>
              <label htmlFor="">
                Davlat <span className={styles.zvezda}>*</span>
              </label>
              <input onChange={handleDavlat} type="text" placeholder="Davlat" />
            </div>
            <div className={styles.miniBox}>
              <label htmlFor="">
                Shahar <span className={styles.zvezda}>*</span>
              </label>
              <input onChange={handleShahar} type="text" placeholder="Shahar" />
            </div>
          </div>
          <div className={styles.box}>
            <label htmlFor="">
              Yashash joyi <span className={styles.zvezda}>*</span>
            </label>
            <input
              onChange={handleJoy}
              type="text"
              placeholder="Yashash joyi"
            />
          </div>
          <div className={styles.box}>
            <label htmlFor="">
              Hodimlar soni <span className={styles.zvezda}>*</span>
            </label>
            <input
              onChange={handleSoni}
              type="number"
              placeholder="Hodimlar soni"
            />
          </div>
          <div className={styles.bigBox}>
            <label htmlFor="">
              Izoh <span className={styles.zvezda}>*</span>
            </label>
            <input
              onChange={handleIzoh}
              type="text"
              placeholder="Kompaniya haqida izoh qoldiring"
            />
          </div>
          <div className={styles.btnBack}>
            <div className={styles.flexx}>
              <button type="submit" className={styles.button1}>
                ORTGA
              </button>
            </div>
            <div className={styles.flexx}>
              <button onClick={handleForm} className={styles.button1}>
                KEYINGISI
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
