//set initial value for count
let count= 0;
//select value and buttons
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        //decrease
        if(styles.contains('decrease')){
            count--
            value.style.color = "red"
        }
        //increase
        else if(styles.contains('increase')){
            count++
            value.style.color = "green"
        }
        //increase by 5
        else if(styles.contains('5')){
            count += 5
            value.style.color = "green"
        }
        //decrease by 5
        else if(styles.contains('-5')){
            count -=5
            value.style.color = "red"
        }
        //random
        else if(styles.contains('random')){
            //positive random
            if(count < 0){
                count = Math.floor(Math.random() * 100)
                value.style.color = "green"
            }
            //negative random
            else{
                count = Math.floor(Math.random() * -100)
                value.style.color = "red"
            }
        }
        //reset 
        else {
            count = 0
            value.style.color = "black"
        }

        
        value.textContent = count
    })
})

