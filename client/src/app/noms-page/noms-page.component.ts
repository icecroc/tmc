import {Component, OnInit} from '@angular/core';
import {NomsService} from '../shared/services/noms.service'
import {Nom} from '../shared/interfaces'
import {Observable} from 'rxjs/index'

@Component({
  selector: 'app-noms-page',
  templateUrl: './noms-page.component.html',
  styleUrls: ['./noms-page.component.css']
})
export class NomsPageComponent implements OnInit {

  noms$: Observable<Nom[]>

  constructor(private nomsService: NomsService) { }

  ngOnInit() {
    this.noms$ = this.nomsService.fetch()
  }

}
