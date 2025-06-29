(function(){
    emailjs.init("YOUR_USER_ID"); // Thay YOUR_USER_ID từ EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Gửi email thành công!');
        }, function(error) {
            alert('Lỗi: ' + JSON.stringify(error));
        });
});