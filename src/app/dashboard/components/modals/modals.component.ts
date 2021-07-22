import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { jokers } from '../../models/jokers.model';

//Forms
import {FormControl, Validators} from '@angular/forms';

//NGRX
import { Store } from "@ngrx/store";
import * as fromDashBoard from "../../index";
import { AppDashBoardState } from "../../../Store/index";
import { categories } from '../../models/categories.model';


@Component({
    selector:'app-modal',
    templateUrl:'./modals.component.html'
})
export class ModalComponent implements OnInit{

    public categories : categories[] = [];
    public joker : jokers={
        categories:[],
        icon_url:'',
        id:'',
        url:'',
        value:''
    }; 

    private name : string ='';
    private id: string = '';
    cat = new FormControl('', []);
    desc = new FormControl('', []);
    url = new FormControl('', []);

constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: jokers,
    private store: Store<AppDashBoardState>
){}
    ngOnInit(): void {
       
        this.store.dispatch(new fromDashBoard.fromCategoriesActions.getCategories());
        this.store.select(fromDashBoard.fromCategoriesSelector.getCategories)
            .subscribe(cat => cat !== null ? this.categories = cat : null);
    }

    OnSave():void{
            this.joker = {
                categories: this.cat.value,
                id:this.data.id,
                icon_url:this.data.icon_url,
                url:this.url.value,
                value:this.desc.value
            }
            this.store.dispatch(new fromDashBoard.fromJokersActions.editJoker(this.joker));
            this.dialogRef.close();
    }
}