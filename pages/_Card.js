import styles from "../styles/Home.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className="alert success">Successfully!</div>
      <div>
        Address: <b>{props.data.address}</b>
      </div>
      <div>
        Address Name: <b>{props.data.address_name}</b>
      </div>
      <div>
        Address Type: <b>{props.data.address_type}</b>
      </div>
      <div>
        CEP: <b>{props.data.cep}</b>
      </div>
      <div>
        City: <b>{props.data.city}</b>
      </div>
      <div>
        City IBGE: <b>{props.data.city_ibge}</b>
      </div>
      <div>
        DDD: <b>{props.data.ddd}</b>
      </div>
      <div>
        District: <b>{props.data.district}</b>
      </div>
      <div>
        LAT: <b>{props.data.lat}</b>
      </div>
      <div>
        LNG: <b>{props.data.lng}</b>
      </div>
      <div>
        State: <b>{props.data.state}</b>
      </div>
    </div>
  );
}
