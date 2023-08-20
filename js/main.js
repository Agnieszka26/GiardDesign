import BiggerPicture from "bigger-picture";
import Macy from "macy";

const newImages = [
  "./public/images/project12.jpg",
  "./public/images/project14.jpg",
  "./public/images/project13.jpg",
];

const imageLinks = document.querySelectorAll("#images > a");
const buttonLoadMore = document.getElementById("loadMore");
const imagesContainer = document.getElementById("images");
const sectionContainer = document.getElementById("realizacje");
const overlay = document.getElementById("overlay");

const bp = BiggerPicture({
  target: document.body,
});

const masonry = Macy({
  container: "#images",
  trueOrder: true,
  margin: 23,
  columns: 3,
  waitForImages: true,
  breakAt: {
    520: {
      columns: 1,
    },
  },
});

const openGallery = (e) => {
  e.preventDefault();
  bp.open({
    items: imageLinks,
    el: e.currentTarget,
  });
};

const loadMoreImages = () => {
  newImages.forEach((imageUrl) => {

    const imageLink = document.createElement("a");
    const imageElement = document.createElement("img");

    imageLink.href = imageUrl;
    imageLink.dataset.img = `${imageUrl} 1800w, ${imageUrl} 3000w`;
    imageLink.dataset.thumb = imageUrl;
    imageLink.dataset.height = "2000";
    imageLink.dataset.width = "3000";
    imageLink.dataset.alt = "New project image";
    imageElement.src = imageUrl;
    imageElement.alt = "New project image";

    imageLink.appendChild(imageElement);
    imagesContainer.appendChild(imageLink);
    masonry.recalculate();
  });

  sectionContainer.style.height = "300vh";
  overlay.style.display = "none";
  buttonLoadMore.style.display = "none";
};

  for (let link of imageLinks) {
    link.addEventListener("click", openGallery);
  }
  
  buttonLoadMore.addEventListener("click", loadMoreImages);