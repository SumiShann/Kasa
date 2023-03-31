import Card from "./Card"

function Gallery({postList}){
    const postData = postList
    return (
        <section className="gallery">
            {postData.map(post => 
                <Card key={post.id} postId={post.id} postCover={post.cover} postTitle={post.title}/>
            )}
        </section>
    )
}

export default Gallery