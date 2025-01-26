// Array of games with their details
const games = [
    { name: 'Call Of Duty MW II', price: '$29.99', image: 'https://images6.alphacoders.com/124/1245270.jpg' },
    { name: 'CyberPunk 2077', price: '$29.99', image: 'https://cdn.mos.cms.futurecdn.net/BeyhFdCM2ugLQjX8vX7fuQ-1200-80.jpg' },
    { name: 'GTA VI', price: '$29.99', image: 'https://www.hindustantimes.com/ht-img/img/2023/11/06/550x309/meme-1-5_1680835922484_1699241160882.jpeg' },
    { name: 'Forza Horizon 5', price: '$29.99', image: 'https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/6c12-forza_horizon_5.jpeg.webp' },
    { name: 'Phasmophobia', price: '$29.99', image: 'https://www.fangoria.com/wp-content/uploads/2024/03/phasmophobia-1.jpeg' },
    { name: 'Inside the Backrooms', price: '$29.99', image: 'https://i.ytimg.com/vi/uEQf1RJ9sh8/maxresdefault.jpg' },
    { name: 'Mortal Kombat 11', price: '$29.99', image: 'https://www.psu.com/wp/wp-content/uploads/2020/10/Mortal-Kombat-11-PS4-Wallpapers-04.jpg' },
    { name: 'Red Dead Redemption 2', price: '$29.99', image: 'https://store-images.s-microsoft.com/image/apps.58752.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.95fdf1a1-efd6-4938-8100-8abae91695d6?q=90&w=480&h=270' },
    { name: 'Watchdogs 2', price: '$29.99', image: 'https://store-images.s-microsoft.com/image/apps.38484.69997608528322872.06dc9610-5c4e-484e-b028-58ad215e637a.29a8afc9-c3c7-4b3d-8e9f-f1b2858db4f8?q=90&w=480&h=270' }
  ];
  
  // Function to handle the search
  function searchGame() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultContainer = document.getElementById('search-result');
    
    // Filter the games based on the search query
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(query));
  
    // Display the result or show "Not Found"
    if (filteredGames.length > 0) {
      resultContainer.innerHTML = filteredGames.map(game => {
        return `
          <div class="game-card">
            <img src="${game.image}" alt="${game.name}">
            <h4>${game.name}</h4>
            <p>${game.price}</p>
            <a href="game-details.html" class="btn">View Details</a>
          </div>
        `;
      }).join('');
      resultContainer.style.display = 'block';
    } else {
      resultContainer.innerHTML = '<p>No games found.</p>';
      resultContainer.style.display = 'block';
    }
  }