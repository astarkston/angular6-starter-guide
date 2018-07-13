import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent, HomeLogicService } from './home';
import { SharedModule } from '@shared/shared.module';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './routing/routing.module';
import { RootComponent } from './root/root.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule, BrowserModule, SharedModule, RouterModule, MainRoutingModule],
  providers: [HomeLogicService],
  declarations: [HomeComponent, TestComponent, RootComponent, PageNotFoundComponent],
  bootstrap: [RootComponent]
})
export class MainModule {}
