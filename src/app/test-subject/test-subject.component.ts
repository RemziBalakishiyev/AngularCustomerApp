import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-test-subject',
  templateUrl: './test-subject.component.html',
  styleUrls: ['./test-subject.component.scss'],
})
export class TestSubjectComponent implements OnInit {
  constructor(private sub: SubjectService) {}

  ngOnInit(): void {}

  onWrite() {}
}
