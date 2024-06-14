import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
  ValidateRegister(userinfo:any) {
    if (
      userinfo.firstname == undefined ||
      userinfo.lastname == undefined ||
      userinfo.email == undefined ||
      userinfo.username == undefined ||
      userinfo.password == undefined ||
      userinfo.phonenumber == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  ValidateEmail(email:string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //Validate Serial Number details
  validateSerial(serialinfo:any) {
    if (
      serialinfo.username == undefined || serialinfo.serialNumberHolder == undefined) {
      return false;
    } else {
      return true;
    }
  }

  //Validate Login Details
  validateLogin(userinfo:any) {
    if (userinfo.username == undefined || userinfo.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  //Validate Login Details
  validateSubject(subjectinfo:any) {
    if (subjectinfo.subjectTitle == undefined || subjectinfo.subsection == undefined || subjectinfo.department == undefined) {
      return false;
    } else {
      return true;
    }
  }

  //Validate
  validateCreditAccount(creditinfo:any) {
    if (creditinfo.name == undefined || creditinfo.amount == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateProductSubmission(productinfo:any) {
    if (productinfo.productName == undefined ||
        productinfo.category == undefined ||
        productinfo.price == undefined ||
        productinfo.pictureUrl == undefined ||
        productinfo.description == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }


  validateVideoSubmission(videoinfo:any) {
    if (videoinfo.title == undefined ||
        videoinfo.subsection == undefined ||
        videoinfo.subject == undefined ||
        videoinfo.class == undefined ||
        videoinfo.topic == undefined ||
        videoinfo.videourl == undefined ||
        videoinfo.pictureurl == undefined ||
        videoinfo.description == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

}
