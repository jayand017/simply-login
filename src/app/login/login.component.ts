import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userid: string;
  public passwd: string;

  public error: boolean = false;
  public errorMsg: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit() {
    if(this.validateUserId() && this.validatePasswd()){
      this.error = false;
      this.errorMsg = "";
      this.authenticationService.login(this.userid, this.passwd).subscribe(res => {
        if(res.success){
          sessionStorage.setItem('loggedIn', 'true');
          this.router.navigate(['/admin']);
        }
        else {
          this.error = true;
          this.errorMsg = res.message;
        }
      })
    }
    else {
      this.error = true;
      this.errorMsg = "UserId and Password is required"
    }
  }

  validateUserId(){
    if(this.userid === undefined || this.userid === null || this.userid === "") {
      return false;
    }
    return true;
  }

  validatePasswd(){
    if(this.passwd === undefined || this.passwd === null || this.passwd === "") {
      return false;
    }
    return true;
  }

}
