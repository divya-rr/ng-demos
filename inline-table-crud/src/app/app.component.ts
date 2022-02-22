import { Component } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inline-table-crud';

  list: { 'firstName': string, 'lastName': string, 'edit': boolean }[] = [];
  person: Person = { firstName: '', lastName: '' }
  cancelClicked = false;
  saved = false;
  isAdded=false



  onAdd() {
    if (this.person.firstName != '' || this.person.lastName != '') {
      this.list.push({ 'firstName': this.person.firstName, 'lastName': this.person.lastName, 'edit': false })
      this.isAdded=true
      this.person.firstName = ''
      this.person.lastName = ''
    }

  }
  onEdit(index: number) {
    this.list[index].edit = true
    

  }
  delete(index: number) {
        this.list.splice(index, 1)
    
  }

  onCancel(index: number) {
    this.list[index].edit = false

  }

  onSave(index: number) {
    this.list[index].edit = false
    this.list[index].firstName = this.list[index].firstName
    this.list[index].lastName = this.list[index].lastName
    this.saved = true
  }
  closeAlert() {
    this.saved = false
    this.isAdded=false
  }




}
