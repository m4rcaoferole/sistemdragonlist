import './styles.css'

export const DragonsTypes = ({ id, name, type, createdAt}) => {

  return (
    <div className="dragon-thumb">
      <div>
        <h2>{name}</h2>
        <p>{type}</p>
      </div>
      <small>{createdAt}</small>
    </div>
  )
}