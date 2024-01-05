const loginForm = document.getElementById('loginForm');

loginForm.addEventListener("submit", handleSubmit);
    
    
    function handleSubmit(event) {
      event.preventDefault();

      const emailInput = loginForm.elements.email.value;
      const passwordInput = loginForm.elements.password.value;

     
      if (!emailInput || !passwordInput) {
        alert ('All form fields must be filled in');
      } else {
        const formData = {
          email: emailInput,
          password: passwordInput
        };

        console.log(formData);

        
        loginForm.reset();
      }
    };
