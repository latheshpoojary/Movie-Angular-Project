import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{
  type='';
  id='';
  url='';
  movies:any;
  movie:any;
  constructor(private route:ActivatedRoute,private http:HttpClient){}
ngOnInit(): void {
    this.type=this.route.snapshot.params['type'];
    console.log(this.type);
    
    this.id=this.route.snapshot.params['id'];
    
    
    if(this.type==='trending'){
      this.url='http://localhost:3500/Trening-Movie';
    
  }
    if(this.type==='theatre'){
      
      
      this.url=' http://localhost:3501/Theatre';
    
  }
    if(this.type==='popular'){
      this.url='http://localhost:3502/AllTimeFavorite';
    
  }
  
  
    
    this.getMovie();
}
getMovie(){
  
  
  this.http.get(this.url).subscribe(movies=>{
    this.movies=movies;
    
    let index=this.movies.findIndex((movies: { id: string; })=>movies.id==this.id)
    if(index>-1){
      this.movie=this.movies[index];
      console.log(this.movie,"this is movie");
      
    }
  })
  
}
}
