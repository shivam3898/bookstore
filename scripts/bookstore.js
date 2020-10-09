/*
*/
function showModal() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementsByClassName("card")[0];
    var span = document.getElementsByClassName("close")[0];
    
    let index = this.getAttribute('data-userIndex');
    let bookItem = bookDetails[index];
    document.getElementsByClassName('modal-info')[0].innerText = bookItem.description;

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

var bookDetails = [];
var cart = [];

function loadData() {
    if (localStorage.getItem("bookDetailsLocal") == null) {
        bookDetails = [
            {
                bookId: "1",
                name: "The Alchemist",
                author: 'Paulo Coelho',
                price: "150",
                description: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago is an eternal testament to the transforming power of our dreams and the importance of listening to our hearts.",
                image: "alchemist"
            },
            {
                bookId: "2",
                name: "1984",
                author: 'George Orwell',
                price: "180",
                description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.",
                image: "1984"

            },
            {
                bookId: "3",
                name: "The Great Gatsby",
                author: 'F. Scott Fitzgerald',
                price: "200",
                description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.The Great Gatsby is one of the great classics of twentieth-century literature.",
                image: "gatsby"
            },
            {
                bookId: "4",
                name: "The Old Man and the Sea",
                author: 'Ernest Hemingway',
                price: "200",
                description: "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic.",
                image: "oldman"
            },
            {
                bookId: "5",
                name: "The Hobbit There and Back Again",
                author: 'J.R.R. Tolkien',
                price: "300",
                description: "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001). Unforgettable!",
                image: "hobbit"
            },
            {
                bookId: "6",
                name: "Murder on the Orient Express",
                author: 'Agatha Christie',
                price: "250",
                description: "Le train est aussi dangereux que le paquebot » affirme Hercule Poirot…Le lendemain, dans une voiture de l’Orient-Express bloqué par les neiges yougoslaves, on découvre le cadavre d’un américain lardé de douze coups de couteau. L’assassin n’a pu venir de l’extérieur : voici donc un huis clos, le plus fameux, peut-être, de toute la littérature policière. Pour mener son enquête, le petit détective belge a le choix entre une princesse russe, une Américaine fantasque, le secrétaire de la victime, un couple de Hongrois distingués, l’inévitable colonel de retour des Indes, les domestiques de tout ce beau monde et le contrôleur du train.",
                image: "orient"
            },
            {
                bookId: "7",
                name: "The Little Prince",
                author: 'Antoine de Saint-Exupéry',
                price: "220",
                description: "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.",
                image: "price"
            },
            {
                bookId: "8",
                name: "The Metamorphosis",
                author: 'Franz Kafka',
                price: "350",
                description: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes. With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosishas taken its place as one of the most widely read and influential works of twentieth-century fiction. As W.H. Auden wrote, Kafka is important to us because his predicament is the predicament of modern man.",
                image: "meta"
            },
            {
                bookId: "9",
                name: "A Study in Scarlet",
                author: 'Arthur Conan Doyle',
                price: "350",
                description: "'There's a scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it.'From the moment Dr John Watson takes lodgings in Baker Street with the consulting detective Sherlock Holmes, he becomes intimately acquainted with the bloody violence and frightening ingenuity of the criminal mind.In A Study in Scarlet , Holmes and Watson's first mystery, the pair are summoned to a south London house where they find a dead man whose contorted face is a twisted mask of horror. The body is unmarked by violence but on the wall a mysterious word has been written in blood.The police are baffled by the crime and its circumstances. But when Sherlock Holmes applies his brilliantly logical mind to the problem he uncovers a tragic tale of love and deadly revenge .",
                image: "sherlock"
            },
            {
                bookId: "10",
                name: "Do Androids Dream of Electric Sheep?",
                author: 'Philip K. Dick',
                price: "450",
                description: "It was January 2021, and Rick Deckard had a license to kill.Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then...retire them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!",
                image: "blade"
            },
            {
                bookId: "11",
                name: "Chess Story",
                author: 'Stefan Zweig',
                price: "300",
                description: "Chess Story, also known as The Royal Game, is the Austrian master Stefan Zweig's final achievement, completed in Brazilian exile and sent off to his American publisher only a matter of days before his suicide in 1942. It is the only story in which Zweig looks at Nazism, and he does so with characteristic emphasis on the psychological.\nTravelers by ship from New York to Buenos Aires find that on board with them is the world champion of chess, an arrogant and unfriendly man. They come together to try their skills against him and are soundly defeated. Then a mysterious passenger steps forward to advise them and their fortunes change. How he came to possess his extraordinary grasp of the game of chess and at what cost lie at the heart of Zweig's story.\nThis new translation of Chess Story brings out the work's unusual mixture of high suspense and poignant reflection.",
                image: "chess"
            },
            {
                bookId: "12",
                name: "The Time Machine",
                author: 'H.G. Wells',
                price: "450",
                description: "“I’ve had a most amazing time....”\nSo begins the Time Traveller’s astonishing firsthand account of his journey 800,000 years beyond his own era—and the story that launched H.G. Wells’s successful career and earned him his reputation as the father of science fiction. With a speculative leap that still fires the imagination, Wells sends his brave explorer to face a future burdened with our greatest hopes...and our darkest fears. A pull of the Time Machine’s lever propels him to the age of a slowly dying Earth.  There he discovers two bizarre races—the ethereal Eloi and the subterranean Morlocks—who not only symbolize the duality of human nature, but offer a terrifying portrait of the men of tomorrow as well.  Published in 1895, this masterpiece of invention captivated readers on the threshold of a new century. Thanks to Wells’s expert storytelling and provocative insight, The Time Machinewill continue to enthrall readers for generations to come.",
                image: "time"
            }];
        localStorage.setItem("bookDetailsLocal", JSON.stringify(bookDetails));
    }
    else {
        let books = JSON.parse(localStorage.getItem("bookDetailsLocal"));
        books.forEach(function (item) {
            bookDetails.push(item);
        })
    }
}

