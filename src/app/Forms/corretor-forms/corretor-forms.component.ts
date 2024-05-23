import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Corretor } from 'src/app/Models/corretor';
import { CorretorService } from 'src/app/Services/corretor.service';

@Component({
  selector: 'app-Forms',
  templateUrl: './corretor-forms.component.html',
  styleUrls: ['./corretor-forms.component.css']
})
export class CorretorFormsComponent implements OnInit {
  @Output() onsubmit = new EventEmitter<Corretor>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() nome_input!: string;
  @Input() cpf_input!: string;
  @Input() creci_input!: string;
  @Input() dadoscorretor : Corretor | null = null;

  corretorForm!: FormGroup;
  ativo:number = 1;

  constructor(private corretorservice : CorretorService, private router: Router) {
  }

  ngOnInit(): void {
    this.corretorForm = new FormGroup ({
      id: new FormControl(this.dadoscorretor ? this.dadoscorretor.id : 0), // incluir o campo id no formulári
      nome: new FormControl(this.dadoscorretor ? this.dadoscorretor.nome : '', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      cpf: new FormControl(this.dadoscorretor ? this.dadoscorretor.cpf : '',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      creci: new FormControl(this.dadoscorretor ? this.dadoscorretor.creci : '',[Validators.required,  Validators.minLength(2), Validators.maxLength(8)]),
    });
  }

  submit() {
    console.log(this.corretorForm.value)
    this.onsubmit.emit(this.corretorForm.value);
  }
}