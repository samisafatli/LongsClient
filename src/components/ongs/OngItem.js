import React from 'react'
import classes from './OngItem.module.css'
import Card from '../ui/Card'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const OngItem = props =>  {
  const {item, content, actions, action} = classes
  const {category, description, email, title} = props

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
              <DeleteIcon style={{marginRight: "25px"}} className={action}/>
              <EditIcon className={action}/>
            </div>
        </Card>
      </li>
    </div>
  )
}

export default OngItem
