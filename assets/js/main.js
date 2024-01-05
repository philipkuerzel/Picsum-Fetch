let h1 = document.createElement("h1") // h1 für Überschrift
    h1.textContent = "Picsum Fetch"
    document.body.appendChild(h1)

let gallery = document.createElement("section") // section für Bildergallery
    document.body.appendChild(gallery)

fetch("https://picsum.photos/v2/list")
.then((response) => response.json())
.then((data) => {
    console.log(data)

    data.forEach((element) => {
        const imgAuthor = element.author
        const imgSrc = element.download_url
        const imgUrl = element.url
        
        let imgDiv = document.createElement("div")  // div erstellen für figure und button
        let imgBox = document.createElement("figure")// figure für Bilder erstellen
        imgDiv.appendChild(imgBox)
        
        let img = document.createElement("img") // img erstellen
        img.setAttribute("src", imgSrc)
        img.setAttribute("alt", imgUrl)
        imgBox.appendChild(img) //img zu figure hinzufügen

        let authorName = document.createElement("figcaption") // figcaption erstellen um Name des Authors anzuzeigen
        authorName.textContent = imgAuthor
        imgBox.appendChild(authorName)  // figcaption zu figure hinzufügen

        let seeMoreBtn = document.createElement("button") // button erstellen um Details anzuzeigen durch Weiterleitung
        seeMoreBtn.textContent = "SeeMore"
        seeMoreBtn.addEventListener("click", () => {
            window.open(imgUrl, "_blank")
        })
        imgDiv.appendChild(seeMoreBtn)  //button zu div hinzufügen
        gallery.appendChild(imgDiv) //div zur Hauptgallery hinzufügen
    });
})
    .catch((error) => console.log("Sorry ich kann nicht mehr :D",error))