const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let month = document.querySelector('.month')
let year = document.querySelector('.year')
let day = document.querySelector('.day')
let timee = document.querySelector('#time')
let amPm = "AM"
let isTwelvehour = false
let clock = document.querySelector('#toggleType')

const checktime = x => x < 10 ? '0'+x : x

function time(){
    const now = new Date()
    let hours = now.getHours()
    const minuts = now.getMinutes()
    const seconds = now.getSeconds()

    if (hours > 12) {
        amPm = "PM"
    }
    else am = "AM"

    if (isTwelvehour){
        clock.innerHTML = '24 hours clock'
        if ( hours >= 12 ){
            hours = 24 - hours
        }
    } else{
        clock.innerHTML = '12 hours clock'
    }

    timee.innerHTML = `${checktime(hours)}:${checktime(minuts)}:${checktime(seconds)} ${amPm}`

}
setInterval(time,1000)
clock.addEventListener('click', () => isTwelvehour = !isTwelvehour)

const date = new Date()
let curr_month = date.getMonth()
month.innerHTML = `${months[curr_month]}`
year.innerHTML = date.getFullYear()
day.innerHTML =  date.getDate() + ","

let days = ['Monday',"Tuesday",'Wednesday','Thursday','Friday','Saturday','Sunday']
let curr_day = days[date.getDay() - 1]
document.querySelectorAll('.li').forEach( el => el.innerHTML ===  curr_day ? el.classList.add('active_li') : el.classList.remove('active_li'))