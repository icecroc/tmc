import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core'
import {Prihod} from '../../shared/interfaces'
import {MaterialInstance, MaterialService} from '../../shared/classes/material.service'
import { Subscription } from 'rxjs';
import { PrihodsService } from 'src/app/shared/services/prihods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prihod-list',
  templateUrl: './prihod-list.component.html',
  styleUrls: ['./prihod-list.component.css']
})
export class PrihodListComponent {

  @Input() prihods: Prihod[]
  
  constructor() { }

}
