import { Component, OnInit } from '@angular/core'

import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    
  }
}
