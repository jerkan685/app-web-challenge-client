import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { element } from 'protractor';
import { Cliente } from '../../models/cliente';
import { ClientRestControllerService } from '../../services/client-rest-controller.service';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-form-list-client',
  templateUrl: './form-list-client.component.html',
  styleUrls: ['./form-list-client.component.css'],
})
export class FormListClientComponent implements OnInit {
  public formClient: FormGroup
  public listAge: any[] = [];
  constructor(private service: ClientRestControllerService, private ngxService: NgxUiLoaderService) { }

  async ngOnInit() {
    await this.ngxService.start();
    this.formClient = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required)
    });
    this.getInfoNumeric();
    
  }

  async onSubmit(form: FormGroup) {
    await this.ngxService.start();
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
      this.service.saveClients(client).then(async data => {
        console.log('Guardo clientes');
        alert('Cliente guardado con exito');
        await this.ngxService.stop();
      }, async error => {
        console.log('error ', error)
        alert('Error al guardar cliente')
        await this.ngxService.stop();
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
     data.forEach(async (element: any) => {
      console.log(element.payload.doc.data());
      const data = element.payload.doc.data()
      this.listAge.push(data.edad)
      console.log('list age', this.listAge)
      await this.ngxService.stop();
     })
    })
  }

  public getPromedio() {
    console.log(this.listAge)
    if(this.listAge.length > 0) {
     const promedio = Utils.getAvg(this.listAge);
    console.log(promedio)
    return promedio;
    }else {
      return ""
    }
      
    
  }

  public showDesvest() {
    if(this.listAge.length > 0) {
      const desvet = Utils.getDesvest(this.listAge);
      return desvet;
    } else {
      return "";
    }
    
  }

}
