document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebar_go');
    if (document.querySelector('.sidebar').classList.contains('sidebar_go')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display='none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline'
        }, 300);
        
    }
})