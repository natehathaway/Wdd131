document.getElementById('filter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const author = document.getElementById('author').value;
  const date = document.getElementById('date').value;

  document.querySelectorAll('article').forEach(article => {
    const authorText = article.querySelector('.details p:nth-child(2)').textContent.replace('By ', '');
    const dateText = article.querySelector('.details p:first-child').textContent;

    const matchAuthor = author === 'all' || author === authorText;
    const matchDate = date === 'all' || dateText.startsWith(new Date(date).toLocaleString('default', { month: 'short' })) && dateText.includes(date.split('-')[0]);

    article.style.display = (matchAuthor && matchDate) ? 'grid' : 'none';
  });
});

const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
        author: 'Angie Sage',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
        author: 'Rick Riordan',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        author: "David Eddings",
        description:
        "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
            
    }
]


function renderArticles(articles) {
  const container = document.getElementById('articles-container');
  container.innerHTML = ''; // Clear any existing content

  articles.forEach(article => {
    const articleElem = document.createElement('article');

    articleElem.innerHTML = `
      <div class="details">
        <p>${article.date}</p>
        <p>By ${article.author || 'Unknown Author'}</p>
      </div>
      <div class="content">
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}" />
        <p>${article.description}</p>
      </div>
    `;

    container.appendChild(articleElem);
  });
}

// Call this function on page load to display articles:
renderArticles(articles);
