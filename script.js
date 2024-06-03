// Funksjon for å hente data fra API
function fetchData() {

    let apiURL = `https://picsum.photos/v2/list`;
    let image = document.getElementById('image')
 
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
           // console.log(data); //Sjekker at dataen blir hentet og hvilken data som ligger i API-en
 
            // // Velg et tilfeldig bilde fra dataen
            // let randomIndex = Math.floor(Math.random() * data.length);
            // let imageUrl = data[randomIndex].download_url;
            // let author = data[randomIndex].author; // Henter forfatteren av bildet
 
            // // Sett kilden til bildet
            // image.src = imageUrl;
 
            // // Logg forfatteren til konsollen
            // console.log("Forfatter av bildet:", author);
        })
        .catch(error => {
            console.error('Feil ved henting av data:', error);
        });
 }
 
 document.getElementById('btn').addEventListener('click', fetchData);
