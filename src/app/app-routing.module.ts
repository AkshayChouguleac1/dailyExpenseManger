import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { OtpRecieverWindowComponent } from './otp-reciever-window/otp-reciever-window.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"profile",component:ProfileComponent},
  {path:"message",component:MessageComponent},
  {path:"setting",component:SettingComponent},
  {path:"help",component:HelpComponent},
  {path:"login",component:LoginComponent},
  {path:"PasswordReset",component:ForgetPasswordComponent},
  {path:"OTPReciever/:id",component:OtpRecieverWindowComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
