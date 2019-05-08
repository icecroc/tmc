import {Component, OnInit} from '@angular/core';
import {ContrsService} from '../shared/services/contrs.service'
import {Contr} from '../shared/interfaces'
import {Observable} from 'rxjs/index'

@Component({
  selector: 'app-contrs-page',
  templateUrl: './contrs-page.component.html',
  styleUrls: ['./contrs-page.component.css']
})
export class ContrsPageComponent implements OnInit {

  contrs$: Observable<Contr[]>

  constructor(private contrsService: ContrsService) { }

  ngOnInit() {
    this.contrs$ = this.contrsService.fetch()
  }

}
