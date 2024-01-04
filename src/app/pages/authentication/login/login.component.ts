import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, take, tap } from 'rxjs';
import { IdentityService } from 'src/app/core/services/identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error = '';
  
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private identity: IdentityService,
    private router: Router,
    ) { }

  onSubmit() {

    this.identity.login(
      this.loginForm.get('username')?.value!,
      this.loginForm.get('password')?.value!
    ).pipe(
      take(1),
      catchError((error) => {
        this.error = 'Invalid username / password';
        throw error;
      }),
      tap((user) => console.log(user))
      ).subscribe((user) => this.router.navigate([user.user_role === 'admin' ? 'admin' : '']));
  }
}
