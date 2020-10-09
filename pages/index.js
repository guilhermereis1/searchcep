import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import InputMask from "react-input-mask";
import Card from "./_Card";
import Swal from "sweetalert2";

export default function Home() {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(false);

  async function searchCep() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    if (cep) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://cep.awesomeapi.com.br/json/${cep}`
        );
        const dataCep = await response.json();

        setLoading(false);
        setResponse(dataCep);

        Toast.fire({
          icon: "success",
          title: "CEP found successfully",
        });
      } catch (err) {
        setError(true);
        setLoading(false);

        Toast.fire({
          icon: "error",
          title: "CEP not found!",
        });
      }
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SEARCH-CEP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SEARCH CEP</h1>

        <div className="form-group">
          <span>https://cep.awesomeapi.com.br/json/</span>
          <InputMask
            className="form-field"
            type="text"
            value={cep}
            mask="99999-999"
            placeholder="Your cep here"
            onChange={(e) => setCep(e.target.value)}
          />
          <span onClick={() => searchCep()}>GO</span>
        </div>

        {error && (
          <div>
            <div className="alert error">Enter a valid Zip Code</div>
          </div>
        )}

        {loading ? (
          <h2>Loading data...</h2>
        ) : (
          <>{response.length !== 0 && <Card data={response} />}</>
        )}
      </main>
    </div>
  );
}
