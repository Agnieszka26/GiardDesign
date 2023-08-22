import icon1 from "/images/experiment.svg";
import icon3 from "/images/realizacje.svg";
import icon2 from "/images/wizualizacjie.svg";

const ofertaSection = document.getElementById("ofertaSection");
const ofertaCardsContent = [
  {
    src: icon1,
    title: "Projekty",
    description:
      "Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.",
  },
  {
    src: icon2,
    title: "Wizualizacje",
    description:
      "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.",
  },
  {
    src: icon3,
    title: "Realizacje",
    description:
      "Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.",
  },
];

const createCardElement = ({ src, title, description }) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col-lg-4", "col-md-12");

  const innerCardDiv = document.createElement("div");
  innerCardDiv.classList.add("card", "custom-card", "m-auto");

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("container");

  const image = document.createElement("img");
  image.style.height = "40px";
  image.src = src;
  image.classList.add("filter-green");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "pt-5");
  cardTitle.textContent = title;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-text", "pt-3", "pb-5");
  cardDescription.textContent = description;

  const cardLink = document.createElement("a");
  cardLink.href = "#";
  cardLink.classList.add("card-link", "pt-3");

  const learnMoreSpan = document.createElement("span");
  const arrowImage = document.createElement("img");
  arrowImage.src = "/images/strzalkaWPrawoZielonaIcon.png";

  learnMoreSpan.appendChild(arrowImage);
  cardLink.appendChild(document.createTextNode("Dowiedz się więcej "));
  cardLink.appendChild(learnMoreSpan);

  cardBodyDiv.appendChild(imageContainer);
  imageContainer.appendChild(image)
  cardBodyDiv.appendChild(cardTitle);
  cardBodyDiv.appendChild(cardDescription);
  cardBodyDiv.appendChild(cardLink);

  innerCardDiv.appendChild(cardBodyDiv);
  cardDiv.appendChild(innerCardDiv);

  return cardDiv;
};

const appendCards = () => {
  const cardElements = ofertaCardsContent.map(createCardElement);
  cardElements.forEach((cardElement) => {
    ofertaSection.appendChild(cardElement);
  });
};

appendCards();
