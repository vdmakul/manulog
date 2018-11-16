import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  showMarkdown: boolean;
  title: string = 'Title';
  article: string;

  options = {
    theme: 'vs'
  };

  ngOnInit(): void {
    this.article = '*This is* **markdown** *text* with very-very long line to test how it works';
  }

  toggleMarkdownView(): void {
    this.showMarkdown = !this.showMarkdown;
  }

}
