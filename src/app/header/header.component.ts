import { Component, OnInit } from '@angular/core';
import { faHome, faAddressCard, faBriefcase, faUser, faFile, faBook, faEnvelope, faSun,faMoon} from '@fortawesome/free-solid-svg-icons';
// import * as $ from "https://code.jquery.com/jquery-3.3.1.slim.min.js";
import { TranslateService } from '@ngx-translate/core';

import { Subject, Observable } from 'rxjs';

import { ModeToggleService } from "../lib/mode-toggle/mode-toggle.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  faHome = faHome;
  faAddressCard = faAddressCard;
  faBriefcase = faBriefcase;
  faUser = faUser;
  faFile = faFile;
  faBook = faBook;
  faEnvelope = faEnvelope;
  faSun = faSun;
  faMoon = faMoon;

  constructor(private translateService: TranslateService, 
    private modeToggleService: ModeToggleService) {}

  public selectLanguage (event : any){
    this.translateService.use(event.target.value);  
  }

  toggle() {
    this.modeToggleService.toggleMode();
    //console.log( this.modeToggleService);
  }
  
  ngOnInit(): void {

    // $('.js-scroll-trigger').on('click',
    //   function (): void {
    //     $('.navbar-collapse').toggle();
    //   }
    // );
    // $('.nav').on('click',
    //   function (): void {
    //     $('.navbar-collapse').toggle();
    //   }
    // );
    
  }
}
