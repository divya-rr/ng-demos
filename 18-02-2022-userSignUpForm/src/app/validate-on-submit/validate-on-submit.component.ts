import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-validate-on-submit',
  templateUrl: './validate-on-submit.component.html',
  styleUrls: ['./validate-on-submit.component.css']
})
export class ValidateOnSubmitComponent implements OnInit {

  constructor(private rootFormGroup:FormGroupDirective) { }
  form!: FormGroup;

  ngOnInit(): void {
    this.form=this.rootFormGroup.control
  }

}
