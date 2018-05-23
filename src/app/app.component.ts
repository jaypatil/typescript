import { Component } from '@angular/core';
import { UniversityLibrarian, Researcher, Employee, applyMixins } from './mixins';
import './pre-test';
import { Greeter } from './decorators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  // Decorator
  // constructor() {
  //   console.log(new Greeter('world'));
  // }

  // Intersection types
  // CreatePersonaliry(): Employee & Researcher {
  //   applyMixins(UniversityLibrarian, [Employee, Researcher]);
  //   let newLibrarian = new UniversityLibrarian();
  //   return newLibrarian;
  // }
  // constructor() {
  //  this.CreatePersonaliry().doResearch('Economics');
  // }

  // https://codingblast.com/typescript-intersection-types/

  // Mixins
  // constructor() {
  //   applyMixins(UniversityLibrarian, [Employee, Researcher]);
  //   let newLibrarian = new UniversityLibrarian();
  //   newLibrarian.doResearch('Economics');
  // }

  // Async And Await
  // constructor() {
  //   let GetDataFromServer = () => setTimeout(() => 'response', 500000);
  //   async function doAsyncWork() {
  //     let results = await GetDataFromServer();
  //     console.log(results);
  //   }
  //   console.log('Calling server to retrieve data...');
  //   doAsyncWork();
  //   console.log('Results will be displayed when ready...');
  // }
}
