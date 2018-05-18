import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable ,  Subscription } from 'rxjs';

import { Routes, ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'employee-projects',
    templateUrl: './employee-project.component.html'
})

export class EmployeeProjectsComponent implements OnDestroy, OnInit{
    public parentRouterId: number;
    public sub: Subscription;
    constructor(private router:Router, private activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
        this.sub = this.activatedRoute.parent.params.subscribe(params =>{
           this.parentRouterId = params['id'];
           console.log("child get id"+this.parentRouterId);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    
}