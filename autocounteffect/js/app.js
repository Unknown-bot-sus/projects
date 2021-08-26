// UI
const counters = document.querySelectorAll('.counter');
// console.log(counters);
counters.forEach((counter)=>{
    // console.log(counter);
    counter.textContent = "0";
    // console.log(typeof counter.textContent);
    // console.log(counter.getAttribute('data-target'));

    const updateCounter = ()=>{
        const target = Number(counter.getAttribute('data-target'));
        // console.log(typeof target);

        const ctr = +counter.innerText;
        // console.log(typeof ctr);

        const increment = target/100;
        // console.log(increment);
        
        if(ctr < target){
            counter.innerText = Math.ceil(ctr + increment);
            setTimeout(updateCounter, 100);
        }
    }
    updateCounter();
});

// 23AC WDFXXXX