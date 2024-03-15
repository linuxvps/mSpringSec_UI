import {Component, inject, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  httpClient = inject(HttpClient);
  response: any = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get('http://localhost:8080/login/getAllUser').subscribe(response => {
      console.log(response)
      this.response = response;
    })
  }

}