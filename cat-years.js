const value = {catYearInput: 0, catYearOutput: 0, lifeStage: ' '}
const catYearsCalculator = function(value){
    let output = 0
    const num = parseInt(value.catYearInput)
        if(num == 0){
            output = 'less than 15'
        }else if(num == 1){
            output = 15
        }else if(num == 2){
            output = 24
        }else{
            const mult = num - 2
            output = (mult * 4) + 24
        }
        value.catYearOutput = output
    
}
const displayOutput = function(value){
     document.getElementById('results').innerHTML = ''
    if((value.catYearInput !== 0) || !(value.catYearInput) || !isNaN(value.catYearInput)){
       const out =  document.createElement('h2')
       out.textContent = `Your cat is ${value.catYearInput} years old in cat years, so that means that they're ${value.catYearOutput} years old in human years`
       document.getElementById('results').appendChild(out)
    }else{
        const none = document.createElement('h2')
        none.textContent = 'No values added yet'
        document.getElementById('results').appendChild(none)
    }

}
document.querySelector('#form').addEventListener('input', function(e){
    value.catYearInput = e.target.value  
    catYearsCalculator(value)
    displayOutput(value)
})

displayOutput(value)
catYearsCalculator(value)
