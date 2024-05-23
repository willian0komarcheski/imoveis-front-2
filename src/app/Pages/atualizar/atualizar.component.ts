import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CorretorService } from 'src/app/Services/corretor.service';
import { Corretor } from 'src/app/Models/corretor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-corretor',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {
  corretorId!: number;
  corretor: Corretor | null = null;
  corretorForm: FormGroup;
  nome_input!: string;
  cpf_input!: string;
  creci_input!: string;
  btnAcao = "Atualizar";

  constructor(
    private route: ActivatedRoute,
    private router :Router,
    private corretorservice: CorretorService,
    private fb: FormBuilder
  ) {
    this.corretorForm = this.fb.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      creci: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.corretorId = +params['id'];
      console.log(this.corretorId);
      
      this.corretorservice.GetCorretorid(this.corretorId).subscribe(corretor => {
        this.corretor = corretor;
        this.nome_input = corretor.nome || '';
        this.cpf_input = corretor.cpf || '';
        this.creci_input = corretor.creci || '';

        this.corretorForm.patchValue({
          id: corretor.id,
          nome: corretor.nome,
          cpf: corretor.cpf,
          creci: corretor.creci
        });
      });
    });
  }

  EditarCorretor(corretor : Corretor) {
    this.corretorservice.EditCorretor(corretor, this.corretorId).subscribe(
      () => {
        console.log("Corretor atualizado com sucesso!");
        window.location.reload();
      },
      error => {
        console.error("Erro ao atualizar corretor:", error);
      }
    );
  }
}
