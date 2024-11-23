let lastScrollPosition = 0;
const nav = document.querySelector('nav');

// Hide the nav when scrolling down, show it when scrolling up
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
    lastScrollPosition = currentScrollPosition;
});

// Song data
const songs = [
    {
        title: "Dolunay Jenerik",
        artist: "Cem Tuncer, Ercüment Orkut",
        album: "Dolunay (Orijinal Dizi Müzikleri)",
        duration: "1:30",
        cover: "/images/album.jpg",
        audio: "/audios/Dolunay Jenerik.mp3"
    },
    {
        title: "Nazlı",
        artist: "Cem Tuncer, Ercüment Orkut",
        album: "Dolunay (Orijinal Dizi Müzikleri)",
        duration: "2:15",
        cover: "/images/album.jpg",
        audio: "/audios/Nazlı.mp3"
    },
    {
        title: "İnat",
        artist: "Cem Tuncer, Ercüment Orkut",
        album: "Dolunay (Orijinal Dizi Müzikleri)",
        duration: "1:48",
        cover: "/images/album.jpg",
        audio: "/audios/İnat.mp3"
    },
    {
        title: "Mutfak",
        artist: "Cem Tuncer, Ercüment Orkut",
        album: "Dolunay (Orijinal Dizi Müzikleri)",
        duration: "1:08",
        cover: "/images/album.jpg",
        audio: "/audios/Mutfak.mp3"
    },
    {
        title: "Hayatı Sev",
        artist: "Cem Tuncer, Ercüment Orkut",
        album: "Dolunay (Orijinal Dizi Müzikleri)",
        duration: "2:54",
        cover: "/images/album.jpg",
        audio: "/audios/Hayatı Sev.mp3"
    },
    {
        title: "Pozitif",
        artist: "Cem Tuncer, Ercüment Orkut",
        album: "Dolunay (Orijinal Dizi Müzikleri)",
        duration: "2:12",
        cover: "/images/album.jpg",
        audio: "/audios/Pozitif.mp3"
    },
    {
        title: "Karanlık",
        artist: "Cem Tuncer, Ercüment Orkut",
        album: "Dolunay (Orijinal Dizi Müzikleri)",
        duration: "1:40",
        cover: "/images/album.jpg",
        audio: "/audios/Karanlık.mp3"
    }
];

const formatTitleForID = (title) => {
    return title.replace(/\s+/g, '-').toLowerCase().replace(/[^\w-]/g, '');
}

const songList = document.getElementById("song-list");
let songCards = '';

songs.forEach(song => {
    const songCard = `
        <div class="song-card">
            <div class="audio-player">
                <img alt="Album cover" class="me-2" height="40" src="${song.cover}" width="40"/>
                <div>
                    <strong>${song.title}</strong>
                    <br/>
                    <small class="text-muted">${song.artist}</small>
                    <audio id="audio-${formatTitleForID(song.title)}" controls>
                        <source src="${song.audio}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
            
            <div class="details">
                <span>${song.album}</span>
                <span>${song.duration}</span>
            </div>
        </div>
    `;
    songCards += songCard;
});

songList.innerHTML = songCards; 