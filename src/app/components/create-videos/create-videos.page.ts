import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';   //we import the validate service here to be able to use it properly
import { Router } from '@angular/router';
import { SubscriptionService } from '../../services/subscription.service';
import { StudentsServicesService } from '../../services/students-services.service';
import { Video } from '../../models/data.model';
import { Class } from '../../models/data.model';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../services/upload-file.service';

@Component({
  selector: 'app-create-videos',
  templateUrl: './create-videos.page.html',
  styleUrls: ['./create-videos.page.scss'],
})
export class CreateVideosPage implements OnInit {

  subsectionlist= ['Anglophone','Francophone','Diploma-Examination','Entrance-Examination'];
  classlist = ['form 1','form 2','form 3','form 4','form 5','lower Sixth','upper sixth',
               'HND1', 'HND2', 'entrance-examination',
               'sixième', 'cinquième', 'quatrième', 'troisième', 'seconde', 'premier', 'terminal'];

  subjects: any;

  title!: String;
  subject!: String;  // import this from database and use array of object
  class!: String;
  subsection!: String;
  topic!: String;
  videourl!: String;
  pictureurl!: String;
  description!: String;

  public storedPictureName: any;
  public storedVideoName: any;

  selectedVideofile!: File;
  selectedPicturefile!: File;


  selectedFiles!: FileList;
  currentFileUpload!: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(
    private SubscriptionService: SubscriptionService,
    private StudentsServicesService: StudentsServicesService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.StudentsServicesService.getSubjects().subscribe(data => this.subjects = data);
  }

// this is an event change listener. When a file is uploaded, the file is stored in a folder at the backend,
// with the name of the file and success status sent back as response
onVideoFileSelected(event: any){
    console.log(event);
    this.selectedVideofile = <File> event.target.files[0];
    const fd = new FormData
    fd.append('video', this.selectedVideofile);
    this.http.post('http://localhost:3000/videos/upload-video', fd)
    .subscribe((res: any) => {
      console.log(res);
      console.log('the video link on AWS is ' + res);
      this.storedVideoName = res['videoUrl'];    // the name of the file in the folder at the server is sent back and store here
      this.videourl = this.storedVideoName;
    })
  }


  onPictureFileSelected(event: any){
    console.log(event);
    this.selectedPicturefile = <File> event.target.files[0];
    const fd = new FormData
    fd.append('image', this.selectedPicturefile);
    this.http.post('http://localhost:3000/videos/upload-image', fd)
    .subscribe((res: any) => {
      console.log(res);
      this.storedPictureName = res['imageUrl'];                           // the name of the file in the folder at the server is sent back and store here
      this.pictureurl = this.storedPictureName;
    })
  }

  onCreateVideoSubmit() {
    const videoinfo = {
      title: this.title,
      subsection: this.subsection,
      subject: this.subject,
      class: this.class,
      topic: this.topic,
      videourl: this.videourl,
      pictureurl: this.pictureurl,
      description: this.description,
    }


    this.SubscriptionService.createVideo(videoinfo).subscribe(data => {

      if (data.success) {
        console.log(this.subject);
        console.log(this.subsection);
        console.log(this.class);
        console.log('it works here well');
        this.router.navigate(['/manage-videos']);
      } else {
        this.router.navigate(['/create-videos']);
      }
    });
  }

}
