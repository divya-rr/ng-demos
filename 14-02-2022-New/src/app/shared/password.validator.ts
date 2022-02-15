import { AbstractControl } from "@angular/forms";

export function passwordValidator (control: AbstractControl): {[key:string]:boolean} | null  {
    const password = control.get('password');
    const retypePassword = control.get('retypePassword');
    if(password?.pristine || retypePassword?.pristine){
        return null
    }
  
    return password && retypePassword && password.value !== retypePassword.value ? { 'misMatch': true } : null;
  };