window.addEventListener('load', function () {
    var statusElement = document.getElementById('status');
    var mainContainer = document.querySelector("#main-container");
    
    function updateStatus() {
        if (navigator.onLine) {
            statusElement.textContent = '';
        } else {
            statusElement.textContent = 'Internet is not connected';
            mainContainer.innerHTML = ""
        }
    }
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    
    updateStatus(); // Initial check
});
