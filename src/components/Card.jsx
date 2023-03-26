import star from "../assets/black-star-icon.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.pictureUrl} alt={props.name} className="card--image" />
      <div className="card--stats">
        <img src={star} className="star-img" />
        <span>{props.stars}</span>
        <span className="gray">({props.numberOfGuests}) • </span>
        <span className="gray">{props.roomType}</span>
      </div>
      <p>{props.name}</p>
      <p>
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  );
}
