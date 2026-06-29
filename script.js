document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name && email) {
        alert("Registration submitted successfully for " + name + "! We will contact you at " + email);
        this.reset();
    } else {
        alert("Please fill in all required fields.");
    }
});
