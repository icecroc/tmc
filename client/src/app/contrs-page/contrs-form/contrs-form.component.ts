import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {switchMap} from 'rxjs/operators'
import {of} from 'rxjs'
import {MaterialService} from '../../shared/classes/material.service'
import {ContrsService} from '../../shared/services/contrs.service'
import {Contr} from '../../shared/interfaces'

@Component({
  selector: 'app-contrs-form',
  templateUrl: './contrs-form.component.html',
  styleUrls: ['./contrs-form.component.css']
})
export class ContrsFormComponent implements OnInit {

  @ViewChild('input') inputRef: ElementRef
  form: FormGroup
  isNew = true
  contr: Contr

  constructor(private route:  ActivatedRoute,
              private contrsService: ContrsService,
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
              return this.contrsService.getById(params['id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (contr: Contr) => {
          if (contr) {
            this.contr = contr
            this.form.patchValue({
              name: contr.name
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

  deleteContr() {
    const decision = window.confirm(`Вы уверены, что хотите удалить контрагента "${this.contr.name}"`)

    if (decision) {
      this.contrsService.delete(this.contr._id)
        .subscribe(
          response => MaterialService.toast(response.message),
          error => MaterialService.toast(error.error.message),
          () => this.router.navigate(['/contrs'])
        )
    }
  }

  onSubmit() {
    let obs$
    this.form.disable()

    if (this.isNew) {
      obs$ = this.contrsService.create(this.form.value)
    } else {
      obs$ = this.contrsService.update(this.contr._id, this.form.value)
    }

    obs$.subscribe(
      contr => {
        this.contr = contr
        MaterialService.toast('Изменения сохранены.')
        this.form.enable()
        this.router.navigate(['/contrs'])
      },
      error => {
        MaterialService.toast(error.error.message)
        this.form.enable()
      }
    )
  }

}
