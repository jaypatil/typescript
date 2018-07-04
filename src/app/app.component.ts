import { Component, OnInit } from '@angular/core';
import { UniversityLibrarian, Researcher, Employee, applyMixins } from './mixins';
import './pre-test';
import { Greeter } from './decorators';
import { C, getClassNameSymbol } from './symbols';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  
  title = 'app';
  
  constructor() {
    // Create Observable
    // const observable = Observable.create(observer => {
    //   observer.next('hello');
    //   observer.next('world');
    // });
    // observable.subscribe(val => console.log(val));
    // Creating Observables from Arrays
    // from(['Adrià', 'Jen', 'Sergi']).subscribe(
    //   function(x) {
    //     console.log('Next: ' + x);
    //   },
    //   function(err) {
    //     console.log('Error:', err);
    //   },
    //   function() {
    //     console.log('Completed');
    //   }
    // );
    // from(['Adrià', 'Jen', 'Sergi']).subscribe(
    //   x => console.log('Next: ' + x),
    //   err => console.log('Error:', err),
    //   () => console.log('Completed')
    // );
    // Visualizing Observables & Merge Observable
    // const a = interval(200).pipe(
    //   map(function(i) {
    //     return 'A' + i;
    //   })
    // );
    // const b = interval(100).pipe(
    //   map(function(i) {
    //     return 'B' + i;
    //   })
    // );
    // a.pipe(merge(b)).subscribe(function(x) {
    //   console.log(x);
    // });
    // Basic Sequence Operators
    // [1, 2, 3, 4, 5].map(x => console.log(x * 2));
    // range(1, 5)
    //   .pipe(map(x => x * 2))
    //   .subscribe(console.log);
    //   const isEven = x => x % 2 !== 0;
    //  [1, 2, 3, 4, 5].filter(isEven).map(x => console.log(x));
    //   range(1, 5)
    //     .pipe(filter(isEven))
    //     .subscribe(console.log);
    // Aggregate Operators
    // Find Sum
    // console.log([1, 2, 3, 4, 5].reduce((x, y) => x + y));
    // range(1, 5)
    //   .pipe(reduce((x, y) => x + y))
    //   .subscribe(console.log);
    // Find Avg
    // console.log(
    //   [
    //     [5, 4, 3, 2, 1].reduce(
    //       (prev, cur) => {
    //         return Object.assign({
    //           sum: prev.sum + cur,
    //           count: prev.count + 1
    //         });
    //       },
    //       { sum: 0, count: 0 }
    //     )
    //   ].map(o => o.sum / o.count)[0]
    // );
    // Please figure out the diffrence
    // [
    //   [5, 4, 3, 2, 1].reduce(
    //     (prev, cur) => {
    //       return Object.assign({
    //         sum: prev.sum + cur,
    //         count: prev.count + 1
    //       });
    //     },
    //     { sum: 0, count: 0 }
    //   )
    // ].map(o => console.log(o.sum / o.count));
    // Find Sum with range in observable
    // range(1, 5)
    //   .pipe(
    //     reduce(
    //       (prev: { sum: number; count: number }, cur: number) => {
    //         return Object.assign({
    //           sum: prev.sum + cur,
    //           count: prev.count + 1
    //         });
    //       },
    //       { sum: 0, count: 0 }
    //     ),
    //     map(x => x.sum / x.count)
    //   )
    //   .subscribe(console.log);
    // average speed while they walk
    // interval(1000) // output: 0,1,2,3,4,5.... Continues Input
    //   .pipe(
    //     reduce(
    //       // won't work
    //       (prev: { sum: number; count: number }, cur: number) => {
    //         // console.log(prev, cur);
    //         return Object.assign({
    //           sum: prev.sum + cur,
    //           count: prev.count + 1
    //         });
    //       },
    //       { sum: 0, count: 0 }
    //     ),
    //     map(x => x.sum / x.count)
    //   )
    //   .subscribe(console.log); // Never gets Executed

    //  Aggregate Infinite Observables?
    // emit value in sequence every 1 second
    // interval(1000) // output: 0,1,2,3,4,5....
    //   .pipe(
    //     scan(
    //       (prev: { sum: number; count: number }, cur: number) => {
    //         // console.log(prev, cur);
    //         return Object.assign({
    //           sum: prev.sum + cur,
    //           count: prev.count + 1
    //         });
    //       },
    //       { sum: 0, count: 0 }
    //     ),
    //     map(x => x.sum / x.count)
    //   )
    //   .subscribe(console.log);
    // ## Reduce for fixed set and scan for contineous set

    //  Observable whose results are more Observables
    // const concatAll = source => source.reduce((a, b) => a.concat(b));

    // We would use it like this:
    // console.log(concatAll([[0, 1, 2], [3, 4, 5], [6, 7, 8]]));
    // [0, 1, 2, 3, 4, 5, 6, 7, 8]

    // Explicit Cancellation: The Disposable/unsubscribe

    // const counter = interval(1000);
    // const subscription1 = counter.subscribe(i => {
    //   console.log('Subscription 1:', i);
    // });

    // const subscription2 = counter.subscribe(i => {
    //   console.log('Subscription 2:', i);
    // });

    // setTimeout(() => {
    //   console.log('Canceling subscription2!');
    //   subscription2.unsubscribe();
    // }, 2000);

    // Implicit Cancellation: By Operator // Read Theory

    // const p = new Promise((resolve, reject) => window.setTimeout(resolve, 5000));

    // p.then(() => console.log('Potential side effect!'));

    // const subscription = from(p).subscribe(msg => console.log('Observable resolved!'));

    // subscription.unsubscribe();

    // The onError Handler
    // const getJSON = (arr: string[]) => from(arr).pipe(map((v: string) => JSON.parse(v)));

    // getJSON([
    //   '{"1": 1, "2": 2}',
    //   '{"success: true}', // Invalid JSON string
    //   '{"enabled": true}'
    // ]).subscribe(json => console.log('Parsed JSON: ', json), err => console.error(err.message));

    // const handleError = error => {
    //   // return an observable with a user-facing error message
    //   return throwError(Object.assign({ error: 'There was an error parsing JSON :' + error }));
    // };

    // const caught = getJSON(['{"1": 1, "2": 2}', '{"1: 1}']).pipe(
    //   catchError(err => err) // Do nothing
    //   // catchError(handleError) // Handle gracefully
    // );

    // caught.subscribe(
    //   function(json) {
    //     console.log('Parsed JSON: ', json);
    //   },
    //   // Because we catch errors now, `onError` will not be executed
    //   function(e) {
    //     console.log('ERROR', e.error);
    //   }
    // );


  }

  ngOnInit(): void {
    // we cannot write code in constructor to manupulate dom, because DOM doesnt exist
    // Creating Observables from JavaScript Events
    //   const ESC_KEY = 27;
    //   const nameInput = document.getElementById('name') as HTMLInputElement;
    //   const subscription = fromEvent(nameInput, 'keydown').subscribe((e: KeyboardEvent) => {
    //     console.log(e.keyCode);
    //     if (e.keyCode === ESC_KEY) {
    //       nameInput.value = '';
    //     }
    //   });
    // Creating Observables from JavaScript Events
    //   const allMoves = fromEvent(document, 'mousemove');
    //   allMoves.subscribe((e: MouseEvent) => {
    //     console.log(e.clientX, e.clientY);
    //   });
    //   const movesOnTheRight = allMoves.pipe(
    //     filter((e: MouseEvent) => {
    //       return e.clientX > window.innerWidth / 2;
    //     })
    //   );
    //   const movesOnTheLeft = allMoves.pipe(
    //     filter((e: MouseEvent) => {
    //       return e.clientX < window.innerWidth / 2;
    //     })
    //   );
    //   movesOnTheRight.subscribe((e: MouseEvent) => {
    //     console.log('Mouse is on the right:', e.clientX);
    //   });
    //   movesOnTheLeft.subscribe((e: MouseEvent) => {
    //     console.log('Mouse is on the left:', e.clientX);
    //   });
  }

  // Symbols
  // constructor() {
  //   let c = new C();
  //   let className = c[getClassNameSymbol]();
  // }

  // constructor() {
  //   let libraryCustomer = {
  //     name: 'Thorne',
  //     assistCustomer: (custName: string) => console.log(`Assisting ${custName}`)
  //   };

  //   if (libraryCustomer instanceof UniversityLibrarian) {
  //     console.log('A helpful librarian.');
  //   } else {
  //     console.log('Not a librarian.');
  //   }
  // }

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
