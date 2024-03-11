import * as React from "react";
import emailjs from "@emailjs/browser";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Contact() {
  const [popupDisplay, setPopupDisplay] = React.useState({
    display: "none",
  });

  const [emailSuccess, setEmailSuccess] = React.useState(false)

  const [formData, setFormData] = React.useState({
    contactGroup: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formInputsValid, setFormInputsValid] = React.useState({
    contactGroup: false,
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  function clearInputs() {
    setFormData({
      contactGroup: "",
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  }

  function resetFormInputs() {
    setFormInputsValid({
      contactGroup: false,
      firstName: false,
      lastName: false,
      email: false,
      message: false,
    });
  }

  const [contactGroupField, setContactGroupField] = React.useState("");
  const [firstNameField, setFirstNameField] = React.useState("");
  const [lastNameField, setLastNameField] = React.useState("");
  const [emailField, setEmailField] = React.useState("");
  const [messageField, setMessageField] = React.useState("");

  React.useEffect(() => {
    setContactGroupField(document.querySelector(".contactGroupField"));
    setFirstNameField(document.querySelector(".firstNameField"));
    setLastNameField(document.querySelector(".lastNameField"));
    setEmailField(document.querySelector(".emailField"));
    setMessageField(document.querySelector(".messageField"));
  }, []);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    validateFormInputs();
  }

  function validateFormInputs() {
    const emailFormat = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const nameFormat = /^[A-Za-z'\- ]+$/;

    if (
      contactGroupField.value === "" &&
      document.activeElement === contactGroupField
    ) {
      contactGroupField.classList.add("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, contactGroup: false };
      });
    } else if (contactGroupField.value.length > 0) {
      contactGroupField.classList.remove("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, contactGroup: true };
      });
    }

    if (
      !firstNameField.value.match(nameFormat) &&
      document.activeElement === firstNameField
    ) {
      firstNameField.classList.add("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, firstName: false };
      });
    } else if (firstNameField.value.match(nameFormat)) {
      firstNameField.classList.remove("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, firstName: true };
      });
    }

    if (
      !lastNameField.value.match(nameFormat) &&
      document.activeElement === lastNameField
    ) {
      lastNameField.classList.add("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, lastName: false };
      });
    } else if (lastNameField.value.match(nameFormat)) {
      lastNameField.classList.remove("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, lastName: true };
      });
    }

    if (
      !emailField.value.match(emailFormat) &&
      document.activeElement === emailField
    ) {
      emailField.classList.add("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, email: false };
      });
    } else if (emailField.value.match(emailFormat)) {
      emailField.classList.remove("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, email: true };
      });
    }

    if (
      messageField.value.length === 0 &&
      document.activeElement === messageField
    ) {
      messageField.classList.add("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, message: false };
      });
    } else if (messageField.value.length > 0) {
      messageField.classList.remove("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, message: true };
      });
    }
  }

  function sendEmail(event) {
    event.preventDefault();
    if (
      formInputsValid.contactGroup &&
      formInputsValid.firstName &&
      formInputsValid.lastName &&
      formInputsValid.email &&
      formInputsValid.message
    ) {
      emailjs.sendForm(
        process.env.REACT_APP_CONTACT_SERVICE_ID,
        process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_CONTACT_PUBLIC_KEY
      )
      .then((response) => {
        setEmailSuccess(true)
        clearInputs()
        resetFormInputs()
        animatePopup()
      }) 
      .catch((error) => {
        setEmailSuccess(false)
        animatePopup()
      });
    } else {
      if (contactGroupField.value.length === 0) {
        contactGroupField.classList.add("input-error");
      }
      if (firstNameField.value.length === 0) {
        firstNameField.classList.add("input-error");
      }
      if (lastNameField.value.length === 0) {
        lastNameField.classList.add("input-error");
      }
      if (emailField.value.length === 0) {
        emailField.classList.add("input-error");
      }
      if (messageField.value.length === 0) {
        messageField.classList.add("input-error");
      }
    }
  }

  function animatePopup() {
    setPopupDisplay({
      display: "flex",
      className: "fadein",
    });
    setTimeout(() => {
      setPopupDisplay({
        display: "none",
        className: "",
      });
    }, 4500);
  }

  return (
    <form className="form contact-form" onSubmit={sendEmail}>
      <div className="thank-you-popup" style={popupDisplay}>
        <p className="thank-you-copy success">{emailSuccess ? "Success!" : "Error!"}</p>
        <div className="checkmark-container">
        {emailSuccess ? <IoCheckmarkCircleSharp className='thank-you-pop-checkmark'/> : <IoCloseCircleSharp className='thank-you-pop-error' />}
        </div>

       


        {emailSuccess ?
          <>
          <p className="thank-you-copy">
          Thank you<br></br> for contacting DAC.</p>
          <p className="thank-you-copy">We will be in touch soon.</p>
          </>    
          : 
          <>
            <p className='thank-you-copy'>Uh oh! It looks like something went wrong.</p>
            <p className='thank-you-copy'>Make sure all information is entered correctly, and try again.</p>
          </>   
        }   
      </div>
      <div className="form-row form-row-name">
        <br />
        <label htmlFor="contactGroup" className="select-label">
          Which group would you like to contact?
          <select
            className="contactGroupField"
            id="contactGroup"
            value={formData.contactGroup}
            onChange={handleChange}
            name="contactGroup"
          >
            <option value="" disabled hidden>
              Choose Group To Contact
            </option>
            <option value="" disabled>
              Court Appointed Family Defense:
            </option>
            <option value="Legal Services">Legal Services</option>
            <option value="Mentor Parent">Mentor Parents</option>
            <option value="Social Worker">Social Workers</option>
            <option value="" disabled>
              Prevention Services:
            </option>
            <option value="First Call">First Call For Families</option>
            <option value="Corridor">Corridor</option>
            <option value="" disabled>
              Other:
            </option>
            <option value="General Info">General Information</option>
            <option value="Funding Inquiry">Interested In Funding DAC</option>
            <option value="Learn More">Want To Learn More</option>
          </select>
        </label>
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
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
      </div>
      <div className="form-row">
        <textarea
          className="messageField"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        ></textarea>
      </div>

      <p className="required-field-note">
        <span> &mdash;</span> All fields are required
      </p>

      <button type="submit" className="btn contact-btn cta-btn btn-hover">
        Submit
      </button>
    </form>
  );
}
