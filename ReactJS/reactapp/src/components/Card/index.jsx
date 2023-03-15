import './styles.css'

export function Card(props) {
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.timeEntrada} - {props.timeSaida}</small>
        </div>
    )
}