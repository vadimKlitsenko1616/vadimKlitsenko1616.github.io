const avatar=document.getElementById("avatar"),avatarBlock=document.getElementById("avatar-block"),wall=document.getElementById("wall"),yellowBlock=document.getElementById("yellow-block"),homeTitle=document.getElementById("home-title"),homeCaption=document.getElementById("home-caption"),skillsButton=document.getElementById("skills-button"),homeSection=document.getElementById("home"),aboutSection=document.getElementById("about"),portfolioSection=document.getElementById("portfolio"),contactSection=document.getElementById("contact"),homeBtn=document.getElementById("nav-btn-home"),aboutBtn=document.getElementById("nav-btn-about"),portfolioBtn=document.getElementById("nav-btn-portfolio"),contactBtn=document.getElementById("nav-btn-contact"),experienceYears=document.getElementById("experience-years"),experienceProjects=document.getElementById("experience-projects"),experienceTechnologies=document.getElementById("experience-technologies"),experienceIntegrations=document.getElementById("experience-integrations"),firstCard=document.getElementById("portfolio-first-card"),secondCard=document.getElementById("portfolio-second-card"),thirdCard=document.getElementById("portfolio-third-card"),fourthCard=document.getElementById("portfolio-fourth-card"),screenHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;let needToSetActiveNavBtn=!0,hasNumbersAnimationDone=!1,isCardAnimationReady=!1,isSkillsListOpen=!1;skillsButton.addEventListener("click",()=>{isSkillsListOpen=!isSkillsListOpen;let e=document.getElementsByClassName("skills__item");if(isSkillsListOpen)for(let t=8;t<e.length;t++)e[t].style.display="flex",setTimeout(()=>e[t].classList.add("skills__item_visible"),100);else{skillsButton.classList.add("skills__button_hidden");for(let n=8;n<e.length;n++)e[n].classList.remove("skills__item_visible"),setTimeout(()=>{e[n].style.display="none"},400);setTimeout(()=>{skillsButton.classList.remove("skills__button_hidden")},400),document.getElementById("skills-title")}});const numbersObserver=new IntersectionObserver(e=>{hasNumbersAnimationDone||e.forEach(e=>{if(e.isIntersecting){let t=0,n="experience-years"===e.target.id?6:"experience-projects"===e.target.id?10:"experience-technologies"===e.target.id?15:30,i=setInterval(()=>{e.target.innerText=t++,t===n+1&&clearInterval(i)},50);hasNumbersAnimationDone="experience-integrations"===e.target.id}})});function loaded(){wall.classList.add("wall_hide"),setTimeout(()=>{yellowBlock.classList.add("yellow-block_active"),avatarBlock.classList.add("user__image_visible"),homeTitle.classList.add("user__title_visible"),homeCaption.classList.add("user__caption_visible")},300)}function scrollToSection(e){needToSetActiveNavBtn=!1;let t=document.getElementById(e);t.scrollIntoView({behavior:"smooth"}),setNavButtonsInactive(),document.getElementById(`nav-btn-${e}`).classList.add("navigation__button_active"),setTimeout(()=>{needToSetActiveNavBtn=!0},700)}function setNavButtonsInactive(){homeBtn.classList.remove("navigation__button_active"),aboutBtn.classList.remove("navigation__button_active"),portfolioBtn.classList.remove("navigation__button_active"),contactBtn.classList.remove("navigation__button_active")}function setActiveNavBtn(){if(!needToSetActiveNavBtn)return;let e=homeSection.getBoundingClientRect().top,t=homeSection.getBoundingClientRect().bottom,n=aboutSection.getBoundingClientRect().top,i=aboutSection.getBoundingClientRect().bottom,o=portfolioSection.getBoundingClientRect().top,s=portfolioSection.getBoundingClientRect().bottom,a=contactSection.getBoundingClientRect().top,l=contactSection.getBoundingClientRect().bottom;e>=0&&e<.4*screenHeight||t>0&&t>.8*screenHeight?(setNavButtonsInactive(),homeBtn.classList.add("navigation__button_active")):n>=0&&n<.4*screenHeight||i>0&&i>.8*screenHeight?(setNavButtonsInactive(),aboutBtn.classList.add("navigation__button_active")):o>=0&&o<.4*screenHeight||s>0&&s>.8*screenHeight?(setNavButtonsInactive(),portfolioBtn.classList.add("navigation__button_active")):(a>=0&&a<.4*screenHeight||l>0&&l>.8*screenHeight)&&(setNavButtonsInactive(),contactBtn.classList.add("navigation__button_active"))}function showCard(){let e=firstCard.getBoundingClientRect().top,t=secondCard.getBoundingClientRect().top,n=thirdCard.getBoundingClientRect().top,i=fourthCard.getBoundingClientRect().top;e>=0&&e<.9*screenHeight&&firstCard.classList.add("card_visible"),t>=0&&t<.9*screenHeight&&secondCard.classList.add("card_visible"),n>=0&&n<.9*screenHeight&&thirdCard.classList.add("card_visible"),i>=0&&i<.9*screenHeight&&fourthCard.classList.add("card_visible")}numbersObserver.observe(experienceYears),numbersObserver.observe(experienceProjects),numbersObserver.observe(experienceTechnologies),numbersObserver.observe(experienceIntegrations),window.addEventListener("load",()=>{setActiveNavBtn(),isCardAnimationReady=!0}),window.addEventListener("scroll",()=>{setActiveNavBtn(),showCard()}),avatar.complete?loaded():avatar.addEventListener("load",loaded);