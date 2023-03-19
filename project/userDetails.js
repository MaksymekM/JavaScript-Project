//********User Details************
let detailsUrl = new URL (location.href);
let json = detailsUrl.searchParams.get('data');
user = JSON.parse(json);
let divUser = document.createElement('div');
divUser.classList.add('detailsDiv');
divUser.innerText =`User ID: ${user.id}
                   Name: ${user.name}
                   Email: ${user.email}
                   Address: ${((JSON.stringify(user.address)).replace(/["{}]/g, '')).replace(/[,]/g,', ' )}
                   Phone: ${user.phone}
                   Website: ${user.website}
                   Company: ${((JSON.stringify(user.company)).replace(/["{}]/g, '').replace(/[,]/g,', ' )).replace(/[:]/g,': ' )}`;
document.body.appendChild(divUser );
let postsUrl = new URL(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
fetch(postsUrl)
    .then(value => value.json())
    .then(posts => {
        let postWraper = document.createElement('div');
        postWraper.classList.add(`postWrapper`)
        let b = document.createElement('button');
        b.classList.add(`btn`);
        b.innerText = `Posts of current user`;
        b.addEventListener('click', () => {
            postWraper.style.display = postWraper.style.display === 'flex' ? 'none' : 'flex';
        });
        divUser .append(b);

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            let postDiv = document.createElement('div');
            postDiv.classList.add('postDiv');
            let a = document.createElement('a');
            a.innerText = `${post.title})`;
            a.href = `postsDetails.html?data2=` +JSON.stringify(post);
            postDiv.append(a);
            postWraper.append(postDiv);
        }
        divUser.append(postWraper);
        }
    );

