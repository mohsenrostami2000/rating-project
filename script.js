// select items
const btn = document.querySelector('.btn');
const starsContainer = document.querySelector('.stars-container');
const container = document.querySelector('.container');
const rate = document.querySelectorAll('.selected');

let rateResult = null;

rate.forEach((item) => {
    item.addEventListener('click', (e) => {
        // if(item.classList.contains('rate')){
        //     item.classList.remove('rate');
        // } else if(!item.classList.contains('rate')){
        //     item.classList.add('rate')
        // }
        // e.currentTarget.classList.toggle('rate');
        const active = document.querySelector('.rate');
        if (active) {
            active.classList.remove('rate')
        }
        const cheeked = e.target;
        item.classList.add('rate')
        rateResult = e.target.innerText;
        console.log(rateResult)
        // console.log(e.target)
    })
    
});

btn.addEventListener('click', () => {
    if(rateResult){
        console.log('hellow world')
        container.innerHTML = `
        <div class="img-container">
            <img src="images/illustration-thank-you.svg" alt="thank you">
        </div>
        <div class="result">
            <p>
            You selected <span class="p">${rateResult}</span> out of 5
            </p>
        </div>
        
        <div class="result-text">
            <h1>
                Thank you!
            </h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
            </p>
        </div>`
    }
})