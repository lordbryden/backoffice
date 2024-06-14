import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';   //we import the validate service here to be able to use it properly
import { Router } from '@angular/router';
import { SubscriptionService } from '../../services/subscription.service';
//import { Product } from '../../models/data.model';
import { StudentsServicesService } from '../../services/students-services.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {

  subjects: any;
  subsectionlist= ['Anglophone','Francophone','Diploma-Examination','Entrance-Examination'];

  title!: string;
  subject!: String;
  subsection!: String;
  pictureurl!: String;
  description!: String;
  price!: String;

  public storedPictureName: any
  selectedPicturefile!: File;



  constructor(private validateservice: ValidateService,
    private SubscriptionService: SubscriptionService,
    private StudentsServicesService: StudentsServicesService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.StudentsServicesService.getSubjects().subscribe(data => this.subjects = data);
  }

  onPictureFileSelected(event:any){
    console.log(event);
    this.selectedPicturefile = <File> event.target.files[0];
    const fd = new FormData
    fd.append('image', this.selectedPicturefile);
    this.http.post('http://localhost:3000/books/books-image-upload', fd)
    .subscribe(res=>{
      console.log(res);
      this.storedPictureName = res;               // the name of the file in the folder at the server is sent back and store here
      console.log(this.storedPictureName);
      this.pictureurl = this.storedPictureName;
    })
  }


  onCreateProductSubmit() {

    const bookinfo = {
      title: this.title,
      price: this.price,
      subject: this.subject,
      subsection: this.subsection,
      pictureurl: this.pictureurl,
      description: this.description,
    }

    /*Required Fields for Subjects validation
    if (!this.validateservice.validateProductSubmission(productinfo)) {
      this.flashMessages.show('please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    } */

    //Register Subjects
    this.SubscriptionService.createBook(bookinfo).subscribe(data => {
      console.log('it works here well');
      if (data.success) {
        this.router.navigate(['/shop']);
      } else {
        this.router.navigate(['/create-product']);
      }
    });
  }


}
