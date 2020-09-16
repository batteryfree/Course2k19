import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  public form: FormGroup;
  public sendData: Object;
  public countrs: string[] = ['UA', 'RU'];

  constructor() {
    this.form = new FormGroup({
      userEmails: new FormArray([new FormControl(null, [Validators.required,
      Validators.email])]),
      'userFirstName': new FormControl(null, Validators.required),
      'userLastName': new FormControl(null, Validators.required),
      'userAreaCode': new FormControl(null, [Validators.required,
      Validators.pattern('[0-9]{3}')]),
      'userPhoneNumber': new FormControl(null, [Validators.required,
      Validators.pattern('[0-9]{7}')]),
      'userCompany': new FormControl(null, Validators.required),
      'userStreetAdr': new FormControl(null, Validators.required),
      'userStreetAdr2': new FormControl(null, Validators.required),
      'userCity': new FormControl(null, Validators.required),
      'userState': new FormControl(null, Validators.required),
      'userZipCode': new FormControl(null, [Validators.required,
      Validators.pattern('[0-9]{5}')]),
      'userCountry': new FormControl(null, Validators.required)
    });
  }

  get userEmails(): FormArray { return this.form.get('userEmails') as FormArray; }

  public addEmail(): void {
    (<FormArray>this.form.get('userEmails')).push(new FormControl(null, [Validators.required,
    Validators.email]));
  }

  public removeEmail(index: number): void {
    (<FormArray>this.form.get('userEmails')).removeAt(index);
  }

  public isValidField(formControl: string): boolean {
    return this.form.controls[formControl].invalid &&
      this.form.controls[formControl].touched;
  }

  public isValidEmail(index: number): boolean {
    return (<FormArray>this.form.get('userEmails')).controls[index].touched &&
      (<FormArray>this.form.get('userEmails')).controls[index].invalid;
  }

  public isValidForm(): boolean {
    return this.form.invalid;
  }

  public onSubmit(): void {
    console.log(this.form)
    this.sendData = this.form.value;
    this.form.reset;
    this.resetForm();
  }

  public resetForm() {
    this.form.updateValueAndValidity();
    this.form.reset();
    this.form.controls['userCountry'].setValue(null);
  }
}
