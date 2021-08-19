const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

  let lastChecked;

  function handleCheck(e){
    let box = false;

    if (e.shiftKey && this.checked){
      checkboxes.forEach(checkbox => {
        if(checkbox === this || checkbox === lastChecked){
          box = !box;
        };

        if(box){
          console.log(box)
          checkbox.checked = true;
        };
      });
    }

    lastChecked = this;
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));