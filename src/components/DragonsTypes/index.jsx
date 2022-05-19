import './styles.css'

export const DragonsTypes = ({ id, name, type, createdAt}) => {

  return (
    <div>
      <div className="dragon-thumb">
        <div className='content-thumb'>
          <strong>{name}</strong>
          <p>{type}</p>
          <small>{createdAt.slice(0, 10)}</small>
        </div>
      <div className="btn-actions">
        <button >Alterar</button>
        <button >Excluir</button>
      </div>
      </div>
    </div>
  )
}