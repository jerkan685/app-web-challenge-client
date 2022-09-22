import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Cliente } from '../../models/cliente';
import { ClientRestControllerService } from '../../services/client-rest-controller.service';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-analisys-client-lis',
  templateUrl: './analisys-client-lis.component.html',
  styleUrls: ['./analisys-client-lis.component.css']
})
export class AnalisysClientLisComponent implements OnInit {
  public listClient: Cliente[] = [];
  public listAge: number[] = [];
  constructor(private service: ClientRestControllerService, private ngxService: NgxUiLoaderService) { }

  async ngOnInit() {
    await this.ngxService.start();
    await this.getlistDatabase();
  }
  

  public getlistDatabase() {
    this.listClient = [];
    this.listAge = []
    this.service.getListClients().subscribe(data => {
      data.forEach(async (element: any) => {
        console.log(element.payload.doc.data());
        const data = element.payload.doc.data()
        this.listClient.push(data);
        this.listAge.push(data.edad);
        await this.ngxService.stop();
       }, async error => {
         console.log('error ', error)
         await this.ngxService.stop();
       })
    })
  }

  public modifyformatDate(date) {
    console.log('fecha del usuario', new Date(date.seconds));
    return new Date(date.seconds * 1000).toLocaleDateString('en-US');
  }

  public showDateDeath({seconds: birthdate}) {
    if(this.listAge.length > 0) {
      const avg = Utils.getAvg(this.listAge);
      const dateDeath = Utils.dateDeathProbabl(birthdate, avg)
      return dateDeath;
    } else {
      return ""
    }

  }

}
