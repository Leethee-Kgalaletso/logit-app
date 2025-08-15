// dom elements

const albumForm = document.getElementById("albumForm");
const albumNameInput = document.getElementById("albumName");
const artistInput = document.getElementById("artist");
const ratingInput = document.getElementById("rating");
const spotifyToken = import.meta.env.VITE_SPOTIFY_TOKEN;

async function getAlbumCover(album, artist) {
    const response = await fetch(
    `https://api.spotify.com/v1/search?q=${album}+${artist}&type=album&limit=1`,
    { headers: { 'Authorization': 'Bearer spotifyToken' } }
    );
    const data = await response.json();
    console.log(data);
    return data.albums?.items[0]?.images[0]?.url || "default_cover.jpg";
}

// Display Albums
async function loadAlbums() {
    const snapshot = await db.collection("albumLogs").get();
    const albumList = document.getElementById("albumList");
    albumList.innerHTML = snapshot.docs.map(doc => `
        <div class="album">
        <img src="${doc.data().coverUrl}" width="100">
        <h3>${doc.data().albumName}</h3>
        <p>${doc.data().artist} • ⭐ ${doc.data().rating}/5</p>
        </div>
    `).join("");
}
loadAlbums();

albumForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const albumName = albumNameInput.value;
    const artist = artistInput.value;
    const rating = ratingInput.value;
    
    if (!albumName || !artist || !rating) {
        alert("Please fill in all fields.");
        return;
    }
    const coverUrl = await getAlbumCover(albumName, artist);

    await db.collection("albumLogs").add({
    userId: "demoUser", // Replace with Firebase Auth later
    albumName,
    artist,
    rating: Number(rating),
    coverUrl,
    loggedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    alert("Album logged!");
    loadAlbums();
});