import React from "react";
import emailjs from '@emailjs/browser'

export default function MailingList() {
  const [formData, setFormData] = React.useState(
    {
      email: "", 
    }
  )
  const [emailField, setEmailField] = React.useState("")
  const [mailingListCopy, setMailingListCopy] = React.useState("")

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
    validateFormInputs()
  }

  function clearInputs() {
    setFormData(
      {
        email: "", 
      }
    )
  }

  const [formInputsValid, setFormInputsValid] = React.useState(
    {
      email: false, 
    }
  )

  function resetFormInputs() {
    setFormInputsValid (
     { 
      email: false, 
     }
    )
  }


  React.useEffect(() => {
    setEmailField(document.querySelector(".mailing-list-input"))
    setMailingListCopy(document.querySelector(".mailing-list-copy"))

  }, [])


  function validateFormInputs() {
    const emailFormat = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

    if(!emailField.value.match(emailFormat) && document.activeElement === emailField) {
      emailField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, email: false}
      })
    } else if(emailField.value.match(emailFormat)) {
      emailField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, email: true}
      })
    }
  }

  function sendEmail(event) {
    event.preventDefault()
    if(formInputsValid.email) {
      emailjs.sendForm('service_d8udpus', 'template_mwflei9', event.target, 'GEoOD8ZFwvGRuRPYl')
      clearInputs()
      resetFormInputs()
      emailField.placeholder = "Your email address"
      mailingListCopy.textContent = "Thank you for join DAC's mailing list! We look forward to being in touch soon."
      setTimeout(() => {
        mailingListCopy.textContent = "Join our mailing list to be kept up to date on what is happening as DAC!"
  
      }, 3000);
    } else {
      if(emailField.value.length === 0) {
        emailField.classList.add("input-error")
      }
      emailField.placeholder = "Please enter your email!"
    }
  }

  return (
    <div className="mailing-list">
      <p className="mailing-list-copy">Join our mailing list to be kept up to date on what is happening at DAC!</p>
      <form className="mailing-list-form" onSubmit={sendEmail} >
        <input
          className="mailing-list-input"
          type="text"
          placeholder="Your email address"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <button 
          type="submit" 
          className="mailing-list-btn"
        >Submit</button>
      </form>
    </div>
  )
}