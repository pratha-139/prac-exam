document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".post");

    posts.forEach((post) => {
        const likeButton = post.querySelector(".like-button");
        const likeCount = post.querySelector(".like-count");
        likeButton.addEventListener("click", () => {
            const isLiked = likeButton.dataset.liked === "true";
            likeButton.dataset.liked = !isLiked;
            likeCount.textContent = parseInt(likeCount.textContent) + (isLiked ? -1 : 1);
        });

       
    });
});