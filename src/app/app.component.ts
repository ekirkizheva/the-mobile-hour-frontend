import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, startWith } from 'rxjs';
import { IdentityService } from './core/services/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Controlling visibility of banner component.
   */
  isBannerVisible: Observable<boolean>;

  /**
   * Controlling visibility of header component.
   */
  isHeaderVisible: Observable<boolean>;

  /**
   * Controlling visibility of footer component.
   */
  isFooterVisible: Observable<boolean>;

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  title = 'the-mobile-hour-frontend';

  constructor(private identityService: IdentityService) {
    this.isBannerVisible = this.getRouteFeatureState$('banner');
    this.isHeaderVisible = this.getRouteFeatureState$('header');
    this.isFooterVisible = this.getRouteFeatureState$('footer');

    this.identityService.restoreUserFromSavedToken();
  }

  /**
   * Creating state observable from router event stream based on feature name.
   * @param feature - name of the feature to get from router data.
   */
  private getRouteFeatureState$(feature: string): Observable<boolean> {
    return this.router.events.pipe(
      startWith(false),
      filter(event => event instanceof NavigationEnd),
      map(() => this.route.firstChild?.snapshot.data[feature] ?? this.route.firstChild?.firstChild?.snapshot.data[feature] ?? true),
      );
  }
}
