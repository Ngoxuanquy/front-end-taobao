import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [RouterModule],
  exports: [RouterModule] // Export để AppModule có thể dùng
})
export class AppRoutingModule {}
