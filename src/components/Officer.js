import './Officer.css'

function Officer(props) {
  return (
  <div className="col mx-auto text-center officer">
    <img src= {props.officerPic} className="rounded-circle" alt={props.officerName}></img>
    <h5 class="text-center">{props.officerName}</h5>
    <p>{props.officerPosition}</p>
  </div>
  )
}

export default Officer;