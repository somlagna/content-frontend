import { Component } from '@angular/core';
import { CreateUserPostServiceService } from '../create-user-post-service.service';
import {NgForm} from '@angular/forms';
import { UserPosts } from '../user-posts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user-post',
  templateUrl: './create-user-post.component.html',
  styleUrls: ['./create-user-post.component.css']
})

export class CreateUserPostComponent {
    selectedPostType: string="";
    
    onPostTypeChange(event:any){
      this.selectedPostType=event.target.value;
    }
    constructor(private createUserPostServiceService:CreateUserPostServiceService,private router:Router){}
    formData:any={};
    file!: File;
    errorMessage:string|null=null;
    onChange(formData:any){
      const myForm=new FormData();
      if(!formData.postedon||!formData.publishondate||!formData.publishontime||!formData.posttype||!formData.poststatus||!formData.userName||!formData.socialnetworktype||!formData.isScheduled){
        window.alert("Please fill all the required fields");
        return;
      }
      if(formData.posttype==='Image'){
        if (!this.file || !this.isFileTypeValid(this.file, ['image/jpeg', 'image/png'])) {
          alert('Please select a valid JPEG or PNG image file.');
          return;
        }
      }
      if(formData.posttype==='Video'){
        if (!this.file || !this.isFileTypeValid(this.file, ['video/mp4'])) {
          alert('Please select a valid JPEG or PNG image file.');
          return;
        }
      }
      this.errorMessage=null;
      myForm.append('postedon',formData.postedon);
      myForm.append('publishondate',formData.publishondate);
      myForm.append('publishontime',formData.publishontime);
      myForm.append('posttype',formData.posttype);
      myForm.append('postcontexttext',formData.postcontexttext);
      myForm.append('postattachmenturl',formData.postattachmenturl);
      myForm.append('poststatus',formData.poststatus);
      myForm.append('userName',formData.userName);
      myForm.append('socialnetworktype',formData.socialnetworktype);
      myForm.append('isScheduled',formData.isScheduled);
      myForm.append('image',this.file);
      this.createUserPostServiceService.submitForm(myForm).subscribe((response)=>{
      console.log("Form submitted");
      alert("Form submitted");
      },
      (error)=>{
        if(formData.publishondate<formData.postedon){
          this.errorMessage='Publish on date cannot be less than posted on date';
          window.alert(this.errorMessage);
          return;
        }
        if(error.status===400 && error.error==='size of text exceeded'){
          this.errorMessage='Text size';
          window.alert(this.errorMessage);
          return;
        }
        if(error.status===400 && error.error==='Limit Exceeded here'){
          this.errorMessage='Basic Limit of 5 is exceeded ';
          window.alert(this.errorMessage);
          return;
        }
        if(error.status===400 && error.error==='Size of Image exceeded'){
          this.errorMessage='Size of Image exceeded ';
          window.alert(this.errorMessage);
          return;
        }
        if(error.status===400 && error.error==='Size of Video exceeded'){
          this.errorMessage='Size of Video exceeded ';
          window.alert(this.errorMessage);
          return;
        }

        //errorMessage
        else{
          this.errorMessage='Exception';
        }
        console.log(error.error);
      })
    }
    isFileTypeValid(file: File, allowedTypes: string[]): boolean {
      return allowedTypes.includes(file.type);
    }
    onFileSelected(event:any){
       this.file=event.target.files[0];
      
    }
    getOneDayDate(date:Date){
    
      // const oneDay=((5*60)+30)*60*1000;
      // const nextDay=new Date(new Date(date).getMilliseconds()+oneDay);
      // return nextDay;
      const nextDay=new Date(date);
      const oneDay=((19*60)+30)*60*1000;
      return new Date(nextDay.getTime()+oneDay);
    }
    onNavigationBar(){
      this.router.navigate(['']);
    }
}
