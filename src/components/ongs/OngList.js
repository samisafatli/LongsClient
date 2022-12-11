import OngItem from './OngItem'
import classes from './OngList.module.css'

const OngList = props => {
  const {ongs} = props
  return (
    <div>
      <ul className={classes.list}>
        {ongs.reverse().map(ong => (
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
