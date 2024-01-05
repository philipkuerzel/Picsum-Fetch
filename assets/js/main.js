let page = 1;

let h1 = document.createElement("h1");
h1.textContent = "Picsum Fetch";
document.body.appendChild(h1);

let gallery = document.createElement("section");
document.body.appendChild(gallery);

function fetchAndDisplayImages() {
    fetch(`https://picsum.photos/v2/list?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            data.forEach((element) => {
                const imgAuthor = element.author;
                const imgSrc = element.download_url;
                const imgUrl = element.url;

                let imgDiv = document.createElement("div");
                let imgBox = document.createElement("figure");
                imgDiv.appendChild(imgBox);

                let img = document.createElement("img");
                img.setAttribute("src", imgSrc);
                img.setAttribute("alt", imgUrl);
                imgBox.appendChild(img);

                let authorName = document.createElement("figcaption");
                authorName.textContent = imgAuthor;
                imgBox.appendChild(authorName);

                let seeMoreBtn = document.createElement("button");
                seeMoreBtn.textContent = "See More";
                seeMoreBtn.addEventListener("click", () => {
                    window.open(imgUrl, "_blank");
                });
                imgDiv.appendChild(seeMoreBtn);
                gallery.appendChild(imgDiv);
            });
        })
        .catch((error) => console.log("Sorry ich kann nicht mehr :D", error));
}

window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        page++;
        fetchAndDisplayImages();
    }
};

fetchAndDisplayImages();
