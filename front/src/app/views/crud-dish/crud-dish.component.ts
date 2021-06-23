import { Component, OnInit, TemplateRef } from '@angular/core';
import { Dish } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudDishService } from './crud-dish.service';




@Component({
  selector: 'app-crud-dish',
  templateUrl: './crud-dish.component.html',
  styleUrls: ['./crud-dish.component.scss']
})
export class CrudDishComponent implements OnInit {

  dishes:Dish[] = [{name:'',description:'',price:'',url:'',ingredients:""}]

  modalRef: BsModalRef = {} as BsModalRef;
 public form: FormGroup = {} as FormGroup
modalBtnsCad = false


 
  constructor(
    private fb: FormBuilder,
    private homeService:HomeService,
    private crudDishService:CrudDishService,
    private modalService: BsModalService
    ) { }

  
  openModal(template: TemplateRef<any>) {
    this.modalBtnsCad = true
    this.form.reset()
    this.modalRef = this.modalService.show(template,Object.assign({},{class:'modalCrud'}));
  }

getDishes():void{
  this.homeService.getDishes().subscribe(response=>{
   this.dishes = response
  })
}

cadastrarPrato():void{
  
  

   this.crudDishService.create(this.form.value).subscribe(()=>{
    this.form.value.name =''
  this.form.value.price =''
  this.form.value.description =''
  this.form.value.ingredients =''
  this.form.value.url =''
  this.crudDishService.showMessage("Prato cadastrado com sucesso",false)
  this.form.reset()
  
  this.getDishes()
  
  this.modalRef.hide()
   }
  )
}

listarAlterar(template: TemplateRef<any>,_dish:Dish):void{
  this.modalBtnsCad = false
  this.modalRef = this.modalService.show(template);
  
  this.form.setValue(
    {id:_dish.id,
      name:_dish.name,
    price:_dish.price,
    description:_dish.description,
    ingredients:_dish.ingredients,
    url:_dish.url
})

}

alterarPrato():void{

  this.crudDishService.alterar(this.form.value).subscribe(()=>{
    this.crudDishService.showMessage("Prato alterado com sucesso",false)
    this.getDishes()
    this.modalRef.hide()
  })
}
deletarPrato(id:number|undefined):void{
this.crudDishService.delete(Number(id)).subscribe(()=>{
  this.crudDishService.showMessage("Prato deletado com sucesso",false)
  this.getDishes()
})
}

  ngOnInit(): void {
    this.getDishes()
    this.form = this.fb.group({
     id: [''],
     name: ['',[Validators.required]],
     price: ['',[Validators.required]],
     description: ['',[Validators.required]],
     ingredients: ['',[Validators.required]],
    url: ['',[Validators.required]],
    })
  }

}
