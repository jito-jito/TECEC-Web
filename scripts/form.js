const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#enlaceForm')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:tececservicios@gmail.com?subject=nombre: ${form.get('nombre')}  correo: ${form.get('email')}&body=Asunto: ${form.get('asunto')} Mensaje: ${form.get('mensaje')}`)
    $buttonMailto.click()
}