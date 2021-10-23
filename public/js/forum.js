const newCommentHandler = async (event) => {
    event.preventDefault();

    const passedbody = document.querySelector('#comment').value.trim();
    const passedFName = document.querySelector("#first_name").value.trim();
 
    if (passedbody && passedFName) {
      const response = await fetch(`/api/forum/create`, {
        method: 'POST',
        body: JSON.stringify({          
            body: passedbody,     
            fName: passedFName
          }),
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

  