import { Component,Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploaderService } from '../../../services/file-uploader.service';
import { gsap, TweenMax } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-mange-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mange-images.component.html',
  styleUrl: './mange-images.component.css'
})
export class MangeImagesComponent {

    selectedFiles?: FileList;
    message: string[] = [];
  
    previews: string[] = [];
    imageInfos?: any;
    imagepath:string='';

    slides: any;
  container: any;
  slider: any;
  scrubber: any;
  handle: any;
 
  slideCount: any;
 
  boxWidth: any;
  sliderWidth: any;
  targetX = 0;
  lastTarget = 0;
  draggable: any;
 
  ratio: any;
 
  ratioX: any;
  
    constructor(@Inject(DOCUMENT) private _document:any) { }

    ngOnInit(): void {
      gsap.registerPlugin(Draggable);

    }

    ngAfterViewInit() {
 
      this.slides = this._document.querySelectorAll('.sliderItem');
      this.container = this._document.querySelector('#container');
      this.slider = this._document.querySelector('#slider');
      this.scrubber = this._document.querySelector('#scrubber');
      this.handle = this._document.querySelector('#handle');
      
   
      this.slideCount = this._document.getElementsByClassName('sliderItem').length;
   
      this.boxWidth = this.container.offsetWidth;
      this.sliderWidth = this.boxWidth * this.slideCount;
   
      console.log("slides");
      console.log(this.slider);
   
      for(var i = 0; i < this.slides.length; i++){
        this.slides[i].style.width = this.boxWidth + "px";
      }
      this.slider.style.width = this.sliderWidth;
 
    Draggable.create(this.slider, {
      type: "x",
      edgeResistance: 0.6,
      bounds: "#container",
      throwProps: true,
      onDrag: this.setProgess,
      onThrowUpdate: this.setProgess,
    });
 
    this.initScrollBar();
    }
    selectFiles(event: any): void {
      this.message = [];
      this.selectedFiles = event.target.files;
    
      this.previews = [];
      if (this.selectedFiles && this.selectedFiles[0]) {
        const numberOfFiles = this.selectedFiles.length;
        for (let i = 0; i < numberOfFiles; i++) {
          const reader = new FileReader();
    
          reader.onload = (e: any) => {
            this.previews.push(e.target.result);
          };
    
          reader.readAsDataURL(this.selectedFiles[i]);
        }
      }
    }

    setProgess() {
      var x = gsap.getProperty("#slider", "x");
   
      this.targetX = Math.round((x as number) / this.boxWidth);
      this.targetX =
        this.targetX < -1 * (this.slideCount - 1) ? -1 * (this.slideCount - 1) : this.targetX;
   
      gsap.set(this.scrubber, { x: -this.ratioX * this.ratio });
      this.lastTarget = this.targetX;
   
    }
   
    prevElement() {
      if (this.targetX < 0) {
        this.targetX++;
   
        TweenMax.to(this.slider, 1, {
          x: this.boxWidth * this.targetX,
          onUpdate: this.setProgess
        });
      }
    }
   
    nextElement() {
      if (this.targetX > -1 * (this.slideCount - 1)) {
        this.targetX--;
   
        TweenMax.to(this.slider, 1, {
          x: this.boxWidth * this.targetX,
          onUpdate: this.setProgess
        });
      }
    }
   
    initScrollBar() {
   
      //Select width of the scrubber
      var scrubWidth = this.scrubber.getBoundingClientRect().width;
   
      // Use scrubWidth to calculate handleWidth and use handleWidth wherever needed to keep your slides snap correctly, handleWidth depends on number of slides
      var handleWidth = scrubWidth / this.slideCount;
   
      // ratio to calculate x translate
      this.ratio = scrubWidth / this.sliderWidth;
   
      gsap.set(this.handle, { width: handleWidth });
   
      var self = this;
   
      Draggable.create(this.handle, {
        type: "x",
        //Calculate minX and maxX to set bounds
        //bounds: { minX: 0, maxX: 5 },
        throwProps: true,
        snap: {
          x: function (value) {
            self.ratioX = Math.round(value / handleWidth) * handleWidth;
            return self.ratioX;
          }
        },
        onDrag: this.updateSlides,
        onThrowUpdate: this.updateSlides
      });
    }
   
    updateSlides() {
      // Set the position of slider by calculating ratio
      //this.slider = document.querySelector('#slider');
      gsap.set(this.slider, { x: -this.ratioX / this.ratio });
    }

    
    
  }


