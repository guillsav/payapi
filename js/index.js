const bLeadsForm = document.getElementById("b-leads")
const leadsForm = document.getElementById("leads")

// Contact page
const form = document.getElementById("contact-form")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const companyInput = document.getElementById("company")
const titleInput = document.getElementById("title")

form.addEventListener("submit", e => {
  e.preventDefault()
  isEmpty()
})

// Validation for empty inputs
function isEmpty() {
  const name = nameInput.value.trim()
  const email = emailInput.value.trim()
  const company = companyInput.value.trim()
  const title = titleInput.value.trim()

  const errorMessage = "This field can't be empty"

  if (name === "") {
    showError(nameInput, errorMessage)
  }

  if (email === "") {
    showError(emailInput, errorMessage)
  }

  if (company === "") {
    showError(companyInput, errorMessage)
  }

  if (title === "") {
    showError(titleInput, errorMessage)
  }
}

function showError(field, message) {
  const formControl = field.parentElement
  const small = formControl.querySelector("small")

  small.innerText = message

  field.className = "form-error"
}

// bLeadsForm.addEventListener("submit", e => e.preventDefault())
// leadsForm.addEventListener("submit", e => e.preventDefault())
