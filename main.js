

    let btn = document.getElementById('btn')
    let chance1 = document.getElementById('chance')
    let chance = chance1.innerHTML
    let guessedNum = document.getElementById('guessedNum')
    let gap = document.getElementById('gap')
    

   

    btn.addEventListener('click', (e)=>{

        let random = Math.floor(Math.random() * 10 + 1);

        if(guessedNum.value > 10){
            gap.textContent ='NOT ALLOWED NUMBER'
            btn.disabled = true
        }
        else if(chance == 0){
            gap.textContent ='THE GAME IS OVER'
            btn.disabled = true
            const box = document.createElement("div");
            box.id = "box";
            document.body.appendChild(box);
            
            const button = document.createElement("button");
            button.innerText = "click here to get 5 more chances";
            button.id = "button-1";
            box.appendChild(button);
        
        }
        // else if(guessedNum.value ==""){
        //     gap.textContent ='ENTER A NUMBER'
        //     btn.disabled = true
        
        // }
        else{
            if (random == guessedNum.value) {
                gap.textContent ='Congratulatulations, you guessed right'
                document.body.style.backgroundColor = 'lightgreen'  
            }
    
            else if (random > guessedNum.value) {
                gap.textContent = 'OOPS SORRY!! TRY A GREATER NUMBER'
                document.body.style.backgroundColor = 'red' 
                chance1.innerHTML = chance--
            }
    
            else {
                gap.textContent = 'OOPS SORRY!! TRY A SMALLER NUMBER'
                document.body.style.backgroundColor = 'red'
                // chance-1
                chance1.innerHTML = chance--
            }

        }
        

        
       
        
    })