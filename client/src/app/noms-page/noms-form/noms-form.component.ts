import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {switchMap} from 'rxjs/operators'
import {of} from 'rxjs'
import {MaterialService} from '../../shared/classes/material.service'
import {NomsService} from '../../shared/services/noms.service'
import {Nom} from '../../shared/interfaces'

@Component({
  selector: 'app-noms-form',
  templateUrl: './noms-form.component.html',
  styleUrls: ['./noms-form.component.css']
})
export class NomsFormComponent implements OnInit {

  @ViewChild('input') inputRef: ElementRef
  form: FormGroup
  isNew = true
  nom: Nom

  constructor(private route:  ActivatedRoute,
              private nomsService: NomsService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              return this.nomsService.getById(params['id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (nom: Nom) => {
          if (nom) {
            this.nom = nom
            this.form.patchValue({
              name: nom.name
            })
            MaterialService.updateTextInputs()
          }
          this.form.enable()
        },
        error => MaterialService.toast(error.error.message)
      )
  }

  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  deleteNom() {
    const decision = window.confirm(`Вы уверены, что хотите удалить контрагента "${this.nom.name}"`)

    if (decision) {
      this.nomsService.delete(this.nom._id)
        .subscribe(
          response => MaterialService.toast(response.message),
          error => MaterialService.toast(error.error.message),
          () => this.router.navigate(['/noms'])
        )
    }
  }

  onSubmit() {
    let obs$
    this.form.disable()

    if (this.isNew) {
      obs$ = this.nomsService.create(this.form.value)
    } else {
      obs$ = this.nomsService.update(this.nom._id, this.form.value)
    }

    obs$.subscribe(
      nom => {
        this.nom = nom
        MaterialService.toast('Изменения сохранены.')
        this.form.enable()
        this.router.navigate(['/noms'])
      },
      error => {
        MaterialService.toast(error.error.message)
        this.form.enable()
      }
    )
  }

}
