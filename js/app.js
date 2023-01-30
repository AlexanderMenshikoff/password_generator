const mainEl = document.querySelector('.main')

const passwordCount = document.createElement('input')
passwordCount.classList.add('password-count')


const passwordEl = document.createElement('input')
passwordEl.classList.add('password')
passwordEl.setAttribute('placeholder', 'Ваш новый пароль')
passwordEl.addEventListener('keypress', (e) => {
    e.preventDefault()
})
passwordEl.addEventListener('focus', (e) => {
    navigator.clipboard.writeText(passwordEl.value)
})

const copyButton = document.createElement('button')
copyButton.classList.add('copy-button')
copyButton.innerText = 'Скопировать'
copyButton.addEventListener('click', (e) => {
    passwordEl.select()
    navigator.clipboard.writeText(passwordEl.value)
})

const generateBtn = document.createElement('button')
generateBtn.classList.add('generate-button')
generateBtn.innerText = 'Сгенерировать'
generateBtn.addEventListener('click', (e) => {

    if(passwordCount.value > 30){
    alert('Число не должно превышать 30!')
        passwordCount.value = ''
}
    else if (passwordCount.value.length === 0){
    alert('Пароль в 0 цифр не пройдет!')
        passwordCount.value = ''
}

    else if (passwordCount.value === '0'){
        alert('0 не подойдет!')
        passwordCount.value = ''
}

    else if (passwordCount.value.startsWith(0)){
        alert('Вам необходимо убрать 0 из начала!')
        passwordCount.value = ''
}

    else if (passwordCount.value !== 'number'){
        alert('Ввести можно только цифры!')
        passwordCount.value = ''
}

    
let password = generatePassword(passwordCount.value)
passwordEl.value = password
})



const clearBtn = document.createElement('button')
clearBtn.classList.add('clear-button')
clearBtn.innerText = 'Очистить'
clearBtn.addEventListener('click', () => {
    passwordEl.value = ''
    passwordCount.value = ''
}) 

function generatePassword(passwordLength){
    // const numberChars = '0123456789'
    // const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
    // const symbolChars = '!@#$%^&*()_+'
    // const allChars = numberChars + upperChars + lowerChars + symbolChars
    const allChars = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
         'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R',
         'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a',
         'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
         'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
         't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@',
         '#', '$', '%', '^', '&', '*', '(' ,')', '_',
         '+'
        ]

    let randomString = ''
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * allChars.length)
        randomString += allChars[randomNumber]
    }
    return randomString
}


mainEl.appendChild(passwordCount)
mainEl.appendChild(passwordEl)
mainEl.appendChild(copyButton)
mainEl.appendChild(generateBtn)
mainEl.appendChild(clearBtn)
