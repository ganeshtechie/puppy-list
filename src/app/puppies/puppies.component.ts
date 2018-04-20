import { Component } from '@angular/core';
import { Puppies } from '../data';

@Component({
  selector: 'puppies-cmp',
  template: `
    <puppy-list [puppies]="puppies">

      <ng-template let-pup="$implicit">

        <md-list-item>
          <img mdListAvatar [src]="pup.photo" alt="...">
          <h3 mdLine> {{pup.name}} </h3>
          <p mdLine>
            <span>Age: {{pup.age}} </span>
            <span>Breed: {{pup.breed}} </span>
          </p>
        </md-list-item>

      </ng-template>

      <ng-template let-size  #head>
       <h1>Helo {{ size }}</h1>
      </ng-template>

    </puppy-list>
  `
})
export class PuppiesComponent {
  puppies = Puppies;
}
