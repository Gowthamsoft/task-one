let response = fetch('https://www.anapioficeandfire.com/api/books');
async function fetchText() {
    let response = await fetch('https://www.anapioficeandfire.com/api/books');
    let data = await response.text();
    console.log(data);
}
fetch('https://www.anapioficeandfire.com/api/books')
    .then(response => response.text())
    .then(data => console.log(data))
    async function fetchText() {
        let response = await fetch('https://www.anapioficeandfire.com/api/books');
    
        console.log(response.status); // 200
        console.log(response.statusText); // OK
    
        if (response.status === 200) {
            let data = await response.text();
            // handle data
        }
    }
    
    fetchText();
   
async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            
                            <h2>Publisher name: ${user.authors}</h2>
                            <h2>Book name:${user.name}</h2>
                            <h2>isbn:${user.isbn}</h2>
                            <h2>number of pages:${user.numberOfPages}</h2><hr><br><br>
                            
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();
async function getUsers() {
    let url = 'https://www.anapioficeandfire.com/api/books';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
