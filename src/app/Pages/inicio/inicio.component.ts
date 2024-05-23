import { Component, Input, OnInit } from '@angular/core';
import { CorretorService } from 'src/app/Services/corretor.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Corretor } from '../../Models/corretor';

@Component({
  selector: 'app-home',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  btnAcao = "Cadastrar";
  nome_input = "nome";
  cpf_input = "cpf";
  creci_input = "creci";

  corretores: Corretor[] = [];
  corretoresGeral: Corretor[] = [];

  constructor(private corretorservice : CorretorService) { }


  ngOnInit(): void {
    this.carregarCorretores();
  }

  carregarCorretores(): void {
    this.corretorservice.GetCorretor().subscribe((data) => {
      this.corretores = data;
      this.corretoresGeral = data;
    });
  }

  CreateCorretor(corretor : Corretor) {
    this.corretorservice.CreateCorretor(corretor).subscribe(() => {
      window.location.reload();
    })
  }

  DeleteCorretor(corretor : Corretor) {
    this.corretorservice.DeleteCorretor(corretor.id).subscribe(
      () => {
        this.carregarCorretores();
        // window.location.reload();
        console.log(`Corretor ${corretor.nome} excluído com sucesso.`);
      },
      error => {
        console.error('Erro ao excluir corretor:', error);
      }
    );  
  }


  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.corretores = this.corretoresGeral.filter(Corretor => {
      return Corretor.nome?.toLocaleLowerCase().includes(value);
    })
  }
  }
