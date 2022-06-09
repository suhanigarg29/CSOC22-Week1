let display = document.getElementById('display');
const toggle = document.querySelector('.toggle input')

// toggle.addEventListener('click', ()=>{
//     const scientific = toggle.parentNode.querySelector('.scientific')

//     scientific.textContent = toggle.checked ? 'Scientific' : 'Regular'
// })
let buttons = Array.from(document.getElementsByClassName('button'));

// function themeSwitch(){
//     let element = document.body;
//     element.classList.toggle("dark-mode");

// }

let changeTheme = document.getElementById("change-theme");
    if(sessionStorage.getItem("mode")=="dark"){
        darkmode();
    }
    else{
        lightmode();
    }

    changeTheme.addEventListener("change", function(){
        if (changeTheme.checked){
            darkmode();
        }
        else{
            lightmode();
        }
    });

    function darkmode(){
        document.body.classList.add("dark-mode");
        changeTheme.checked = true;
        sessionStorage.setItem("mode", "dark");
    }

    function lightmode(){
        document.body.classList.remove("dark-mode"); 
        changeTheme.checked = false;
        sessionStorage.setItem("mode", "light");
    }



buttons.map(button=> {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case 'Back':
                if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Error!';
                    // alert("Nooo");
                }
                break;
            case 'Deg':
                case 'sin':
                    let x = eval(display.innerText);
                    x = x*Math.PI/180; //in degrees
                    display.innerText = Math.sin(x);
                    
                    // alert("Woooo");
                    break;
                case 'cos':
                    let y = eval(display.innerText);
                    y = y*Math.PI/180;
                    display.innerText = Math.cos(y);
                    break;
                case 'tan':
                    let z = eval(display.innerText);
                    z = z*Math.PI/180;
                    display.innerText = Math.tan(z);
                    break;
                break;
            case 'Arcsin':
               let a = eval(display.innerText);
               display.innerText = Math.asin(a);
               break;
           case 'Arccos':
                let b = eval(display.innerText);
                b = b*Math.PI/180;
                display.innerText = Math.acos(b);
                break;
            case 'tan':
                let c = eval(display.innerText);
                display.innerText = Math.atan(c);
                break;
            case 'π':
                π = 3.14159265
                display.innerText = π;
                break;
            // case '(':
            //     display.innerText = '(';
            //     break;
            // case ')':
            //     display.innerText = ')';
            //     break;
            case 'e':
                e = 2.71828183
                display.innerText = e;
                break;
            case 'log':
                let d = eval(display.innerText);
                display.innerText = Math.log10(d);
                break;
            case 'ln':
                let f = eval(display.innerText);
                display.innerText = Math.log(f);
                break;        
            case 'x^2':
                let g = eval(display.innerText);
                display.innerText = Math.pow(g,2);
                break;
            case 'x^1/2':
                let h = eval(display.innerText);
                display.innerText = Math.pow(h, 1/2);
                break;
            // case '1/x':
            //     let i = eval(display.innerText);
            //     display.innerText = ;
            //     break;
            

            default:
                // alert("something");
                display.innerText += e.target.innerText;
        }
    });
});


