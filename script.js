// const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
const url2 = 'https://fakestoreapi.com/products'


async function getPost() {
    const res = await fetch(url2);
    const data = await res.json();
    // console.log(data); 
    return data;
}

async function displayingThe_Posts() {
    const posts = await getPost();
    const cardContainer = document.getElementById('card-container'); 

    posts.forEach(post => {
        console.log(post);
        const card = document.createElement('div');
        card.className = 'col';

        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                <img src=${post.image} class="card-img-top img-thumbnail"style = "width: 200px ; height: 200px" alt="...">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <p class="card-text">${post.price}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago by ${post.email}</small>
                </div>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

displayingThe_Posts();


// async function getPost2(){
//     try{
//         const res = await fetch (url)
//         if(!res.ok){
//             throw new Error("Something Definetelly Went Wrong!!!!")
//         }else{
//             const data = await res.json()
//             console.log(data);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// getPost2()