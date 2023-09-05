import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OAuthService } from "angular-oauth2-oidc";
import { AuthService } from "oauth/src/app/services/auth.service";
import { InitialDataConnector } from "../../core/services/initial.data/initial.data-connector";
import { UserService } from "../../core/services/user.service";

@Component({
  templateUrl: './identity.component.html',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService],
  selector: 'xpa-identity'

})
export class IdentityComponent implements OnInit {

  get accessToken() {
    return this.authService.getAccessToken()
  }
  get authToken() {
    console.log("token", this.authService.getAuthToken())
    return this.authService.getAuthToken()
  }

  set accessToken(value: string) {
    if (value) {
      this.token = value;
    }
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private oauthService: OAuthService,
  ) {
  }
 
  token!: string | any;

  ngOnInit(): void {
    this.oauthService.events.subscribe(()=>{
      this.router.navigateByUrl('/dashboard');
      this.token = this.oauthService.getAccessToken();
      sessionStorage.setItem('AccessToken',this.token)
      // this.getUserDetail(this.token)
      // this.initialDataConnector.getInitialData
    })
  }
  getUserDetail(token:string) {
  //   this.adminService.userDetail(token).pipe(
  //     finalize(() =>
  //       console.log("Loader Here")
  //     )
  //   )
  //   .subscribe((response)=>{
  //     // let userInfo: UserInfo = response;
  //     // this.userService.saveUserInfo(userInfo);
      
  //   })
  }
}