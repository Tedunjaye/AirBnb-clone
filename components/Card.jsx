function Card(props) {
  let badgeText
  if (props.item.superHost === true) {
    badgeText = "Super Host"
  } else {
    badgeText = "SOLD Out"
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.photo} className="card--image" />
      <div className="card--stats">
        <img src="src/—Pngtree—golden star_818998.png" className="card--star" />
        <span>{props.item.rating}</span>
        <span className="gray">({props.item.city})</span>
      </div>
      <span className="gray">{props.item.type} .{props.item.beds} beds</span>
      <p className="card-title">{props.item.title}</p>
    </div>
  )
}
export default Card
