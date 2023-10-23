//Varibales
let button = document.getElementById('button') //img

let input = document.querySelectorAll('input')
let alerts = document.querySelectorAll('.alertError')
console.log(alerts)

button.addEventListener('click', showAge)

function showAge(){
    //establishing variables for the dom
        let yearText = document.getElementById('years-text')
        let monthText = document.getElementById('months-text') 
        let dayText = document.getElementById('days-text')
    //grabbing input values 
        let dayInput = document.getElementById('day').value
         let monthInput = document.getElementById('month').value
        let yearInput = document.getElementById('year').value
    //error 
        if (!(dayInput) || !(monthInput) || !(yearInput)) {
            yearText.innerText = '--'
            monthText.innerText = '--'
            dayText.innerText = '--'
            // document.getElementsByTagName('input')[0].style.border = '1px solid red'
            // document.getElementsByTagName('input')[1].style.border = '1px solid red'
            // document.getElementsByTagName('input')[2].style.border = '1px solid red'
            // document.getElementsByClassName('alertError')[0].innerHTML = 'This field is required'
            // document.getElementsByClassName('alertError')[1].innerHTML = 'This field is required'
            // document.getElementsByClassName('alertError')[2].innerHTML = 'This field is required'
            input.forEach(x => x.style.border = '1px solid red')
            alerts.forEach(x => x.innerHTML = 'This field is required')

        }else {
                //reset 
        if(yearText.innerText != '--'){
            yearText.innerText = '--'
            monthText.innerText = '--'
            dayText.innerText = '--'
            showAge()
        }else {
            input.forEach(x => x.style.border = '1px solid black')
            alerts.forEach(x => x.innerHTML = '')
        //button changes color
            document.querySelector('.logo').style.background = 'hsl(259, 100%, 65%)'
        
        //converting to age in years/months/days
            convertToAge(day, month, year)        
        //plugging into dom
            yearText.innerText  = convertToAge(dayInput, monthInput, yearInput)[2]
            monthText.innerText  = convertToAge(dayInput, monthInput, yearInput)[1]
            dayText.innerText   = convertToAge(dayInput, monthInput, yearInput)[0]
            }

        }

    
    }




//Date object
const date = new Date()

let day = date.getDate()
let month = date.getMonth()
let numOfDays = date.getMonth() + 1;
let year = date.getFullYear()
let fullDate = `${month}-${day}-${year}`

//variables for convert function 

function convertToAge(d, m, y){
        if(!(Number(d)) || !(Number(m)) || !(Number(y)) || (Number(m) > 12) || (y > year)){
            input.forEach(x => x.style.border = '1px solid red')
            alerts.forEach(x => x.innerHTML = 'Not a valid date')
        }else {
            let ageMonth = month - Number(m)
            let ageDay = ((daysInMonth(numOfDays,year) - Number(d)) + day < daysInMonth(numOfDays, year)) ? (daysInMonth(numOfDays,year) - d) + day : ((daysInMonth(numOfDays,year) - d) + day) -  (daysInMonth(numOfDays,year))
            // if statement if days is more than the days of the month add 1 to month
            if(ageDay === ((daysInMonth(numOfDays,year) - Number(d)) + day) -  (daysInMonth(numOfDays,year))) {
                 ageMonth+=1
            }
            let ageYear = year - Number(y)
            let dateArray = [ageDay, ageMonth, ageYear]
            return dateArray
        }
       
    }
   
    

// convertToAge(12, '05', 1995)


// function ageDay(num, month){
//     let arr = []
//     if (30 - (num - day) >= daysInMonth(month, year)){
//         month += 1
//         arr.push(month)
//         arr.push((daysInMonth(month, year) - (num - day)) - daysInMonth(month,year))
//         return arr  
//     }else {
//         arr.push(( - (num - day)))
//         return arr
//     }
// }

function daysInMonth (month, year){
    return new Date(year, month, 0).getDate();
}

// console.log(daysInMonth(month,year))