function createBookIndex() {
    loadData();

    document.getElementsByClassName('cart-count')[0].innerHTML = cartCount();

    let row = document.getElementsByClassName("row")[0];

    bookDetails.forEach(function(item, index) {
        let col = document.createElement("div");
        col.setAttribute('class', 'col');
        row.appendChild(col);
        let card = document.createElement("div");
        card.setAttribute('class', 'card');
        card.setAttribute('data-userIndex', index)
        card.onclick = showModal;
        col.appendChild(card);
        let bookImg = document.createElement("div");
        bookImg.setAttribute('class', 'book-img');
        card.appendChild(bookImg);
        let img = document.createElement('img');
        img.setAttribute('id', 'imgFile');
        img.setAttribute('src', 'images/' + item.image + ".jpg");
        bookImg.appendChild(img);
        let bookInfo = document.createElement("div");
        bookInfo.setAttribute('class', 'book-info');
        card.appendChild(bookInfo);
        let bookName = document.createElement('p');
        bookName.setAttribute('class', 'book-name');
        bookName.innerText = item.name;
        bookInfo.appendChild(bookName);
        let author = document.createElement('p');
        author.setAttribute('class', 'author');
        author.innerText = "by " + item.author;
        bookInfo.appendChild(author);
        let price = document.createElement('div');
        price.setAttribute('class', 'price');
        price.innerText = "Rs. " + item.price;
        bookInfo.appendChild(price);
        let addToCart = document.createElement('div');
        addToCart.setAttribute('class', 'add-to-cart');
        bookInfo.appendChild(addToCart);
        let addCart = document.createElement('a');
        addCart.setAttribute('data-userIndex', index);
        addCart.setAttribute('href', '#');
        addCart.innerText = "Add to Cart";
        addCart.onclick = addBooksToCart;
        addToCart.appendChild(addCart);
    })
}

function addBooksToCart() {
    if (localStorage.getItem("cart") !== null) {
        let localCart = JSON.parse(localStorage.getItem("cart"));
        localCart.forEach(function(item) {
            cart.push(item);
        })
    }
    let cartIndex = this.getAttribute('data-userIndex');
    let bookItem = bookDetails[cartIndex];
    let cartItem = {
        name : bookItem.name,
        author: bookItem.author, 
        price: bookItem.price,
        image: bookItem.image
    };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
    alert(bookItem.name + ' added to Cart');
    cart = [];
}

function cartCount() {
    let count = 0;
    if(localStorage.getItem('cart')!=null) {
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems.forEach(function(){
            count++;
        })
    }
    return count;
}

