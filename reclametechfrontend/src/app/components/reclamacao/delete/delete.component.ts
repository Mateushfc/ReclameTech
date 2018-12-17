import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class ReclamacaoDeleteComponent implements OnInit {

  constructor(
    private title: Title) {
    this.title.setTitle('Apagar reclamação');
  }

  ngOnInit() {
  }

}
