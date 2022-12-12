import { useRef } from 'react'
import Card from '../ui/Card'
import classes from './NewOngForm.module.css'

const NewOngForm = props => {
  const nameInputRef = useRef()
  const categoryInputRef = useRef()
  const emailInputRef = useRef()
  const descriptionInputRef = useRef()

  const clearForm = () => {
    nameInputRef.current.value = ''
    categoryInputRef.current.value = ''
    emailInputRef.current.value = ''
    descriptionInputRef.current.value = ''
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredTitle = nameInputRef.current.value
    const enteredCategory = categoryInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const ongData = {
      title: enteredTitle,
      category: enteredCategory,
      email: enteredEmail,
      description: enteredDescription,
    }
    props.onAddOng(ongData)
    clearForm()
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Ong Title</label>
          <input type='text' required id='title' ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='category'>Category</label>
          <input type='text' required id='category' ref={categoryInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='text' required id='email' ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Ong</button>
        </div>
      </form>
    </Card>
  )
}

export default NewOngForm
