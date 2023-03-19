let box = document.createElement('div');
box.classList.add('boxPost')
document.body.appendChild(box);
let url = new URL (location.href);
let json = url.searchParams.get('data2');
post = JSON.parse(json);
let div1 = document.createElement('div');
div1.classList.add('post');
div1.innerText =`POST DETAILS:
                        User Id: ${post.userId}
                        Id: ${post.id}
                        Tittle: ${post.title}
                        body: ${post.body}`;
box.append(div1);

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
let commentUrl = new URL(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
fetch(commentUrl)
    .then(value => value.json())
    .then(comments => {
            for (let i = 0; i < comments.length; i++) {
                const comment = comments[i];
                //div2.innerText = `postsDetails.html?data2=` +JSON.stringify(comment);
                let div2 = document.createElement('div');
                div2.classList.add('cmnt')
                div2.innerText =`COMMENT (Id: ${comment.id}):
                        Post Id: ${comment.postId}
                        Name: ${comment.name}
                        Email: ${comment.email}
                        Body: ${comment.body}`;
                wrapper.append(div2);
            }
        }
    );
box.append(wrapper);