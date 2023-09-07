import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gux-auto-complete',
  templateUrl: './auto-complete.component.html'
})
export class AutoCompleteComponent implements OnInit {

  @Input() list!: Array<any>;
  public view = false;

  ngOnInit(): void {
    console.log(1234567)
  }

  mostrarDiv() {
    this.view = true;
  }

  ocultarDiv() {
    this.view = false;
  }

  selected(row:any){
    console.log(row)
  }
}