function cartPage() {
    let totalPrice = 0;

    document.getElementsByClassName('cart-count')[0].innerHTML = cartCount();
    let body = document.getElementsByClassName("cart-container")[0];
    let heading = document.createElement("h1");
    heading.setAttribute('class', 'page-head');

    if (localStorage.getItem("cart") == null || localStorage.getItem("cart").length == 2) {
        heading.innerText = "Cart is Empty";
        body.appendChild(heading);
    }
    else {
        let localCart = JSON.parse(localStorage.getItem("cart"));
        localCart.forEach(function(item) {
            totalPrice += parseFloat(item.price);
            cart.push(item);
        })

        heading.innerText = "Shopping Cart";
        body.appendChild(heading);

        cart.forEach(function(item, index) {
            let cartElement = document.createElement('div');
            cartElement.setAttribute('class', 'cart-element');
            body.appendChild(cartElement);
            let cartSection = document.createElement('div');
            cartSection.setAttribute('class', 'cart-section');
            cartElement.appendChild(cartSection);
            let img = document.createElement("img");
            img.setAttribute('src', 'images/' + item.image + ".jpg");
            cartSection.appendChild(img);
            let cartSection2 = document.createElement('div');
            cartSection2.setAttribute('class', 'cart-section');
            cartElement.appendChild(cartSection2);
            let nameP = document.createElement('p');
            nameP.innerText = item.name;
            cartSection2.appendChild(nameP);
            let authorP = document.createElement('p');
            authorP.innerText = 'by ' + item.author;
            cartSection2.appendChild(authorP);
            let priceP = document.createElement('p');
            priceP.innerText = "Rs. " + item.price;
            cartSection2.appendChild(priceP);
            let cartSection3 = document.createElement('div');
            cartSection3.setAttribute('class', 'cart-section');
            cartElement.appendChild(cartSection3);
            let deleteP = document.createElement('p');
            cartSection3.appendChild(deleteP);
            let deleteA = document.createElement('a');
            deleteA.setAttribute('href', '#');
            deleteA.setAttribute('data-userIndex', index);
            deleteA.innerText = 'Delete from Cart';
            deleteA.onclick = deleteFromCart;
            deleteP.appendChild(deleteA);
        })
        let cartElement = document.createElement('div');
        cartElement.setAttribute('class', 'cart-element');
        body.appendChild(cartElement);
        let cartSection = document.createElement('div');
        cartSection.setAttribute('class', 'cart-section');
        cartElement.appendChild(cartSection);
        let cartSection2 = document.createElement('div');
        cartSection2.setAttribute('class', 'cart-section');
        cartElement.appendChild(cartSection2);
        let total = document.createElement('p');
        total.innerText = 'Total Rs: ' + totalPrice;
        cartSection2.appendChild(total);
        let cartSection3 = document.createElement('div');
        cartSection3.setAttribute('class', 'cart-section');
        cartElement.appendChild(cartSection3);
        let confirmP = document.createElement('p');
        cartSection3.appendChild(confirmP);
        let confirmA = document.createElement('a');
        confirmA.setAttribute('class', 'cart-button');
        confirmA.setAttribute('href', 'purchase.html');
        confirmA.innerText = 'Confirm Purchase';
        confirmP.appendChild(confirmA);

    }
}

function deleteFromCart() {
    if (localStorage.getItem("cart") == null || localStorage.getItem("cart").length == 2) {
        let heading = document.getElementsByClassName('cart-head')[0];
        heading.innerHTML = "Cart is Empty";
    }
    else {
        let deleteIndex = this.getAttribute("data-userIndex");
        cart.splice(deleteIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
        console.log(cart);
    }
}

function cartStatus() {
    document.getElementsByClassName('cart-count')[0].innerHTML = cartCount();
}

function addSpace(element) {
    let inputVal = document.getElementById(element.id);
    inputVal = inputVal.value.split(' ').join('');
    let finalVal = inputVal.match(/.{1,4}/g).join(' ');
    document.getElementById(element.id).value = finalVal;
}

function purchase() {
    let cardNumber = document.getElementById('card-number').value;
    cardNumber = cardNumber.replace(/ /g,'');
    let isValidCard = validCreditCard(cardNumber);
    let flag = false;
    if(isValidCard) {
        localStorage.removeItem("cart");
        cart = [];
        flag = true;
    }
    else {
        alert("Invalid Card Details");
    }
    if (flag) {
        window.location.href = "confirmation.html";
    }
    return false;
}

//Luhn Algo
function validCreditCard(value) {
	if (/[^0-9-\s]+/.test(value)) return false;
	let nCheck = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}