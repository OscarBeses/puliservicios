import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;;
    date: {year: number, month: number};
    model: NgbDateStruct;

    fotosCarouselHidraulico :Array<String>;
    fotosCarouselTerrazoRest :Array<String>;
    fotosCarouselMarmol :Array<String>;
    fotosCarouselTerrazoBajo :Array<String>;
    fotosCarouselMadera :Array<String>;
    titHidraul = "Hidráulico";
    titTerrazoRest = "Terrazo restaurante";
    titMarmol = "Marmol";
    titTerrazoBajo = "Terrazo bajo";
    titMadera = "Madera";
    descHidraul = "Suelo hidráulico antiguo dañado por producto químico que ha quemado y carcomido el acabado esmaltado dejando el área rugosa, después del tratamiento se consiguió recuperar el mosaico.";
    descTerrazoRest = "Trabajo de decapado y diamantado de un suelo de terrazo de restaurante que se encontraba opaco, sin brillo y restos de grasa y suciedad incrustada, después del tratamiento se ven los resultados."
    descMarmol = "Abrillantado de portal de finca ubicada en valencia capital, se aprecia el solado de mármol una ves acabado el proceso mantenimiento."
    descTerrazoBajo = "Terrazo de un bajo que estaba mucho tiempo cerrado y fue sometido a una reforma sin proteger el solado, después de proceder al tratamiento se logró recuperar devolver el brillo a la piedra."
    descMadera = "Recuperación y tratamiento de suelo de madera, aplicando solución especial para madera que limpia y nutre creando una capa protectora transparente que evitará daños por agua o liquidos"
    
    constructor( private renderer : Renderer2) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {        
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }

        this.fotosCarouselHidraulico = this.getFotosHidraulico();
        this.fotosCarouselTerrazoRest = this.getFotosTerrazo();
        this.fotosCarouselMarmol = this.getFotosCarouselMarmol();
        this.fotosCarouselTerrazoBajo = this.getFotosCarouselTerrazoBajo();
        this.fotosCarouselMadera = this.getFotosCarouselMadera();
    }
    getFotosCarouselMadera(): String[] {
        return [
            './assets/img/carousel/hidraulico/1.jpeg',
        ];
    }
    getFotosCarouselMarmol(): String[] {
        return [
            './assets/img/carousel/hidraulico/2.jpeg',
        ];
    }
    getFotosCarouselTerrazoBajo(): String[] {
        return [
            './assets/img/carousel/hidraulico/4.jpeg',
        ];
    }
    
    private getFotosTerrazo(): String[] {
        return [
            './assets/img/carousel/hidraulico/5.jpeg',
        ];
    }

    private getFotosHidraulico(): String[] {
        return [
            './assets/img/carousel/hidraulico/1.jpeg',
            './assets/img/carousel/hidraulico/2.jpeg',
            './assets/img/carousel/hidraulico/4.jpeg',
            './assets/img/carousel/hidraulico/5.jpeg',
            './assets/img/carousel/hidraulico/6.jpeg',
            './assets/img/carousel/hidraulico/7.jpeg',
        ];
    }

    scrollToMain(){
        document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

}
