import OngItem from './OngItem'
import classes from './OngList.module.css'

const OngList = props => {
  return (
    <div>
      <ul className={classes.list}>
        {props.ongs.map(ong => (
          <OngItem
            key={ong._id}
            id={ong._id}
            email={ong.email}
            title={ong.title}
            category={ong.category}
            description={ong.description}
          />
        ))}
      </ul>
    </div>
  )
}

export default OngList
