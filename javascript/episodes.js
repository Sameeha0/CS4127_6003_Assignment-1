let lastScrollPosition = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
    lastScrollPosition = currentScrollPosition;
});

const episodes = [
    { id: 1, title: "Episode 1", description: "Meeting and Bickering", time: "1:51:50", img: "https://img.youtube.com/vi/lPgGcT8JRGM/0.jpg", link: "https://www.youtube.com/watch?v=lPgGcT8JRGM" },
    { id: 2, title: "Episode 2", description: "Unexpected Events and Growing Feelings", time: "01:57:12", img: "https://img.youtube.com/vi/JgtIXNAKKt0/0.jpg", link: "https://www.youtube.com/watch?v=JgtIXNAKKt0" },
    { id: 3, title: "Episode 3", description: "Working Together for Bulut", time: "01:53:36", img: "https://img.youtube.com/vi/kGhgKhbriSQ/0.jpg", link: "https://www.youtube.com/watch?v=kGhgKhbriSQ" },
    { id: 4, title: "Episode 4", description: "Melting the Ice", time: "01:55:45", img: "https://img.youtube.com/vi/QziQIs8N3EA/0.jpg", link: "https://www.youtube.com/watch?v=QziQIs8N3EA" },
    { id: 5, title: "Episode 5", description: "Secrets and Corners", time: "02:18:58", img: "https://img.youtube.com/vi/Y01Sby32iLA/0.jpg", link: "https://www.youtube.com/watch?v=Y01Sby32iLA" },
    { id: 6, title: "Episode 6", description: "Shadows and Plans", time: "02:13:56", img: "https://img.youtube.com/vi/VrJ1ALACxGc/0.jpg", link: "https://www.youtube.com/watch?v=VrJ1ALACxGc" },
    { id: 7, title: "Episode 7", description: "Uncomfortable Affection", time: "02:21:09", img: "https://img.youtube.com/vi/YHBCkj1CTiQ/0.jpg", link: "https://www.youtube.com/watch?v=YHBCkj1CTiQ" },
    { id: 8, title: "Episode 8", description: "Accepting Feelings", time: "02:10:48", img: "https://img.youtube.com/vi/ByV6qm5RqyM/0.jpg", link: "https://www.youtube.com/watch?v=ByV6qm5RqyM" },
    { id: 9, title: "Episode 9", description: "Caught Between Two", time: "02:02:08", img: "https://img.youtube.com/vi/HuOSfTYuq1A/0.jpg", link: "https://www.youtube.com/watch?v=HuOSfTYuq1A" },
    { id: 10, title: "Episode 10", description: "Running Away and Seeking Solace", time: "01:59:08", img: "https://img.youtube.com/vi/eavhe068zxI/0.jpg", link: "https://www.youtube.com/watch?v=eavhe068zxI" },
    { id: 11, title: "Episode 11", description: "Discovering Secrets", time: "02:15:57", img: "https://img.youtube.com/vi/zUpcn5LNzmI/0.jpg", link: "https://www.youtube.com/watch?v=zUpcn5LNzmI" },
    { id: 12, title: "Episode 12", description: "Forced Collaboration and Growing Tension", time: "02:15:57", img: "https://img.youtube.com/vi/luFzT-nrQ74/0.jpg", link: "https://www.youtube.com/watch?v=luFzT-nrQ74" },
    { id: 13, title: "Episode 13", description: "Learning the Secret", time: "02:22:28", img: "https://img.youtube.com/vi/ype-4E3ABJE/0.jpg", link: "https://www.youtube.com/watch?v=ype-4E3ABJE" },
    { id: 14, title: "Episode 14", description: "Breaking Up the Couple", time: "02:38:45", img: "https://img.youtube.com/vi/iRblGuLl-pc/0.jpg", link: "https://www.youtube.com/watch?v=iRblGuLl-pc" },
    { id: 15, title: "Episode 15", description: "Unexpected Decision", time: "02:09:30", img: "https://img.youtube.com/vi/NNuje0uDmXA/0.jpg", link: "https://www.youtube.com/watch?v=NNuje0uDmXA" },
    { id: 16, title: "Episode 16", description: "Facing Death", time: "02:05:49", img: "https://img.youtube.com/vi/QqZO9gmDj9I/0.jpg", link: "https://www.youtube.com/watch?v=QqZO9gmDj9I" },
    { id: 17, title: "Episode 17", description: "Prison and Game", time: "02:18:29", img: "https://img.youtube.com/vi/FhJ5mwYhAUI/0.jpg", link: "https://www.youtube.com/watch?v=FhJ5mwYhAUI" },
    { id: 18, title: "Episode 18", description: "Playing the Game", time: "02:21:06", img: "https://img.youtube.com/vi/V7by5YazxLc/0.jpg", link: "https://www.youtube.com/watch?v=V7by5YazxLc" },
    { id: 19, title: "Episode 19", description: "Deniz's Surprise Entry", time: "02:42:58", img: "https://img.youtube.com/vi/I2HBa44Xboc/0.jpg", link: "https://www.youtube.com/watch?v=I2HBa44Xboc" },
    { id: 20, title: "Episode 20", description: "Surprise Party and Unexpected Turns", time: "02:16:10", img: "https://img.youtube.com/vi/YpN9oPXlKsk/0.jpg", link: "https://www.youtube.com/watch?v=YpN9oPXlKsk" },
    { id: 21, title: "Episode 21", description: "Pelin's Arrival and Nazli's Decision", time: "02:21:44", img: "https://img.youtube.com/vi/sfGkeE2GNNg/0.jpg", link: "https://www.youtube.com/watch?v=sfGkeE2GNNg" },
    { id: 22, title: "Episode 22", description: "Talking and Pride", time: "02:19:11", img: "https://img.youtube.com/vi/DcPsP0FQ1UM/0.jpg", link: "https://www.youtube.com/watch?v=DcPsP0FQ1UM" },
    { id: 23, title: "Episode 23", description: "Opening Up and Happiness", time: "2:26:55", img: "https://img.youtube.com/vi/D9lfLZHYP7M/0.jpg", link: "https://www.youtube.com/watch?v=D9lfLZHYP7M" },
    { id: 24, title: "Episode 24", description: "Unexpected Proposal and Struggles", time: "02:05:12", img: "https://img.youtube.com/vi/FxuCqVF4Foo/0.jpg", link: "https://www.youtube.com/watch?v=FxuCqVF4Foo" },
    { id: 25, title: "Episode 25", description: "Therapy and Hakan's Plans", time: "01:51:57", img: "https://img.youtube.com/vi/3Nwc0AV9XWo/0.jpg", link: "https://www.youtube.com/watch?v=3Nwc0AV9XWo" },
    { id: 26, title: "Episode 26", description: "Love and Farewell", time: "01:31:38", img: "https://img.youtube.com/vi/ppUZhdC7DXE/0.jpg", link: "https://www.youtube.com/watch?v=ppUZhdC7DXE" }
];
let currentSortOrder = 'ascending'; 

        function sortEpisodes() {
            currentSortOrder = currentSortOrder === 'ascending' ? 'descending' : 'ascending'; 
            episodes.sort((a, b) => {
                return currentSortOrder === 'ascending' ? a.id - b.id : b.id - a.id;
            });
            displayEpisodes(episodes);
        }

function displayEpisodes(episodesList) {
    const episodesContainer = document.getElementById('episodesContainer');
    episodesContainer.innerHTML = '';
    episodesList.forEach(episode => {
        const episodeCard = document.createElement('div');
        episodeCard.classList.add('episode-card');

        const episodeLink = document.createElement('a');
        episodeLink.href = episode.link;
        episodeLink.target = '_blank';
        episodeLink.classList.add('episode-link');

        episodeCard.innerHTML = `
            <img src="${episode.img}" alt="${episode.title}">
            <div class="episode-info">
                <h3>${episode.title}</h3>
                <p>${episode.description}</p>
                <p><strong>Time:</strong> ${episode.time}</p>
            </div>
        `;

        episodeLink.appendChild(episodeCard);
        episodesContainer.appendChild(episodeLink);
    });
}

displayEpisodes(episodes);