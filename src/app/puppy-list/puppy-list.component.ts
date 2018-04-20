import { Puppy } from './../puppy/puppy';
import { Component, Input, TemplateRef, ContentChild, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
import { NgForOfContext } from '@angular/common';

@Component({
  selector: 'puppy-list',
  template: `
    <md-list>

      <ng-container #head>
      </ng-container>

      <ng-template ngFor let-puppy [ngForOf]="puppies" [ngForTemplate]="puppyTemplate">
      </ng-template>
    </md-list>
  `
})
export class PuppyListComponent  {


  @Input() puppies: Puppy[];   
  
  @ContentChild(TemplateRef) puppyTemplate: TemplateRef<NgForOfContext<Puppy>>;

  @ViewChild("head", { read: ViewContainerRef }) head: ViewContainerRef;

  @ContentChild("head", { read: TemplateRef }) headTemplate: TemplateRef<PuppyListContext>;


  ngAfterViewInit(){

    Promise.resolve().then(() => {
      
      this.head.createEmbeddedView(this.headTemplate, { $implicit : 10 });
      
    });

  }
  
  
  

}


export class PuppyListContext {
  $implicit: number;
}