import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'atividade-pratica';

  // Array com informações sobre vários alunos. A primeira chave são com dados verdadeiros sobre a autora deste código. Todos os outros foram inventados
  alunos = [
    {nome: 'Mayara Victória Dias', RU: '3598730', curso: 'Engenharia de Software', aniversario: '01/05/2002'},
    {nome: 'Bruno Dias', RU: '3598731', curso: 'Engenharia da Computação', aniversario: '23/11/2000'},
    {nome: 'Ricardo Linares', RU: '3598732', curso: 'Analise e Desenvolvimento de Sistemas', aniversario: '11/11/1985'},
    {nome: 'Ana Paula', RU: '3598733', curso: 'Design Grafico', aniversario: '05/04/2001'},
    {nome: 'Mariana Alves', RU: '3598734', curso: 'Direito', aniversario: '05/11/2002'}
  ]
}