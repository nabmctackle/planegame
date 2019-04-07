import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';
import { I18nSelectPipe } from '@angular/common';
import { async } from 'q';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  UP_ARROW=38,
  DOWN_ARROW=40,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  world: any;
  player = {x:0,y:2};
  endGameBool:any
  constructor(){

  }
  ngOnInit(){
    this.world=[
      [0,0,0,0,0,0,0,0,0,0,0,1],
      [0,0,0,0,0,0,0,0,0,0,0,1],
      [2,0,0,0,0,0,0,0,0,0,0,1],
      [0,0,0,0,0,0,0,0,0,0,0,1],
      [0,0,0,0,0,0,0,0,0,0,0,1],

    ]

  }
  onKey(event){
    console.log(event)
  }
  moveUp(){
    if(this.player.y===0){

    }else{
      this.world[this.player.y][this.player.x]=0
      this.world[this.player.y-1][this.player.x]=2
      this.player.y-=1
    }
  }
  moveRight(){
    if(this.world[this.player.y][this.player.x+1]==1){
      
    }
    if(this.player.x===8){

    }else{
      this.world[this.player.y][this.player.x]=0
      this.world[this.player.y][this.player.x+1]=2
      this.player.x+=1
    }
  }
  moveLeft(){
    if(this.player.x===0){

    }else{
      this.world[this.player.y][this.player.x]=0
      this.world[this.player.y][this.player.x-1]=2
      this.player.x-=1
    }
  }
  moveDown(){
    if(this.player.y==4){

    }else{
      this.world[this.player.y][this.player.x]=0
      this.world[this.player.y+1][this.player.x]=2
      this.player.y+=1
    }
  }
  updateWorld(){
    for(let y=0;y<this.world.length;y++){
      console.log("y is this:",y)
      for(let x=0;x<this.world[y].length-1;x++){
        console.log("x is this:",x)
        this.world[y][x]=this.world[y][x+1]

      }
    }
  }
  startGame(){
    this.endGameBool=true
    this.runGame()
  }
  endGame(){
    this.endGameBool==false

  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      // this.increment();
      this.moveRight()
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      // this.decrement();
      this.moveLeft()
    }
    if (event.keyCode === KEY_CODE.UP_ARROW) {
      // this.decrement();
      this.moveUp()
    }
    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      // this.decrement();
      this.moveDown()
    }
  }
  runGame(){
    if(this.endGameBool){
      this.updateWorld()
      this.sleep(500)
      this.runGame()
    }

    
  }
  sleep(milliseconds){
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }


}

