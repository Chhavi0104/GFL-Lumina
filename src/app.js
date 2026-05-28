const links = document.querySelectorAll('.nav-links li')

const about = document.querySelector('#about-content')
const policy = document.querySelector('#policy-content')
const query = document.querySelector('#query-content')

for (const link of links) {
    link.addEventListener('click', function() {
        about.style.display = 'none'
        policy.style.display = 'none'
        query.style.display = 'none'

        for (const l of links) {
            l.classList.remove('active')
        }
        link.classList.add('active')

        if (link.id === 'about-tab') {
            about.style.display = 'block'
        }
        else if (link.id === 'policy-tab') {
            policy.style.display = 'block'
        }
        else {
            query.style.display = 'block'
        }
    });
}
