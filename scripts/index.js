const initialCards = [
    {
      name: "Val Thorens",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
    },
    {
      name: "Restaurant terrace",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
    },
    {
      name: "An outdoor cafe",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
    },
    {
      name: "A very long bridge, over the forest and through the trees",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
    },
    {
      name: "Tunnel with morning light",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
    },
    {
      name: "Mountain house",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
    },
    {
      name: "Landscape view",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
    }
    
  ];
  
  const profileEditButton = document.querySelector(".profile__edit-button");
  const cardModalButton = document.querySelector(".profile__add-button");
  const profileName = document.querySelector(".profile__name");
  const profileDescription = document.querySelector(".profile__description");
  
  const editModal = document.querySelector("#edit-modal");
  const editFormElement = editModal.querySelector(".modal__form");
  const editModalCloseButton = editModal.querySelector(".modal__close-button");
  const editModalNameInput = editModal.querySelector("#profile-name-input");
  const editModalDescriptionInput = editModal.querySelector("#profile-description-input");

  const cardModal = document.querySelector("#add-card-modal")
  const cardForm = cardModal.querySelector(".modal__form")
  const cardModalCloseButton = cardModal.querySelector(".modal__close-button")
  const cardLinkInput = cardModal.querySelector("#add-card-link-input")

  const previewModal = document.querySelector("#preview-modal")
  const previewModalImageEl = previewModal.querySelector(".modal__image")
  const previewModalCaptionEl = previewModal.querySelector(".modal__caption")
  
  const cardsContainer = document.querySelector(".cards__list");
  const cardTemplate = document.querySelector("#card-template").content;
  
  function openModal(modal) {
  modal.classList.add("modal_opened");
    
  }
  
  function closeModal(modal) {
    modal.classList.remove("modal_opened");
  }
  
  function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDescription.textContent = editModalDescriptionInput.value;
    closeModal(editModal);
  }

  function handleAddCardSubmit(evt) {
    evt.preventDefault();
  
    const cardNameInput = document.querySelector("#add-card-name-input");
    const cardLinkInput = document.querySelector("#add-card-link-input");

  
    const inputValues = {
      name: cardNameInput.value,
      link: cardLinkInput.value
    };
  
    const cardElement = getCardElement(inputValues);
    cardsContainer.prepend(cardElement);
  
    cardNameInput.value = "";
    cardLinkInput.value = "";
    closeModal(cardModal);
  }
  
  
  function getCardElement(data) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    
  
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;


  
    const likeButton = cardElement.querySelector(".card__like-button");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_liked");
    });

    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", () => {
      cardElement.remove();
    });

    cardImage.addEventListener("click", () => {
      previewModalImageEl.src = data.link;
      previewModalImageEl.alt = data.name;
      previewModalCaptionEl.textContent = data.name;
      openModal(previewModal);
    });
    
  
    return cardElement;
  }
  
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardsContainer.append(cardElement);
  });
  
  profileEditButton.addEventListener("click", () => {
    editModalNameInput.value = profileName.textContent;
    editModalDescriptionInput.value = profileDescription.textContent;
    openModal(editModal);
  });
  editModalCloseButton.addEventListener("click", () => { 
    closeModal(editModal);
  });

  cardModalButton.addEventListener("click", () => {
    openModal(cardModal);
  });
  cardModalCloseButton.addEventListener("click", () => { 
    closeModal(cardModal);
  });

  editFormElement.addEventListener("submit", handleEditFormSubmit);
  cardForm.addEventListener("submit", handleAddCardSubmit);

  const previewModalCloseButton = previewModal.querySelector(".modal__close-button");
previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});
