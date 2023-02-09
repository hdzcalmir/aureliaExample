export class Contact {
    private email = '';
    private message = '';

    private user: UserCredentials;
    
    // This function is called when the form is submitted
    handleLogin() {
        // Call an API/validate the bound values 
        console.log(this.user);
        // console.log(this.message);

        
        this.email = '';
        this.message = '';
    }

    test() {
        this.message = 'hello';
    }

    constructor() {
        this.user = new UserCredentials();
    }

}

export class UserCredentials {
    username: string;
    password: string;

    constructor() {
        this.username = '';
        this.password = '';
    }

}