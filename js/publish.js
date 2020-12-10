const publishButton = document.getElementById('submit-post');
const postInput = document.getElementById('post-body');

// if the person presses enter, publish the post
postInput.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});

// if the person clicks the button, publish the post
publishButton.addEventListener('click', publishPost);

function publishPost() {
	const uid = fb.getUID();
	fb.publishPost(uid, postInput.value);
	postInput.value = ""; // reset textarea
}