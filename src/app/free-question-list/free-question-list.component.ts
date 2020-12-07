import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'shared/admin.service';
import Swal from 'sweetalert2';

@Pipe({
	name: 'sanitizeHtml'
})
@Component({
  selector: 'app-free-question-list',
  templateUrl: './free-question-list.component.html',
  styleUrls: ['./free-question-list.component.css']
})
export class FreeQuestionListComponent implements OnInit {
	checked = false;
	indeterminate = false;
	labelPosition: 'before' | 'after' = 'after';
	disabled = false;
	tableData
	backUpTableData
	showLoader
	reqData
	getData
	datamodel
	length
	timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	filterValue
	responseData = []
	displayedColumns: string[] = ['position', 'question', 'answer_type', 'answers', 'correctanswers', 'Action']
	dataSource: any
	element_id
	allReplacement = 54321
	data = []
	selectedUsers = []
	selection
	filter_by
	topicName
	top_id




	@ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private _sanitizer: DomSanitizer, private route: ActivatedRoute, private service: AdminService) { }

  ngOnInit(): void {
	  this.reqData = {}
	  this.reqData.offset = 0
	  this.reqData.limit = 10
	  this.dataSource = new MatTableDataSource(this.responseData);
	  this.dataSource.paginator = this.paginator;
	  this.dataSource.sort = this.sort;
	  this.datamodel = {}
	  //console.log(this.route.snapshot.params.topic_id);
	  
	  this.topicName = this.route.snapshot.params.topic_name
	  this.top_id = this.route.snapshot.params.topic_id
	  console.log("Topic ID: ", this.top_id);

	  this.getQuestion()

  }

  getQuestion() {
	this.service.getQuestionsByTopicID(this.reqData.limit, this.reqData.offset, this.top_id).subscribe(data => {
		console.log("Topic Questions : ", data);
		if (data) {
			this.length = data.count;
			this.dataSource = new MatTableDataSource(data.data);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;

			console.log(this.dataSource);
		}
	}, err => {
		console.log(err);
		if (err.status >= 400) {
			console.log('Invalid Credential!!!');
		} else {
			console.log('Internet Connection Error');
		}
	});
}
   

//   ngAfterViewInit() {
// 	  this.dataSource.paginator = this.paginator
//   }

  

  getPageSizeOptions() {
	  return [5, 10, 20, 30];
  }

  paginationOptionChange(evt) {
	  console.log(evt)
	  this.reqData.offset = (evt.pageIndex * evt.pageSize).toString()
	  this.reqData.limit = evt.pageSize
	  console.log(this.reqData)
	  
  }

  
}


