import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  title = "Bloglar";
  blogs : any[] = [
    {id:1, name : "Polonya", categoryId : 1, purpose : "Eğitim", imgUrl : "assets/img/1.jpg"},
    {id:2, name : "Almanya", categoryId : 2, purpose : "Gezi", imgUrl : "assets/img/2.jpg"},
    {id:3, name : "İtalya", categoryId : 3, purpose : "Gezi", imgUrl : "assets/img/3.jpg"},
    {id:4, name : "Fransa", categoryId : 4, purpose : "Gezi", imgUrl : "assets/img/4.jpg"},
    {id:5, name : "Danimarka", categoryId : 5, purpose : "Gezi", imgUrl : "assets/img/5.jpg"},
    {id:6, name : "İsveç", categoryId : 6, purpose : "Gezi", imgUrl : "assets/img/6.jpg"},
    {id:7, name : "Macaristan", categoryId : 7, purpose : "Gezi", imgUrl : "assets/img/7.jpg"}

  ];

  ngOnInit(): void {
  }

}
