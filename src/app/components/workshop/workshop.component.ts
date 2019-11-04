import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

import { faMapMarkerAlt, faCalendarAlt, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  // formData: FormGroup;
  faMapMarker = faMapMarkerAlt;
  faCalendarAlt = faCalendarAlt;
  faPhone = faPhone;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faMailBulk = faMailBulk;
  constructor() { }

  ngOnInit() {
  }

  modalOpen() {
    console.log('modal opened!');
  }
}
