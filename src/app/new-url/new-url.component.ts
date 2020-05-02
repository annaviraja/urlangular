import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-new-url',
  templateUrl: './new-url.component.html',
  styleUrls: ['./new-url.component.css']
})
export class NewUrlComponent implements OnInit {
listData;
  constructor(private link:LinkService) {
    
   }

  ngOnInit(): void {
  }



}
