import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppRoutingModule,
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
