import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/edit-ad/' + Number(this.activatedRoute.snapshot.paramMap.get('productid')));
  }

}
