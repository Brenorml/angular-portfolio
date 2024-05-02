import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discipline-card',
  templateUrl: './discipline-card.component.html',
  styleUrls: ['./discipline-card.component.css', './discipline-card.component.recursive.css']
})
export class DisciplineCardComponent implements OnInit {

  @Input()
  moduleTitle: string = "";
  @Input()
  teacher: string = "";
  @Input()
  goals: string = "";
  @Input()
  activities: string = "";
  @Input()
  reflection: string = "";
  @Input()
  homeworkUrl: string = "";
  @Input()
  homeworkImg: string = "";
  

  constructor() { }

  ngOnInit(): void {
  }

}
