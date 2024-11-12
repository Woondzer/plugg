class errorHandler {
    constructor() {}

    checkEmptyInput(inputValue) {
        if (inputValue.trim() === "") {
            this.displayError("Inputfältet får inte vara tomt.");
            return false;
        }
        return true;
    }


    displayError(errorMessage) {
        const formMessages = document.getElementById("form-Messages")
        
        if (formMessages) {
            const errorDiv = document.createElement('div');
            errorDiv.classname = 'error-message';
            errorDiv.innerText = errorMessage;

            formMessages.appendChild(errorDiv);

            setTimeout(() => {
                errorDiv.remove();
            }, 1500);
            console.log(errorMessage)
            
        }


    }

    
}

export default errorHandler;