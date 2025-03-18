import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  loginForm! : FormGroup;
  username: string = '';
  submitted: boolean = false;

  
  constructor(
    private fb: FormBuilder,
    public backendService: BackendService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.loginForm = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/\d/),
        Validators.pattern(/[A-Za-z]/),
      ]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {

  this.backendService.username$.subscribe(username => {
    this.username = username;
  });
   
    this.loginForm.valueChanges.subscribe(() => {
      console.log('Form valid:', this.loginForm.valid);
      console.log('Form errors:', this.loginForm.errors);
    });
  }

    passwordMatchValidator(group: FormGroup): {[key: string]: any} | null {
      const password = group.get('password');
      const confirmPassword = group.get('confirmPassword');
      
      // Return null if controls haven't been initialized yet
      if (!password || !confirmPassword) return null;
      
      // Return null if another validator has already found an error on the matchingControl
      if (confirmPassword.errors && !confirmPassword.errors['passwordMismatch']) {
        return null;
      }
      
      // Return error if passwords don't match
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPassword.setErrors(null);
        return null;
      }
    }
  onSubmit() {
    if (this.loginForm.valid && this.username) {
      const password = this.loginForm.get('password')?.value;
      
      this.backendService.setUserPassword(password).subscribe({
        next: (_) => {
          window.location.href = 'assets/Done.html';
        },
        error: (error) => {
          console.error('Error setting password:', error);
          // Handle error (e.g., show error message)
        }
      });
    } else {
      console.log('Form is invalid or username is missing');
      console.log('Form errors:', this.loginForm.errors);
      console.log('Password errors:', this.loginForm.get('password')?.errors);
      console.log('Confirm Password errors:', this.loginForm.get('confirmPassword')?.errors);
    }
  }

  get password() { return this.loginForm.get('password'); }
  //get confirmPassword() { return this.loginForm.get('confirmPassword'); }

}
