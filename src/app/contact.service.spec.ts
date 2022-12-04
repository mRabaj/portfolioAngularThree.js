import { TestBed,ComponentFixture } from '@angular/core/testing';
import {ContactService} from './contact.service';


describe('ContactService', () => {
  let service: ContactService;
  let fixture: ComponentFixture<ContactService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactService);
    service = fixture.componentInstance;
    fixture.detectChanges();
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(ContactService);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
