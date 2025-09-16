books = [];

let cBooks = document.querySelector(".c-books");
let pBooks = document.querySelector(".p-books");

let newBookForm = document.querySelector(".newBookForm");

function book(id, name, author, pages, read) {
	this.id = id;
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addNewBook(name, author, pages, read) {
	const id = crypto.randomUUID();
	let B1 = new book(id, name, author, pages, read);
	books.push(B1);
}

function newBtn() {
	newBookForm.show();
}

function newBook() {
	bookName = document.getElementById("fname");
	bookAuthor = document.getElementById("fauthor");
	bookPages = document.getElementById("fpages");
	bookRead = document.getElementById("fread");

	addNewBook(
		bookName.value,
		bookAuthor.value,
		bookPages.value,
		bookRead.checked
	);

	renderBooks();
}

book.prototype["flipStatus"] = function () {
	this.read = !this.read;
	console.log("ad");
	renderBooks();
};

function renderBooks() {
	cBooks.innerHTML = "";
	pBooks.innerHTML = "";
	for (x of books) {
		if (x.read == true) {
			cBooks.innerHTML += `
                <tr class="book">
					<th class="name">${x.name}</th>
					<td class="author">${x.author}</td>
					<td class="pages">${x.pages}</td>
					<td class="status"><button class="flip" onclick="swapClicked('${x.id}')">✅</button></td>
					<td class="del"><button onclick="delBook('${x.id}')">Delete</button></td>
				</tr>
            `;
		} else {
			pBooks.innerHTML += `
                <tr class="book">
					<th class="name">${x.name}</th>
					<td class="author">${x.author}</td>
					<td class="pages">${x.pages}</td>
					<td class="status"><button class="flip" onclick="swapClicked('${x.id}')">❌</button></td>
					<td class="del"><button onclick="delBook('${x.id}')">Delete</button></td>
				</tr>
            `;
		}
	}
}

function delBook(id) {
	let ind = 0;
	for (x in books) {
		if (books[x].id == id) {
			ind = x;
		}
	}
	console.log(ind);
	books.splice(ind, 1);
	renderBooks();
}

addNewBook("The Hobbit", "J.R.R. Tolkien", 310, true);
addNewBook("1984", "George Orwell", 328, false);
addNewBook("To Kill a Mockingbird", "Harper Lee", 281, true);
addNewBook("The Catcher in the Rye", "J.D. Salinger", 277, false);
addNewBook("Pride and Prejudice", "Jane Austen", 279, true);

renderBooks();

function swapClicked(id) {
	for (x in books) {
		if (books[x].id == id) {
			books[x].flipStatus();
		}
	}
}
