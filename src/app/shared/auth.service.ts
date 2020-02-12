import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user = [];
    isAuth = new BehaviorSubject<boolean>(false);

    constructor(private router: Router) {
        this.user = [
            {
                email: "sachinsuthariya@gmail.com",
                password: "123456"
            },
            {
                email: "sachin.suthariya.sa@gmail.com",
                password: "123456"
            }
        ];
    }

    isAuthenticated() {
        const email = localStorage.getItem('email');
        const isLogin = localStorage.getItem('isLogin');

        if (isLogin == '1' && email) {
            return true;
        }
        return false;
    }

    login(data: object) {
        let result;
        const obj = JSON.stringify(data);
        result = this.user.filter(item => {
            return JSON.stringify(item) == obj;
        });
        this.isAuth.next(true);
        localStorage.setItem("email", result[0].email);
        localStorage.setItem("isLogin", result.length);

        return result.length;
    }

    logout() {
        localStorage.clear();
        this.isAuth.next(false);
        this.router.navigate(['']);
    }


}