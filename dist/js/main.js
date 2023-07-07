const avatar = document.getElementById('avatar')
const avatarBlock = document.getElementById('avatar-block')
const wall = document.getElementById('wall')
const yellowBlock = document.getElementById('yellow-block')
const homeTitle = document.getElementById('home-title')
const homeCaption = document.getElementById('home-caption')
const skillsButton = document.getElementById('skills-button')
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
//portfolio-cards
const firstCard = document.getElementById('portfolio-first-card')
const secondCard = document.getElementById('portfolio-second-card')
const thirdCard = document.getElementById('portfolio-third-card')
const fourthCard = document.getElementById('portfolio-fourth-card')
//window height and width
const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


let needToSetActiveNavBtn = true
let hasNumbersAnimationDone = false
let isCardAnimationReady = false
let isSkillsListOpen = false

skillsButton.addEventListener('click', () => {
    isSkillsListOpen = !isSkillsListOpen
    const skillsListItems = document.getElementsByClassName('skills__item')

    if (isSkillsListOpen) {
        for (let i = 8; i < skillsListItems.length; i++) {
            skillsListItems[i].style.display = "flex"
            setTimeout(() => skillsListItems[i].classList.add('skills__item_visible'), 100)
        }
    } else {
        skillsButton.classList.add('skills__button_hidden')
        for (let i = 8; i < skillsListItems.length; i++) {
            skillsListItems[i].classList.remove('skills__item_visible')
            setTimeout(() => {
                skillsListItems[i].style.display = "none"
            }, 400)
        }
        setTimeout(() => {
            skillsButton.classList.remove('skills__button_hidden')
        }, 400)
        const section = document.getElementById('skills-container')
        section.scrollIntoView({behavior: 'smooth'})
    }
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

numbersObserver.observe(experienceYears)
numbersObserver.observe(experienceProjects)
numbersObserver.observe(experienceTechnologies)
numbersObserver.observe(experienceIntegrations)

window.addEventListener('load', () => {
    setActiveNavBtn()
    isCardAnimationReady = true
})

window.addEventListener('scroll', () => {
    setActiveNavBtn()
    showCard()
})

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
    }, 700)
}

function setNavButtonsInactive () {
    homeBtn.classList.remove('navigation__button_active')
    aboutBtn.classList.remove('navigation__button_active')
    portfolioBtn.classList.remove('navigation__button_active')
    contactBtn.classList.remove('navigation__button_active')
}

function setActiveNavBtn() {
    if (!needToSetActiveNavBtn) return
    const homeDistanceTop = homeSection.getBoundingClientRect().top
    const homeDistanceBottom = homeSection.getBoundingClientRect().bottom
    const aboutDistanceTop = aboutSection.getBoundingClientRect().top
    const aboutDistanceBottom = aboutSection.getBoundingClientRect().bottom
    const portfolioDistanceTop = portfolioSection.getBoundingClientRect().top
    const portfolioDistanceBottom = portfolioSection.getBoundingClientRect().bottom
    const contactDistanceTop = contactSection.getBoundingClientRect().top
    const contactDistanceBottom = contactSection.getBoundingClientRect().bottom

    if (
        (homeDistanceTop >=0 && homeDistanceTop < screenHeight*.4) ||
        (homeDistanceBottom > 0 && homeDistanceBottom > screenHeight*.8)
    ) {
        setNavButtonsInactive()
        homeBtn.classList.add('navigation__button_active')
    } else if (
        (aboutDistanceTop >=0 && aboutDistanceTop < screenHeight*.4) ||
        (aboutDistanceBottom > 0 && aboutDistanceBottom > screenHeight*.8)
    ) {
        setNavButtonsInactive()
        aboutBtn.classList.add('navigation__button_active')
    } else if (
        (portfolioDistanceTop >=0 && portfolioDistanceTop < screenHeight*.4) ||
        (portfolioDistanceBottom > 0 && portfolioDistanceBottom > screenHeight*.8)
    ) {
        setNavButtonsInactive()
        portfolioBtn.classList.add('navigation__button_active')
    } else if (
        (contactDistanceTop >=0 && contactDistanceTop < screenHeight*.4) ||
        (contactDistanceBottom > 0 && contactDistanceBottom > screenHeight*.8)
    ) {
        setNavButtonsInactive()
        contactBtn.classList.add('navigation__button_active')
    }
}

function showCard() {
    const first = firstCard.getBoundingClientRect().top
    const second = secondCard.getBoundingClientRect().top
    const third = thirdCard.getBoundingClientRect().top
    const fourth = fourthCard.getBoundingClientRect().top

    if (first >=0 && first < screenHeight*.9) {
        firstCard.classList.add('card_visible')
    }
    if (second >=0 && second < screenHeight*.9) {
        secondCard.classList.add('card_visible')
    }
    if (third >=0 && third < screenHeight*.9) {
        thirdCard.classList.add('card_visible')
    }
    if (fourth >=0 && fourth < screenHeight*.9) {
        fourthCard.classList.add('card_visible')
    }
}
