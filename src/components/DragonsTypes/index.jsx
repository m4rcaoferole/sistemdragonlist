import { useContext } from 'react'
import { DragonContext } from '../../context/DragonContext'
import './styles.css'

export const DragonsTypes = ({ id, name, type, createdAt }) => {
  const { handleDelete, handleEdite } = useContext(DragonContext)

  return (
    <div>
      <div className="dragon-thumb">
        <div className='content-thumb'>
          <strong>{name}</strong>
          <p>{type}</p>
          <small>{createdAt.slice(0, 10)}</small>
        </div>
      <div className="btn-actions">
        <button onClick={() => handleEdite(id)} >Alterar</button>
        <button onClick={() => handleDelete(id)} >Excluir</button>
      </div>
      </div>
    </div>
  )
}