const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#enlaceForm')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:tececservicios@gmail.com?subject=${form.get('nombre')} Asunto:${form.get('asunto')}&body=Correo: ${form.get('email')} Mensaje: ${form.get('mensaje')}`)
    $buttonMailto.click()
}