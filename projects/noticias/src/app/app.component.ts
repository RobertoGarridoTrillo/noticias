import {Component} from '@angular/core';
import { NoticiaService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'noticias';
  listNoticias: any[] = [];
  loading = false;

  constructor(private _noticiaService: NoticiaService) {

  }

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe({
        next: (response)  => {
          this.loading = false;
          this.listNoticias = response.articles;
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
        },
        complete: () => {
        }
      })
    }, 1000);

  }
}
