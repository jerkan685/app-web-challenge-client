import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';
import { Cliente } from '../../models/cliente';
import { ClientRestControllerService } from '../../services/client-rest-controller.service';

@Component({
  selector: 'app-form-list-client',
  templateUrl: './form-list-client.component.html',
  styleUrls: ['./form-list-client.component.css'],
})
export class FormListClientComponent implements OnInit {
  public formClient: FormGroup
  public listAge: any[] = [];
  constructor(private service: ClientRestControllerService) { }

  ngOnInit() {
    this.formClient = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required)
    });
    this.getInfoNumeric();
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('surname', form.value.surname);
    console.log('age', form.value.age);
    console.log('birthdate ', form.value.birthdate)
    if(form.valid) {
      const client: Cliente = {
         nombre: form.value.name,
         apellido: form.value.surname,
         edad: form.value.age,
         birthdate: new Date(form.value.birthdate)

      }
      this.service.saveClients(client).then(data => {
        console.log('Guardo clientes');
        alert('Cliente guardado con exito');
      }, error => {
        console.log('error ', error)
        alert('Error al guardar cliente')
      })
    }
    form.reset();
   
    
  }

  public test() {
    alert('hola')
  }

  public getInfoNumeric() {
    this.listAge = [];
    this.service.getListClients().subscribe(data => {
     data.forEach((element: any) => {
      console.log(element.payload.doc.data());
      const data = element.payload.doc.data()
      this.listAge.push(data.edad)
      console.log('list age', this.listAge)
     })
    })
  }

  public getPromedio() {
    console.log(this.listAge)
    if(this.listAge.length > 0) {
     const promedio = this.getAvg(this.listAge);
    console.log(promedio)
    return promedio;
    }else {
      return ""
    }
      
    
  }

  public showDesvest() {
    const desvet = this.getDesvest(this.listAge);
    return desvet;
  }

  private getAvg(list: number[]) {
    const sum = list.reduce((previous, current) => current += previous, 0);
    return (sum / list.length);
  }

  private getDesvest(arr: number[]) {

  if(this.listAge.length > 0) {
    let mean = arr.reduce((acc, curr)=>{
      return acc + curr
    }, 0) / arr.length;
     
    arr = arr.map((k)=>{
      return (k - mean) ** 2
    })
     
   let sum = arr.reduce((acc, curr)=> acc + curr, 0);
   // Returning the Standered deviation
   return Math.sqrt(sum / arr.length)
  } else {
    return "";
  }
  
  }

}
