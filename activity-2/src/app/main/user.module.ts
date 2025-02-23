import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './routes.module';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    RoutesModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
