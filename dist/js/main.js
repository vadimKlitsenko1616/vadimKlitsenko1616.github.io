const avatar = document.getElementById('avatar')
const avatarBlock = document.getElementById('avatar-block')
const wall = document.getElementById('wall')
const yellowBlock = document.getElementById('yellow-block')
const homeTitle = document.getElementById('home-title')
const homeCaption = document.getElementById('home-caption')
const skillsList = document.getElementById('skills-list')
const skillsBtn = document.getElementById('skills-btn')
//scroll watcher targets
const homeSection = document.getElementById('home')
const aboutSection = document.getElementById('about')
const portfolioSection = document.getElementById('portfolio')
const contactSection = document.getElementById('contact')
//navigation buttons
const homeBtn = document.getElementById('nav-btn-home')
const aboutBtn = document.getElementById('nav-btn-about')
const portfolioBtn = document.getElementById('nav-btn-portfolio')
const contactBtn = document.getElementById('nav-btn-contact')
//experience numbers
const experienceYears = document.getElementById('experience-years')
const experienceProjects = document.getElementById('experience-projects')
const experienceTechnologies = document.getElementById('experience-technologies')
const experienceIntegrations = document.getElementById('experience-integrations')

let needToSetActiveNavBtn = true
let hasNumbersAnimationDone = false
let isSkillsListOpen = false

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!needToSetActiveNavBtn) return
        if (entry.isIntersecting) {
            setNavButtonsInactive()
            switch(entry.target.id) {
                case 'home': {
                    homeBtn.classList.add('navigation__button_active')
                    break
                }
                case 'about': {
                    aboutBtn.classList.add('navigation__button_active')
                    break
                }
                case 'portfolio': {
                    portfolioBtn.classList.add('navigation__button_active')
                    break
                }
                case 'contact': {
                    contactBtn.classList.add('navigation__button_active')
                    break
                }
            }
        } else {
            const distanceFromTop = window.pageYOffset || document.documentElement.scrollTop
            if (entry.target.id === 'about' && distanceFromTop < window.innerHeight) {
                setNavButtonsInactive()
                homeBtn.classList.add('navigation__button_active')
            }
        }
    })
})

const numbersObserver = new IntersectionObserver(entries => {
    if (!hasNumbersAnimationDone) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let count = 0
                let maxValue = entry.target.id === 'experience-years' ? 6 :
                    entry.target.id === 'experience-projects' ? 10 :
                        entry.target.id === 'experience-technologies' ? 15 : 30
                const interval = setInterval(() => {
                    entry.target.innerText = count++
                    if(count === maxValue + 1) clearInterval(interval)
                }, 50)
                hasNumbersAnimationDone = entry.target.id === 'experience-integrations'
            }
        })
    }
})

observer.observe(homeSection)
observer.observe(aboutSection)
observer.observe(portfolioSection)
observer.observe(contactSection)

numbersObserver.observe(experienceYears)
numbersObserver.observe(experienceProjects)
numbersObserver.observe(experienceTechnologies)
numbersObserver.observe(experienceIntegrations)

function loaded() {
    wall.classList.add('wall_hide')
    setTimeout(() => {
        yellowBlock.classList.add('yellow-block_active')
        avatarBlock.classList.add('user__image_visible')
        homeTitle.classList.add('user__title_visible')
        homeCaption.classList.add('user__caption_visible')
    }, 300)
}

if (avatar.complete) {
    loaded()
} else {
    avatar.addEventListener('load', loaded)
}

function scrollToSection(sectionId) {
    needToSetActiveNavBtn = false
    const section = document.getElementById(sectionId)
    section.scrollIntoView({behavior: 'smooth'})
    setNavButtonsInactive()
    document.getElementById(`nav-btn-${sectionId}`).classList.add('navigation__button_active')
    setTimeout(() => {
        needToSetActiveNavBtn = true
    }, 600)
}

function setNavButtonsInactive () {
    homeBtn.classList.remove('navigation__button_active')
    aboutBtn.classList.remove('navigation__button_active')
    portfolioBtn.classList.remove('navigation__button_active')
    contactBtn.classList.remove('navigation__button_active')
}

function toggleSkillsList() {
    isSkillsListOpen = !isSkillsListOpen
    skillsBtn.innerText = (isSkillsListOpen) ? 'hide' : 'view all'
    skillsList.classList.toggle('skills__list_active')
}
