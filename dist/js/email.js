const PUBLIC_KEY = 'CELVBguQhls2A10GP'
const SERVICE_ID = 'service_b0w7nsj'
const TEMPLATE_ID = 'template_nobiuas'
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message')
const sendMessageButton = document.getElementById('send-message-btn')
const modal = document.getElementById('modal')

const showModal = text => {
    modal.innerText = text
    modal.classList.add('modal_visible')
    setTimeout(() => {
        modal.classList.remove('modal_visible')
    }, 3000)
}

const checkRequiredFields = () => {
    const allFilled = nameInput.value && emailInput.value && subjectInput.value && messageInput.value
    if (!allFilled) showModal('Please fill in all fields.')
    return allFilled
}

const resetAllFields = () => {
    nameInput.value = emailInput.value = subjectInput.value = messageInput.value = ''
}

const initFunc = () => emailjs.init(PUBLIC_KEY)

const formHandler = () => {
    if (!checkRequiredFields()) return

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: nameInput.value ?? 'unknown name',
        email: emailInput.value ?? 'unknown email',
        subject: subjectInput.value ?? 'empty subject',
        message: messageInput.value ?? 'empty message'
    })
        .then(() => {
            showModal('Email has been sent.')
            resetAllFields()
        })
}

initFunc()
sendMessageButton.addEventListener('click', formHandler)
