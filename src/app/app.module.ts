import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';               // routing
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';                    // Library for charts components

/** Components */
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

/** Routing routes */
import { appRoutes } from 'src/routes';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
