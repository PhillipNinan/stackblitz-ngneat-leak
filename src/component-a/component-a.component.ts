import { Component } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class ComponentA {
  name = 'Component A';

  constructor() {
    this.getFavoriteAnimalsForPerson(123).result;
  }

  getFavoriteAnimalsForPerson(personId: number) {
    const query = injectQuery();
    return query({
      queryKey: ['for-person', personId] as const,
      queryFn: () => {
        console.log('findme');
        return of(['dog', 'cat']);
      },
      refetchOnWindowFocus: 'always',
    });
  }
}
