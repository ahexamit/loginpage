import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  public submitted: boolean = false;
  public loginForm!: FormGroup;
  public user!: SocialUser;
  public loggedIn!: boolean;
  public GoogleLoginProvider = GoogleLoginProvider;
  constructor(public fb: FormBuilder, private authService: SocialAuthService) {}

  ngOnInit(): void {
    this.authToken();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }
  authToken() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      console.log(this.user);

    });
  }
  submit() {
    this.submitted = true;
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  //  public signInWithGoogle(): void {
  //     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   }

  public signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  public refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
