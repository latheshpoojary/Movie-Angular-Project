import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  treningMovie:any;
  theatreMovie:any;
  allTimeFavorite:any;
  constructor(private http:HttpClient,private route:Router){}
  ngOnInit(): void {
      this.getTrendingMovies();
      this.getThetreMovie();
      this.getAllTimeFavorite();
  }
  getTrendingMovies(){
    this.http.get('http://localhost:3500/Trening-Movie').subscribe(movie=>{
      this.treningMovie=movie;
      console.log(this.treningMovie);
      
    })
  }
   getThetreMovie(){
    this.http.get('http://localhost:3501/Theatre').subscribe(movie=>{
      this.theatreMovie=movie;
      console.log(this.theatreMovie);
      
    })
  }
   getAllTimeFavorite(){
    this.http.get('http://localhost:3502/AllTimeFavorite').subscribe(movie=>{
      this.allTimeFavorite=movie;
      console.log(this.allTimeFavorite);
      
    })
  }
  goToMovie(type:string,id:string){
    this.route.navigate(['movie',type,id])
  }
}
