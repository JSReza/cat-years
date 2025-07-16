
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()
    let valueEl = document.getElementsByClassName('input')
    let resultsEl =  document.getElementById('results')
   let value = parseInt(valueEl.value)
    let output = catYearCalculator(value)
   resultsEl.textContent = `Your cat is ${output} years old in human years if they are ${value} years old in cat years`

})

function catYearCalculator(value){
    let output = 0
        if(value == 0){
            output = 'less than 15'
        }else if(value == 1){
            output = 15
        }else if(value == 2){
            output = 24
        }else{
            let mult = num - 2
            output = (mult * 4) + 24
        }
        return output
    
}