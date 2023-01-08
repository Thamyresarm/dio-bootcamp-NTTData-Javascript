import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','small-card.responsive.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover: string=""
  @Input()
  cardTitle: string=""
  @Input()
  cardDescription: string=""
  @Input()
  Id: string="0"

  constructor(){}

  ngOnInit(): void{

  }
}
