import * as React from "react";
import ScrollToTop from '../ScrollToTop'
import emailjs from '@emailjs/browser'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function ApplyForm(props) {
  const [formData, setFormData] = React.useState({
    jobTitle: `${props.jobTitle}`,
    firstName: "",
    lastName: "",
    email: "",
    resumeFile: "",
    coverletterFile: "",
  });

  const [popupDisplay, setPopupDisplay] = React.useState({
    display: "none"
  })
  const [emailSuccess, setEmailSuccess] = React.useState(false)

  const [formInputsValid, setFormInputsValid] = React.useState(
    {
      formValid: false,
      firstName: false, 
      lastName: false, 
      email: false,
      resumeField: false,
      coverletterField: false,
    }
  )

  function clearInputs() {
    setFormData(
      {
        jobTitle: `${props.jobTitle}`,
        firstName: "", 
        lastName: "", 
        email: "",
        resumeFile:"",
        coverletterFile: "",
      }
    )
  }

  function resetFormInputs() {
    setFormInputsValid (
      { 
        contactGroup: false,
        firstName: false, 
        lastName: false, 
        email: false,
        resumeFile: false,
        coverletterFile: false,
      }
    )
  }

  React.useEffect(() => {
    setFirstNameField(document.querySelector(".firstNameField"))
    setLastNameField(document.querySelector(".lastNameField"))
    setEmailField(document.querySelector(".emailField"))
    setResumeBtn(document.querySelector(".resume-btn"))
    setResumeInput(document.querySelector(".resume-input"))
    setCoverletterBtn(document.querySelector(".coverletter-btn"))
    setCoverletterInput(document.querySelector(".coverletter-input"))
  }, [])



  const [firstNameField, setFirstNameField] = React.useState("")
  const [lastNameField, setLastNameField] = React.useState("")
  const [emailField, setEmailField] = React.useState("")
  const [resumeBtn, setResumeBtn] = React.useState("")
  const [resumeInput, setResumeInput] = React.useState("")
  const [coverletterBtn, setCoverletterBtn] = React.useState("")
  const [coverletterInput, setCoverletterInput] = React.useState("")


  function handleChange(event) {
    setFormData(prevFormData => {
      if(event.target.name === "resumeFile") {
        validateResumeUpload()
        return {
          ...prevFormData,
          [event.target.name]: event.target.files[0]
        }
      } else if (event.target.name === "coverletterFile") {
          validateCoverletterUpload()
          return {
            ...prevFormData,
            [event.target.name]: event.target.files[0]
          }   
      } else {
        return {
          ...prevFormData,
          [event.target.name]: event.target.value
        }
      }
    })
    validateFormOnChange()
  }


  function removeResume(event) {
    resumeInput.value = ""
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        resumeFile: "",
        [event.target.name]: "",
      }
    })
    setFormInputsValid (prevFormInputsValid => {
      return {...prevFormInputsValid, resumeField: false}
    })

    validateResumeUpload()
  }

  function removeCoverletter(event) {
    coverletterInput.value = ""
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        coverletterFile: "",
        [event.target.name]: "",
      }
    })
    setFormInputsValid (prevFormInputsValid => {
      return {...prevFormInputsValid, coverletterField: false}
    })

    validateCoverletterUpload()
  }
  

  function validateResumeUpload() {
    if(formData.resumeFile.name)  {
      resumeBtn.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, resumeField: false}
      })
    } else if(!formData.resumeFile.name) {
      resumeBtn.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, resumeField: true}
      })
    }
  }

  function validateCoverletterUpload() {
    if(formData.coverletterFile.name)  {
      coverletterBtn.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, coverletterField: false}
      })
    } else if(!formData.coverletterFile.name) {
      coverletterBtn.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, coverletterField: true}
      })
    }
  }


  function validateFormOnChange() {
    const emailFormat = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    const nameFormat = /^[A-Za-z'\- ]+$/

    if((!firstNameField.value.match(nameFormat) && document.activeElement === firstNameField)) {
      firstNameField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, firstName: false}
      })
    } else if (firstNameField.value.match(nameFormat)) {
      firstNameField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, firstName: true}
      })
    }

    if((!lastNameField.value.match(nameFormat) && document.activeElement === lastNameField)) {
      lastNameField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, lastName: false}
      })
    } else if(lastNameField.value.match(nameFormat)) {
      lastNameField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, lastName: true}
      })
    }

    if((!emailField.value.match(emailFormat) && document.activeElement === emailField)) {
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


  function validateFormOnSubmit() {
    const emailFormat = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    const nameFormat = /^[A-Za-z]+$/
    if(!firstNameField.value.match(nameFormat)) {
      firstNameField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, firstName: false}
      })
    } else if (firstNameField.value.match(nameFormat)) {
      firstNameField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, firstName: true}
      })
    }

    if(!lastNameField.value.match(nameFormat)) {
      lastNameField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, lastName: false}
      })
    } else if(lastNameField.value.match(nameFormat)) {
      lastNameField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, lastName: true}
      })
    }

    if(!emailField.value.match(emailFormat)) {
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

    if(!formData.resumeFile.name)  {
      resumeBtn.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, resumeField: false}
      })
    }

    if(!formData.coverletterFile.name)  {
      coverletterBtn.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, coverletterField: false}
      })
    }

    
  }



  React.useEffect(() => {
    if(
      formInputsValid.firstName && formInputsValid.lastName && formInputsValid.email &&
      formInputsValid.resumeField &&
      formInputsValid.coverletterField
    ) {
      setFormInputsValid (prevFormInputsValid => {
        return {...prevFormInputsValid, formValid: true}
      })
    } else {
      setFormInputsValid (prevFormInputsValid => {
        return {...prevFormInputsValid, formValid: false}
      })
    }
  }, [ formInputsValid.firstName, formInputsValid.lastName, formInputsValid.email, formInputsValid.resumeField, formInputsValid.coverletterField])

  function sendEmail(event) {
    event.preventDefault();
    if(formInputsValid.formValid) {
      emailjs.sendForm("service_yanmhdm", process.env.REACT_APP_APPLY_TEMPLATE_ID, event.target, process.env.REACT_APP_APPLY_PUBLIC_KEY)
        .then(function(response) {
          setEmailSuccess(true)
          clearInputs()
          resetFormInputs()
          animatePopup()
        }) 
        .catch(function(error) {
          setEmailSuccess(false)
          animatePopup()
        });
    } else {
      validateFormOnSubmit();
    }
  }

  function animatePopup() {
    setPopupDisplay({
      display: "flex"
    })
    setTimeout(() => {
      setPopupDisplay({
        display: "none"
      })
    }, 5000);
  }

  return (
    <section className='contact-section'>
      <ScrollToTop />
      <form 
      className="form contact-form apply-form"
      onClick={props.toggleShowApplyForm} 
      onSubmit={sendEmail}
      >
       <div className='thank-you-popup' style={popupDisplay}>   
        <p className='thank-you-copy success'>{emailSuccess ? "Success!" : "Error!"}</p>
        <div className='checkmark-container'>
        {emailSuccess ? <IoCheckmarkCircleSharp className='thank-you-pop-checkmark'/> : <IoCloseCircleSharp className='thank-you-pop-error' />}
        </div>
        {emailSuccess ?
          <>
            <p className='thank-you-copy'>Thank you for<br></br>your interest in joining DAC.</p>
            <p className='thank-you-copy'>Should your skills align with our needs, we will be in touch.</p>
          </>    
          : 
          <>
            <p className='thank-you-copy'>Uh oh! It looks like something went wrong.</p>
            <p className='thank-you-copy'>Make sure your files aren't too big, and try again.</p>
          </>   
        }   
      </div>
        <div 
          className="apply-form-content"
          onClick={e => e.stopPropagation()}
        >
        <div className="apply-form-close-btn" onClick={props.toggleShowApplyForm}>X</div>
        <div className="form-row form-row-name">
          <br />
          <input
            className="jobTitleField"
            type="hidden"
            placeholder="Job Title"
            onChange={handleChange}
            name="jobTitle"
            id="jobTitle"
            value={`Position Title: ${formData.jobTitle}`}
          />
          <p className="jobTitleField">Position Title: {formData.jobTitle}</p>
          <input
            className="firstNameField"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            id="firstName"
            value={formData.firstName}
          />
          <input
            className="lastNameField"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            id="lastName"
            value={formData.lastName}
          />
        </div>
        <div className="form-row">
          <input
            className="emailField"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>

        <div className="upload-btn-container" >
          <div className="upload-btn-content">
            <label 
              className="upload-btn resume-btn"
              id="file-input-label"
              htmlFor="resumeFile">Upload<br></br>Resume
            </label>
            <input 
              onChange={handleChange}
              type="file"
              className="resume-input apply-upload-field"
              id="resumeFile"
              name="resumeFile"
            />
            {formData.resumeFile.name ? <div className="upload-file-container">
              <p className="upload-file-name">{formData.resumeFile.name}</p>
              {formData.resumeFile.name ? 
                <div className="resume-file-remove-btn" onClick={removeResume}>X</div>
              : ""}
            </div> : 
            <div className="upload-file-container upload-max-file-copy">
              <p className="upload-file-name">Max File Size 100KB</p>  
            </div>}
          </div>
          <div className="upload-btn-content">
            <label 
              className="upload-btn coverletter-btn"
              id="file-input-label"
              htmlFor="coverletterFile">Upload<br></br>Cover Letter
            </label>
            <input 
              onChange={handleChange}
              type="file"
              className="coverletter-input apply-upload-field"
              id="coverletterFile"
              name="coverletterFile"  
            />
            {formData.coverletterFile.name ? <div className="upload-file-container">
              <p className="upload-file-name">{formData.coverletterFile.name}</p>
              {formData.coverletterFile.name ? 
                <div className="coverletter-file-remove-btn" onClick={removeCoverletter}>X</div>
              : ""}
            </div> : 
            <div className="upload-file-container upload-max-file-copy">
              <p className="upload-file-name">Max File Size 100KB</p>  
            </div>}
           
          </div>
        </div>

        <p className='required-field-note'><span> &mdash;</span> All fields are required</p>


        <button 
          type="submit" 
          className="btn contact-btn cta-btn btn-hover"
        >
          Submit
        </button>
        </div>
      </form>
      </section>
  );
}
