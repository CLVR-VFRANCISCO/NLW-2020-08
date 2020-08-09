// Producurar o botão
document.querySelector("#add-time")
// Clicar no botão + Novo Horário
.addEventListener('click', cloneField)

// Adicionar outros horários com campos limpos
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFielContainer = document.querySelector('.schedule-item').cloneNode(true)
    // pegar os campos. Que campos?
    const fields = newFielContainer.querySelectorAll('input')
    
   fields.forEach(function(field) {
       field.value = ""
   })
    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFielContainer)

}