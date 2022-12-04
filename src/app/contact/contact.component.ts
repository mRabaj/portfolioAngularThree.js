import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form : FormGroup;
  name : FormControl = new FormControl("", [Validators.required]);
  subject : FormControl = new FormControl("", [Validators.required]);
  email : FormControl = new FormControl("", [Validators.required, Validators.email]);
  message : FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  submitted : boolean =false;
  isLoading : boolean = false;
  responseMessage : string;



  constructor(private formBuilder:FormBuilder, private http : HttpClient,private translateService: TranslateService ) {
    this.form = this.formBuilder.group({
      name : this.name,
      email: this.email,  
	  subject : this.subject,
      message : this.message,

    })
   }
 
  ngOnInit(): void {   
  }

  onSubmit() {

		if (this.form.status == "VALID") {
			this.form.disable(); // disable the form if it's valid to disable multiple submissions
			var formData: any = new FormData();
			formData.append("name", this.form.get("name").value );
			formData.append("subject", this.form.get("subject").value);
			formData.append("email", this.form.get("email").value );
			formData.append("message", this.form.get("message").value);
			this.isLoading = true; // sending the post request async so it's in progress
			this.submitted = false; // hide the response message on multiple submits
			this.http.post("", formData).subscribe(
				(response) => {
					// choose the response of message after send
					const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
					const wrapper = document.createElement('div')

					if (response !== "success") {	
						
						if(this.translateService.currentLang=="fr-FR"){
							this.responseMessage = "Merci pour votre message! Je vous répondrai dès que possible !";
						}else{
							this.responseMessage = "Thanks for the message! I'll get back to you soon!";
						}
												
						wrapper.innerHTML = [
							`<div class="alert alert-success alert-dismissible" role="alert">`,
							`   <div>${this.responseMessage}</div>`,
							'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
							'</div>'
						].join('')
						alertPlaceholder.append(wrapper)
					} else {

							if(this.translateService.currentLang=="fr-FR"){
								this.responseMessage = "Oops! Une erreur s'est produite... rechargez la page et réessayez.";
							}else{
								this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
							}
							wrapper.innerHTML = [
								`<div class="alert alert-secondary alert-dismissible" role="alert">`,
								`   <div>${this.responseMessage}</div>`,
								'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
								'</div>'
							].join('')
							alertPlaceholder.append(wrapper)
						}
					this.form.enable(); // re enable the form after a success
					this.submitted = true; // show the response message
					this.isLoading = true; // re enable the submit button
					
				},
				(error) => {
					this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
					this.form.enable(); // re enable the form after a success
					this.submitted = true; // show the response message
					this.isLoading = false; // re enable the submit button
				}
			);
		}
	}


}