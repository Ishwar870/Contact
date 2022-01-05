import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
newContactClicked = false;
Contact = [
  {name:'Ishwar Chand', Mobile: '9866237416'},
  {name:'Raja Babu', Mobile: '9866237417'},
  {name:'Krishna', Mobile: '9866237418'}
];
color:any;
  constructor() { }

  ngOnInit(): void {
  }
  model1:any = {};
  model2:any = {};
  addContact(){
    this.Contact.push(this.model1);
    this.model1 = {};
  }
  deleteContact(i:any){
    this.Contact.splice(i);
    console.log(i);
  }
myValue: any;

editContact(editContactInfo: any){
 this.model2.name = this.Contact[editContactInfo].name;
 this.model2.Mobile = this.Contact[editContactInfo].Mobile;
 this.myValue = editContactInfo;
}
updateContact(){
  let editContactInfo = this.myValue;
  for(let i =0; i<this.Contact.length; i++){
    if(i==editContactInfo){
      this.Contact[i] = this.model2;
      this.model2 = {};
    }
  }
}
addNewContactBtn(){
  this.newContactClicked = !this.newContactClicked;
}
changeColorOne(){
  this.color = !this.color;
  if(this.color){
    return '#ffffff';
  }else{
    return '#f6f6f6';
  }
}
}
