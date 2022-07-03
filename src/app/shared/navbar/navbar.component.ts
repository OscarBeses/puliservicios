import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public notMobile: boolean;
    public notMuyPequenyo: boolean;

    ngOnInit() {
        this.notMobile = window.screen.width > 768;
        this.notMuyPequenyo = window.screen.width > 340;
    }
    
}
