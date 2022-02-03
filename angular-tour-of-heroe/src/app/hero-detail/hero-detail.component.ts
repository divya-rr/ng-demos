import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../Hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 // @Input() hero!:Hero;
  n!: any;
  hero!: Hero;
  // hero!: Hero;

  constructor(private route:ActivatedRoute,private location:Location,private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes():void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);

  }
  goBack(){
    this.location.back();
  }
  save(){
    this.n=this.hero;
    this.n=this.n.trim()
    if(!this.n){
      return;

    }
    if(this.hero){
    this.heroService.updateHero(this.hero).subscribe(()=>this.goBack())
    }
  }
}
