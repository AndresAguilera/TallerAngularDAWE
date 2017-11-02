import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ObjetosService} from '../../services/objetos.service';
import { Objeto} from '../../models/objeto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [ObjetosService]
})
export class ListadoComponent implements OnInit {

  public objetos: Objeto[];

  constructor(
    private objetoService: ObjetosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }


  ngOnInit() {

    this.objetoService.getObjetos().subscribe(
      result => {
        this.objetos = result;
      }
    );

  }

}
