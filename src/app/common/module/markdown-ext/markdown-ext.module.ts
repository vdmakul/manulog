import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { Slugger } from 'marked';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  exports: [
    MarkdownModule
  ]
})
export class MarkdownExtModule { }

function addLogItem(): string {
  return '<i class="material-icons add-log-item">add_comment</i>';
}

function wrapWithClass(renderedMarkdown: string, debugClass = ''): string {
  // todo remove inner markdown-rows?
  return '<div class="markdown-row ' + debugClass + '">' + renderedMarkdown +
    '<div class="markdown-row-action">' + addLogItem() + '</div>' +
    '</div>';
}

function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
  const defaultRenderer = new MarkedRenderer();

  renderer.code = (aCode: string, language: string, isEscaped: boolean) => {
    return wrapWithClass(defaultRenderer.code(aCode, language, isEscaped), 'code');
  };
  renderer.blockquote = (quote: string) => {
    return wrapWithClass(defaultRenderer.blockquote(quote), 'blockquote');
  };
  renderer.html = (aHtml: string) => {
    return wrapWithClass(defaultRenderer.html(aHtml), 'html');
  };
  renderer.heading = (aText: string, level: number, raw: string, slugger: Slugger) => {
    return wrapWithClass(defaultRenderer.heading(aText, level, raw, slugger), 'heading');
  };
  // renderer.list = (body: string, ordered: boolean, start: number) => {
  //   return wrapWithClass(defaultRenderer.list(body, ordered, start));
  // };
  renderer.listitem = (aText: string) => {
    return wrapWithClass(defaultRenderer.listitem(aText), 'listitem');
  };
  renderer.paragraph = (aText: string) => {
    return wrapWithClass(defaultRenderer.paragraph(aText), 'paragraph');
  };
  renderer.table = (header: string, body: string) => {
    return wrapWithClass(defaultRenderer.table(header, body), 'table');
  };
  // renderer.tablerow = (content: string) => {
  //   return wrapWithClass(defaultRenderer.tablerow(content), 'tablerow');
  // };
  renderer.codespan = (aCode: string) => {
    return wrapWithClass(defaultRenderer.codespan(aCode), 'codespan');
  };
  renderer.image = (href: string, title: string, aText: string) => {
    return wrapWithClass(defaultRenderer.image(href, title, aText), 'image');
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}
