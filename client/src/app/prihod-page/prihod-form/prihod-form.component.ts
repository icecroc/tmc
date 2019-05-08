import {Component, OnInit} from '@angular/core'

import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Observable, Subscription} from 'rxjs'
import {Contr, Nom, Prihod} from '../../shared/interfaces'
import {ContrsService} from '../../shared/services/contrs.service'
import {NomsService} from '../../shared/services/noms.service'
import {PrihodsService} from '../../shared/services/prihods.service'
import { MaterialService } from 'src/app/shared/classes/material.service';

@Component({
  selector: 'app-prihod-form',
  templateUrl: './prihod-form.component.html',
  styleUrls: ['./prihod-form.component.css']
})
export class PrihodFormComponent implements OnInit {

  oSub: Subscription

  sklads = []
  edizs = []
  form : FormGroup
  contrs$: Observable<Contr[]>
  noms$: Observable<Nom[]>

  constructor(private contrsService: ContrsService,
              private nomsService: NomsService,
              private prihodService: PrihodsService) { }

  ngOnInit() {    
    this.contrs$ = this.contrsService.fetch()
    this.noms$ = this.nomsService.fetch()
    this.form = new FormGroup ({
      nom: new FormControl(null, Validators.required),
      ediz: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      contr: new FormControl(null, Validators.required),
      sklad: new FormControl(null, Validators.required)
    })
    this.sklads = [
      {name: 'Нефтьтаъминот'},
      {name: 'Склад ТМЦ CHILON'},
      {name: 'Резервуары CHILON'},
      {name: 'Нулевой склад CHILON'}
    ]
    this.edizs = [
      {name: 'Литр'},
      {name: 'Килограмм'},
      {name: 'Метр'},
      {name: 'Пачка'},
      {name: 'Упаковка'},
      {name: 'Штука'}
    ]
    console.log(this.contrs$)
  }

  onSubmit() {
    const prihod: Prihod = {
      nom: this.form.value.nom,
      ediz: this.form.value.ediz,
      quantity: this.form.value.quantity,
      contr: this.form.value.contr,
      sklad: this.form.value.sklad,
      prihodUser: localStorage.getItem('email')
    }

    this.oSub = this.prihodService.create(prihod).subscribe(
      newPrihod => {
        MaterialService.toast('Приход добавлен')
      }
    )
  }

}
