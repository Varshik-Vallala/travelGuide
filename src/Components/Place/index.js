import './index.css'

const Place = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <li className="place-item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  )
}

export default Place
