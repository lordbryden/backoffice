import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';   //we import the validate service here to be able to use it properly
import { SubscriptionService } from '../../services/subscription.service';
import { Router } from '@angular/router';
import { Subsection } from '../../models/data.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.page.html',
  styleUrls: ['./create-subject.page.scss'],
})
export class CreateSubjectPage implements OnInit {
  subjectTitle!: String;
  subsection!: String;
  department!: String;
  pictureurl!: String;

  public storedSubjectPicture!: string;
  selectedSubjectPicture!: File;

  departmentlist = ['Science', 'Arts', 'Commercial', 'Technical', 'Others'];
  subsectionlist = ['Anglophone', 'Francophone', 'Diploma-Examination', 'Entrance-Examination'];



  constructor(private validateservice: ValidateService,

    private SubscriptionService: SubscriptionService,
    private router: Router,
    private http: HttpClient,
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  onSubjectPictureSelected(event:any) {
    console.log(event);
    this.selectedSubjectPicture = <File>event.target.files[0];
    const fd = new FormData
    fd.append('image', this.selectedSubjectPicture);
    this.http.post('http://localhost:3000/subjects/subject-image-upload', fd)
      .subscribe((res: any) => {
        console.log(res.imageUrl);
        this.storedSubjectPicture = res["imageUrl"]; // the name of the file in the folder at the server is sent back and store here
      })
  }


  onCreateSubjectSubmit() {
    this.pictureurl = this.storedSubjectPicture;
    const subjectinfo = {
      subjectTitle: this.subjectTitle,
      subsection: this.subsection,
      department: this.department,
      pictureurl: this.pictureurl
    }
    //Register Subjects
    this.SubscriptionService.registerSubject(subjectinfo).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/manage-subjects']);
        console.log(data.msg)
      } else {
        console.log(data.msg)
        this.router.navigate(['/create-subject']);
      }
    });
  }

}
