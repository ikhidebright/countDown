let hour = document.querySelector("#hr");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");
let start = document.querySelector("#start");

const hourCount = (set) => {
        set = hour.value;
     let looper =   setInterval(() => {
                if (set === 1) {
                        clearInterval(looper)
                  }
                let num = (--set)
                hour.value = num
        }, 3600000);
}

const minCount = (set3) => {
        set3 = minutes.value;
       let looper = setInterval(() => {
                if (set3 === 1) {
                      clearInterval(looper)
                }
                let num = (--set3)
                minutes.value = num
        }, 60000);
}

const secCount = (set2) => {
        set2 = seconds.value;
      let looper =  setInterval(() => {
                if (set2 == 0) {
                        set2 = 60;
                }

                // if(hour.value == 0 && minutes.value == 0 && seconds.value == 1){
                //         clearInterval(looper)
                // }

                let num = (--set2)
                seconds.value = num
        }, 1000);
}


const updateUI = (e) => {
        hourCount()
        minCount()
        secCount();
        e.preventDefault();
}

start.addEventListener("click", updateUI)