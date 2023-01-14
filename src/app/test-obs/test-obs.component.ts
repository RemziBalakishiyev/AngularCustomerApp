import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  first,
  from,
  last,
  Observable,
  of,
  Subject,
  throwError,
} from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-test-obs',
  templateUrl: './test-obs.component.html',
  styleUrls: ['./test-obs.component.scss'],
})
export class TestObsComponent implements OnInit {
  constructor(private sub: SubjectService) {}

  ngOnInit(): void {}

  subject$ = new Subject();
  cities = ['Baku', 'Gence', 'Lenkaran'];
  onObservableOpr() {
    this.subject$.subscribe({
      next(value) {
        console.log('Subject ', value);
      },
    });

    var observer = from(this.cities);
    observer.pipe(first()).subscribe({
      next: (x) => console.log(x),
      error: (x) => console.log(x),
      complete: () => console.log('Emeliyyat tamamlandi'),
    });
  }

  onLoadData() {
    return of('Remzi');
  }
}
