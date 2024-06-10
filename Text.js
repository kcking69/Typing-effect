const text = document.getElementById('text')
const careers = ['a Youtuber','a Content Creator','a Web Developer','Nkemdilim Collins']
let characterIndex = 0
let careerIndex = 0
let careerChoice = `I am ${careers[careerIndex]}`

function type() {
    text.innerHTML += careerChoice.charAt(characterIndex)
    characterIndex++
    setTimeout(type,100)
    
    if (characterIndex === careerChoice.length + 1) {
        text.innerHTML = ""
        careerIndex++
        if (careerIndex > careers.length - 1) {
            careerIndex = 0
        }
        careerChoice = `I am ${careers[careerIndex]}`
        console.log(careerIndex)
        characterIndex = 0
        text.innerHTML += careerChoice.charAt(characterIndex)
        characterIndex++
    }
}
type()



function clear() {
}
    




















