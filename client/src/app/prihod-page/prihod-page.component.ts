import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {MaterialInstance, MaterialService} from '../shared/classes/material.service'
import {PrihodsService} from '../shared/services/prihods.service'
import {Subscription} from 'rxjs'
import {Filter, Prihod} from '../shared/interfaces'

const STEP = 10

@Component({
  selector: 'app-prihod-page',
  templateUrl: './prihod-page.component.html',
  styleUrls: ['./prihod-page.component.css']
})

export class PrihodPageComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('tooltip') tooltipRef: ElementRef
  tooptip: MaterialInstance
  oSub: Subscription
  prihods: Prihod[] = []
  filter: Filter = {}

  offset = 2
  limit = STEP

  loading = false
  reloading = false
  noMorePrihods = false

  constructor(private prihodsService: PrihodsService) {    
  }

  ngOnInit() {
    this.reloading = true
    this.fetch()
  }

  private fetch() {
    const params = Object.assign({}, this.filter, {
      offset: this.offset,
      limit: this.limit
    })
    this.oSub = this.prihodsService.fetch(params).subscribe(prihods => {
      this.prihods = this.prihods.concat(prihods)
      this.noMorePrihods = prihods.length < STEP
      this.loading = false
      this.reloading = false
    })
  }

  loadMore() {
    this.offset += STEP
    this.loading = true
    this.fetch()
  }

  ngOnDestroy() {
    this.tooptip.destroy()
    this.oSub.unsubscribe()
  }

  applyFilter(filter: Filter) {
    this.prihods = []
    this.offset = 0
    this.filter = filter
    this.reloading = true
    this.fetch()
  }

  ngAfterViewInit() {
    this.tooptip = MaterialService.initTooltip(this.tooltipRef)
  }

  isFiltered(): boolean {
    return Object.keys(this.filter).length !== 0
  }

}
