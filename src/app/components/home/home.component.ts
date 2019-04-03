import { Component, OnInit } from '@angular/core';
import {DateModel} from '../../models/dateModel';
declare var fs: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  favoriteSeason: any = '';
  seasons: string[] = ['opened startDate', 'closed startDate'];
  selectedEvent: any = '';
  EnglishTitle: any = '';
  EnglishText: any = '';
  ArabicTitle: any = '';
  ArabicText: any = '';
  public json: any[] = [];
  startDate: DateModel;
  closeDate: DateModel;
  stream: any;
  constructor() { }
  ngOnInit() {}
  onSubmit() {
    if (this.selectedEvent.length === 0 || this.EnglishText.length === 0 ||
      this.EnglishTitle.length === 0 || this.ArabicText.length === 0 ||
      this.ArabicTitle.length === 0 || this.startDate == null) {
      alert('please fill in the missing data.');
      console.log(this.EnglishText);
      console.log(this.ArabicText);
    } else {
      console.log(this.EnglishText);
      console.log(this.ArabicText);
      alert('Data saved!');
      fs.readFile('careerEn.json', 'utf8', (err, data) => {
        if (err) {
          console.log(err, null);
        }
        try {
          this.json = JSON.parse(data);
          console.log(this.json.length);
          console.log(this.selectedEvent);
          console.log(this.linkToEnglish(this.selectedEvent));
          this.json.push({
            id: this.json.length,
            selectedEvent: this.linkToEnglish(this.selectedEvent),
            title: this.EnglishTitle,
            content: this.EnglishText,
            date: this.startDate.month + '/' + this.startDate.day + '/' + this.startDate.year
          });
        } catch (e) {
          console.log('err' + JSON.stringify(e));
        }fs.writeFile('careerEn.json', JSON.stringify(this.json), (e) => {
          console.log('err' + JSON.stringify(e));
        });
      });
      fs.readFile('careerAr.json', 'utf8', (err, data) => {
        if (err) {
          console.log(err, null);
        }
        try {
          this.json = JSON.parse(data);
          console.log(this.selectedEvent);
          console.log(this.linkToArabic(this.selectedEvent));
          this.json.push({
            id: this.json.length,
            selectedEvent: this.linkToArabic(this.selectedEvent),
            title: this.ArabicTitle,
            content: this.ArabicText,
            date: this.startDate.month + '/' + this.startDate.day + '/' + this.startDate.year
          });
        } catch (e) {
          console.log('err' + JSON.stringify(e));
        }fs.writeFile('careerAr.json', JSON.stringify(this.json), (e) => {
          console.log('err' + JSON.stringify(e));
        });
      });
    }
  }

  linkToEnglish(setNum: any) { // function that bridges the value selected in the list to a string
    const EnglishSet = {
      '1': '/file_source/qu/global/images/images/Career Day e.jpg',
      '2': '/file_source/qu/global/images/images/Full-time job opportunity e.jpg',
      '3': '/file_source/qu/global/images/images/Part-time job opportunity e.jpg',
      '4': '/file_source/qu/global/images/images/Internship e.jpg',
      '5': '/file_source/qu/global/images/images/Volunteering e.jpg',
      '6': '/file_source/qu/global/images/images/Career Fair e.jpg',
      '7': '/file_source/qu/global/images/images/New Company established e.jpg',
      '8': '/file_source/qu/global/images/images/Skills Development program e.jpg',
    };
    return EnglishSet[setNum];
  }

  linkToArabic(setNum: any) { // function that bridges the value selected in the list to a string
    const ArabicSet = {
      '1': '/file_source/qu/global/images/images/Career Day a.jpg',
      '2': '/file_source/qu/global/images/images/Full-time job opportunity a.jpg',
      '3': '/file_source/qu/global/images/images/Part-time job opportunity a.jpg',
      '4': '/file_source/qu/global/images/images/Internship a.jpg',
      '5': '/file_source/qu/global/images/images/Volunteering a.jpg',
      '6': '/file_source/qu/global/images/images/Career Fair a.jpg',
      '7': '/file_source/qu/global/images/images/New Company established a.jpg',
      '8': '/file_source/qu/global/images/images/Skills Development program a.jpg',
    };
    return ArabicSet[setNum];
  }

  selectChangeHandler (event: any) {
    this.selectedEvent = event.target.value;
  }

  public getStartDate(sentDate: DateModel): any {
    this.startDate = sentDate;
  }

  public getCloseDate(sentDate: DateModel): any {
    this.closeDate = sentDate;
  }

}



