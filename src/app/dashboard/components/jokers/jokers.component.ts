import { Component, OnDestroy, OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';

//Rendeder2
import { Renderer2 } from "@angular/core";

//namespace
import * as fromDashBoard from "../../index";

//NGRX
import { Store } from "@ngrx/store";
import { AppDashBoardState } from "src/app/Store";

//RxJs
import { Observable, Subscription } from "rxjs";

//Models
import { jokers } from "../../models/jokers.model";

//Components
import {ModalComponent  } from "../modals/modals.component";

@Component({
    selector:'app-jokers',
    templateUrl:'./jokers.component.html'
})
export class JokersComponent implements OnInit,OnDestroy{
 /*





 */
    //Obs
    private listJokers$ = new Observable<jokers[]>();
    private list : any[] = [];
    private count : number = 9;
    private subs = new Subscription();
    public joker : jokers={
        categories: [],
        icon_url: '',
        id: '',
        url: '',
        value: ''
    }
    listJokers = new Array<jokers>();

    constructor(
        private store : Store<AppDashBoardState>,
        private elementHTML : Renderer2,
        public dialog: MatDialog

    ){}

    ngOnInit(): void {
        this.count += 1;
        this.store.dispatch( new fromDashBoard.fromJokersActions.getJokers());
        this.listJokers$ = this.store.select(fromDashBoard.fromJokersSelector.getJokers)
        this.subs.add(this.listJokers$.subscribe(jk => this.listJokers = jk));
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
    
    //Agregar un joker
    AddJoker():void{
        this.joker={
            categories:['gerardo'],
            icon_url:'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id:this.count.toString() + Math.random(),
            url:'https://gerard.jokers.com',
            value:'Lorem mollit occaecat proident excepteur' + 
            'nisi fugiat eiusmod. Qui adipisicing velit ex id ipsum sunt amet Lorem nulla' +
            'officia et laborum. Adipisicing cillum veniam ea sint do veniam. Exercitation'
        }
        this.store.dispatch(new fromDashBoard.fromJokersActions.addJoker(this.joker)); 
    }

    //Eliminar un joker
    OnDelete(id:any):void{
        this.store.dispatch( new fromDashBoard.fromJokersActions.delJoker(id));
    }

    //Mostrar Ventana de Agregar un Joker mediante un modal dialog
    openModalEdit(joker:any) {
        //Buscar mediante selectores el joker a modificar, usando su id
        console.log('joker: ',joker)
        const dialogRef = this.dialog.open(
            ModalComponent,
            {
                width: '100%',
                height:'40%',
                data:joker
            }
        
            );
/*     
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        }); */
      }

    HideMenu():void{
        this.elementHTML.addClass(
            document.getElementById('nav-tools'),
            'hide'
            )
            this.elementHTML.removeClass(
                document.getElementById('icon-tools'),
                'icon'
            )
            this.elementHTML.addClass(
                document.getElementById('icon-tools'),
                'show-icon'
            )
    }

    ShowMenu():void{
        this.elementHTML.removeClass(
            document.getElementById('nav-tools'),
            'hide'
            )
            this.elementHTML.addClass(
                document.getElementById('nav-tools'),
                'show'
            )
            this.elementHTML.removeClass(
                document.getElementById('icon-tools'),
                'show-icon'
            )
            this.elementHTML.addClass(
                document.getElementById('icon-tools'),
                'icon'
            )
    }


}