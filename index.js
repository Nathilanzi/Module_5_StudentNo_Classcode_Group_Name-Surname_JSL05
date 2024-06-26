// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },

    // Feel free to add even more songs
    { title: "Forgive Our Trespasses", artist: "Nandipha 808", genre: "Amapiano"},
    { title: "Feelings", artist: "Cyfred, Tman Xpress", genre: "Amapiano"},
    { title: "Jaiva", artist: "Busta 929", genre: "Amapiano"},
    { title: "Believer", artist: "Lira", genre: "Afro-Soul"},
    { title: "Nomvula", artist: "Freshly Ground", genre: "Afro-Soul"},
    { title: "Unspoken Word - Intro", artist: "The Soil", genre: "Afro-Soul"},
    { title: "Ebasini", artist: "Tyler ICU", genre: "Amapiano"},
    { title: "Feelings", artist: "Zonke", genre: "Afro-Soul"},
    { title: "When I See You", artist: "Tamia", genre: "R&B"},
    { title: "Let It Burn", artist: "Usher", genre: "R&B"},

];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Afro-Soul",
    "Rocket": "R&B",
    "Groot": "Amapiano"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) { // Object.entries(): This method is used to convert an object into an array of its key-value pairs. In this case, guardians is the object being converted.
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.entries(guardians).map(([name, genre]) => { // The destructuring assignment [name, genre] extracts the name and genre from each pair.
      // Filter the songs array based on the specified genre
      const songsOfPreferredGenre = songs.filter(song => song.genre === genre); // Here, it filters songs based on whether their genre matches the genre extracted from guardians.
  
      // Generate a random playlist of 3 songs
      const playlist = songsOfPreferredGenre
        .sort(() => 0.5 - Math.random()) // This method sorts the elements of an array in place and returns the sorted array.
         /* Creates a shallow copy of a portion of an array. 
        This method returns a shallow copy of a portion of an array into a new array selected from start to end (end not included) where start is inclusive and end is exclusive. 
        Here, it's used to select the first three songs after they've been shuffled. */

      // Add the guardian's name as the first element of the playlist
      playlist.unshift({ name }); // it adds an object containing the name of the playlist to the beginning of the playlist array.
  
      return playlist;
    });
  
    // Call function to display the playlists
    displayPlaylists(playlists);
  }
  
  // Helper function to display the playlists
function displayPlaylists(playlists) {
  // Create a container div for playlists
  const playlistsDiv = document.createElement('div');
  playlistsDiv.id = 'playlists';

  // Loop through each playlist
  playlists.forEach((playlist) => {
    // Create a playlist container div
    const playlistDiv = document.createElement('div');
    playlistDiv.classList.add('playlist');

    // Create a title h2
    const title = document.createElement('h2');
    title.textContent = playlist[0].name + "'s Playlist";
    playlistDiv.appendChild(title)

    // Create an unordered list
    const list = document.createElement('ul');

    // Loop through each song in the playlist
    playlist.slice(1).forEach((song) => {
      // Create a list items
      const listItem = document.createElement('ul');

      // Set the song title and artist
      const songTitle = document.createElement('span');
      songTitle.textContent = `${song.title} `;
      songTitle.className = 'song-title';
      const songArtist = document.createElement('span');
      songArtist.textContent = `by ${song.artist}`;

      // Append the title and artist to the list item
      listItem.appendChild(songTitle);
      listItem.appendChild(songArtist);

      // Append the list item to the list
      list.appendChild(listItem);
    });

    // Append the list to the playlist container
    playlistDiv.appendChild(list);

    // Append the playlist container to the container div
    playlistsDiv.appendChild(playlistDiv);
  });

  // Append the container div to the document
  document.body.appendChild(playlistsDiv);
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

