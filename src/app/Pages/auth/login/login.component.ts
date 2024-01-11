import { HttpErrorResponse } from '@angular/common/http';
import { Component,AfterViewInit, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AccessToken } from 'src/app/Models/AccessToken.Model';
import { ErrorApiPettition } from 'src/app/Models/Error.Api.Model';
import { SigInUser } from 'src/app/Models/sigInUser.model';
import { AuthService } from 'src/app/Services/auth.service';
import {environment} from 'src/environment/environment';
var Key = environment.key;
var Ref = environment.Ref;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public isLoadLogin :boolean =false;
  public isOperationSuccess !: boolean | undefined;
  public messagesAlert : string = "";
  public router:Router = inject(Router);
  private fb:FormBuilder = inject(FormBuilder)
  private authService:AuthService = inject(AuthService);
  public Forms: FormGroup =  this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  });

 
  onSubmit():void{
    if(this.Forms.valid){
      console.log(this.Forms.value)
      this.signIn();
    }
  }

  public signIn(){
    this.isLoadLogin= true;
    var usr = new SigInUser(this.Forms.get('email')?.value,this.Forms.get('password')?.value);
    let operationSuccess = false;
    let messagesAlertTry = "";
    this.authService.sigIn(usr)
    .pipe(
      finalize(() => {
        this.isOperationSuccess = operationSuccess; 
        this.isLoadLogin = false;
        this.messagesAlert = messagesAlertTry;
        if(this.isOperationSuccess){
          this.router.navigateByUrl('/Business/Panel');
        }
      })
    )
    .subscribe({
      next(resp:AccessToken){
        operationSuccess = true;
        localStorage.setItem(Key,resp.accessToken)
        localStorage.setItem(Ref,resp.refreshToken)
        messagesAlertTry = "Success! \n Login is valid"
      },
      error(msg:HttpErrorResponse){
        operationSuccess = false;
        const errorResponse:ErrorApiPettition = new ErrorApiPettition(
          msg.error.type,  // Aquí puedes definir el tipo de error según tus necesidades
          msg.error.title,
          msg.error.status,
          msg.error.instance  // Otra propiedad de interés en la respuesta de error
        );
        messagesAlertTry = "User or Password is incorrect, please valid you credentials";
        console.error(errorResponse)
      }
  })
}
 
}
