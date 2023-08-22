import BiggerPicture from "bigger-picture";
import Macy from "macy";

const newImages = [
  "./public/images/project12.jpg",
  "./public/images/project14.jpg",
  "./public/images/project13.jpg",
];

const imageContainer = document.getElementById("images");
const imagesContent = [
  "./public/images/project1.png",
  "./public/images/project2.png",
  "./public/images/project3.png",
  "./public/images/project4.png",
  "./public/images/project5.png",
  "./public/images/project6.png",
  "./public/images/project8.png",
  "./public/images/project9.png",
  "./public/images/project10.png",
  "./public/images/project11.png",

];
const openGallery = (e) => {
  console.log("openGallery e.currentTarget", e.currentTarget);
  e.preventDefault();
  bp.open({
    items: imageLinks,

    el: e.currentTarget,
  });
};

const imagesLoad = () => {
  imagesContent.forEach((url) => {
    const imageLink = document.createElement("a");
    const imageElement = document.createElement("img");

    imageLink.href = url;
    imageLink.dataset.img = `${url} 1800w, ${url} 3000w`;
    imageLink.dataset.thumb = url;
    imageLink.dataset.height = "2000";
    imageLink.dataset.width = "3000";
    imageLink.dataset.alt = url;
    imageElement.src = url;
    imageElement.alt = url;
    imageLink.appendChild(imageElement);
    imageContainer.appendChild(imageLink);
  });

  console.log(imageContainer);
};
imagesLoad();

const imageLinks = document.querySelectorAll("#images >  a:last-child");
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
