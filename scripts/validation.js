const showInputError = (form, input, message) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add("modal__input_type_error");
    error.textContent = message;
    error.classList.add("modal__error_visible");
  };
  
  const hideInputError = (form, input) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove("modal__input_type_error");
    error.textContent = "";
    error.classList.remove("modal__error_visible");
  };
  
  const checkInputValidity = (form, input) => {
    if (!input.validity.valid) {
      showInputError(form, input, input.validationMessage);
    } else {
      hideInputError(form, input);
    }
  };
  
  const setEventListeners = (form) => {
    const inputs = Array.from(form.querySelectorAll(".modal__input"));
  
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(form, input);
      });
    });
  };
  
  const enableValidation = () => {
    const forms = Array.from(document.querySelectorAll(".modal__form"));
  
    forms.forEach((form) => {
      form.setAttribute("novalidate", true); 
      setEventListeners(form);             
    });
  };
  
  enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__submit-button",
    inactiveButtonClass: "modal__submit-button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  });
  
  
  