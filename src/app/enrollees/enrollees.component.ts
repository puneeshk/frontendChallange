import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.css']
})
export class EnrolleesComponent implements OnInit {

  enrolleelist : any = []
  constructor(private service : DataServiceService) { }

  ngOnInit(): void {
    this.getinfo();
  }
  getinfo(){
    this.service.getData().subscribe(res => {
      this.enrolleelist = res;
      console.log(res);
      
    })
  }

  editenrollee(row){
    console.log(row);
    
    this.service.postData(row.id, row).subscribe(res => {
      console.log(res);
      
    })
  }

}
