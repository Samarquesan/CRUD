/*
CRUD
    - Create JavaScript Básico
    - Read
    - Update
    - Delete
 */

    const miniTwitter = {
        usuario: [
            {
                username: 'Samsimic',
            }
        ],
        posts: [
            {
                id: 1,
                owner: 'Samsimic',
                content: 'Meu primeiro tweet'
            }
        ]
    };

    //CREATE
    function createPost(dados){
        miniTwitter.posts.push({
            id: miniTwitter.posts.lenght + 1,
            owner: dados.owner,
            content: dados.content
        })
    }
    createPost({owner: 'Samsimic', content: 'Segundo tweet'});
    createPost({owner: 'Samsimic', content: 'Terceiro tweet'});
    console.log(miniTwitter.posts) [{owner: 'Samsimic', content: 'Meu primeiro tweet'}]

    //READ
    function getPosts(){
        return miniTwitter.posts;
    }
    console.log(getPosts()) [{id: 1, owner: 'Samsimic', content: 'Meu primeiro tweet'}]

    //UPDATE
    function updateContentPost(id, novoConteudo){
        const updatedPost = getPosts().find((post) => {
            return post.id === id;
        })
        console.log(updatedPost) [{ id: 1, owner: 'Samsimic', content: 'Meu primeiro tweet'}]
        updatedPost.content = novoConteudo
    } 

    updateContentPost(1,'Novo conteúdo do tweet')
    console.log(getPosts()) [{id: 1, owner: 'Samsimic', content:'Novo tweet'}]

    //DELETE
    function deletePost(id){
        const newPostList = getPosts().filter((postAtual) => {
            return postAtual.id !== id;
        })
        miniTwitter.posts = newPostList;
        
    }
    deletePost(1);
    deletePost(2);
    deletePost(3);
    console.log(getPosts()); [{id: 3, owner: 'Samsimic', content:'Terceiro Tweet'}]