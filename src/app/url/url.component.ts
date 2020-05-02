import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LinkService } from '../link.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  urlForm;
  shorturl;
  constructor(private linkservice: LinkService) {
    this.urlForm = new FormGroup({
      'longurl': new FormControl('', Validators.required)
    }
    )
  }
  ngOnInit() { }
  senData() {
    if (this.urlForm.valid) {
      //console.log( this.urlForm.value);
      let randomnumber = this.getRandomInt()
      this.shorturl = "https://url-shortner-annavi.herokuapp.com/" + randomnumber;
      let longurl = this.removeHttp(this.urlForm.value.longurl)
      let data = {
        "shorturl": randomnumber,
        "longurl": longurl
      }
      this.linkservice.postLink(data).subscribe((linkdata) => {
        alert("done")
      })
    }
  }
  getRandomInt() {
    let min = Math.ceil(1000);
    let max = Math.floor(9999);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  removeHttp(longurl) {
    var urlHttp = /^(http|https):\/\//gm;
    if (longurl.match(urlHttp)) {
      longurl = longurl.replace(urlHttp, "");
    }
    return longurl;
  }

}

