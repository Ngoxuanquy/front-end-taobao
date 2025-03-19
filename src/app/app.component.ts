import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { FooterComponent } from './core/shared/components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
  onActivate(event: any) {
  console.log('Component Activated:', event);
}

onDeactivate(event: any) {
  console.log('Component Deactivated:', event);
}

}
