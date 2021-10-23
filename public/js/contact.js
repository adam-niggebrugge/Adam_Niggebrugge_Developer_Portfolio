const newCommentHandler = async (event) => {
    event.preventDefault();

    const passedbody = document.querySelector('#comment').value.trim();
    const passedFName = document.querySelector("#first_name").value.trim();
    const passedEmail = document.querySelector("#email").value.trim();


    if (passedbody && passedFName) {
      const response = await fetch(`/api/comment/create`, {
        method: 'POST',
        body: JSON.stringify({          
            body:passedbody,     
            fName: passedFName, 
            email: passedEmail}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/forum`);
      } else {
        alert('Server failed to record comment.');
      }
    } else {
        alert('No comment or name given, nothing to submit!');
    }
  };
  
   
document
    .querySelector('#comment-form')
    .addEventListener('submit', newCommentHandler);

  