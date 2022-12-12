import React, {useState} from 'react'
import axios from 'axios';
import classes from './OngItem.module.css'
import Card from '../ui/Card'
import DeleteIcon from '@mui/icons-material/Delete';
import baseURL from '../../constants';

const OngItem = props =>  {

  const [ongs, setOngs] = useState(props.ongs)
  const {item, content, actions, action} = classes
  const {id, category, description, email, title} = props

const handleDelete = (id) => {
  axios.delete(`${baseURL}/${id}`).then(res => {
    const del = ongs.filter(ong => id !== ong.id)
    setOngs(del)
    window.location.reload()
  })
}

  return (
    <div>
      <li className={ item }>
        <Card>
          <div className={ content }>
            <h3>{title}</h3>
            <p>{category}</p>
            <p>{email}</p>
            <p>{description}</p>
          </div>
          <div className= {actions}>
              <DeleteIcon style={{marginRight: "25px"}} className={action} onClick={() => handleDelete(id)}/>
            </div>
        </Card>
      </li>
    </div>
  )
}

export default OngItem
