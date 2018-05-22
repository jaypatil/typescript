import { Component } from '@angular/core';
import { UniversityLibrarian, Researcher, Employee } from './mixins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

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
