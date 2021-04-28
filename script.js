/****variables******/
const form = document.getElementById('form');
const inputs = document.getElementsByClassName('req-input');
const submit_btn = document.getElementById('submit');
const empty_msgs = document.querySelectorAll('.empty-msg');

/**** submission event listner (when submit button is pressed)*/
form.addEventListener('submit', (e) => {

    //error condition that will change to true if there was an empty input
    let error = false;

    // loop through the inputs
    for (let i = 0; i < inputs.length; i++) {

        //cond: if the value of an input was empty 
        // => add error class to that input, empty message and to the submit button
        // + add eventListener to this input so that when key is pressed = remove error classes
        if (inputs[i].value == '') {
            error = true;

            inputs[i].classList.add('error');
            empty_msgs[i].classList.add('error');

            inputs[i].addEventListener('keydown', () => {
                if (inputs[i].classList.contains('error')) {
                    inputs[i].classList.remove('error');
                }

                if (empty_msgs[i].classList.contains('error')) {
                    empty_msgs[i].classList.remove('error');
                }

                if (submit_btn.classList.contains('error')) {
                    submit_btn.classList.remove('error');
                }
            })
        }
    }

    //cond: the error variable is true (there is an empty input)
    // => prevent form submission
    if (error) {
        e.preventDefault();
        submit_btn.classList.add('error');
    }
})