books = [];

let cBooks = document.querySelector(".c-books");
let pBooks = document.querySelector(".p-books");

// ❌ ✅
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
					<td class="status"><button class="flip" data=${x.flipStatus}>✅</button> Completed</td>
				</tr>
            `;
		} else {
			pBooks.innerHTML += `
                <tr class="book">
					<th class="name">${x.name}</th>
					<td class="author">${x.author}</td>
					<td class="pages">${x.pages}</td>
					<td class="status"><button class="flip" data=${x.flipStatus}>❌</button> Pending</td>
				</tr>
            `;
		}
	}
}

addNewBook("qwe1", "qewr", 20, true);
addNewBook("qwe2", "qewr", 20, false);
addNewBook("qwe3", "qewr", 20, true);
addNewBook("qwe4", "qewr", 20, false);

renderBooks();
let flipBtns = document.querySelectorAll(".flip");
console.log(flipBtns);
for (btn of flipBtns) {
	console.log(btn);
	id = btn.getAttribute("data");
	console.log(id);
	btn.addEventListener("click", () => {
		console.log(id);
		id();
	});
}
