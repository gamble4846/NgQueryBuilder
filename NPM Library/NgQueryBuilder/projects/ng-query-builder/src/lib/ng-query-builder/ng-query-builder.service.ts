import { Injectable } from '@angular/core';
import { Observable, Observer, concat, forkJoin, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgQueryBuilderService {

  constructor() { }

  setupExternalFiles(): Observable<boolean> {
    return new Observable<any>((observer: Observer<boolean>) => {
      let loadedCount = 0;
      let CSS1 = this.LoadCSS("bootstrap", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/bootstrap.css");
      let CSS2 = this.LoadCSS("chosen", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/chosen.css");
      let CSS3 = this.LoadCSS("awesome-bootstrap-checkbox", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/awesome-bootstrap-checkbox.css");
      let CSS4 = this.LoadCSS("bootstrap-slider", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/bootstrap-slider.css");
      let CSS5 = this.LoadCSS("selectize.bootstrap5", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/selectize.bootstrap5.css");
      let CSS6 = this.LoadCSS("bootstrap-icons", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/bootstrap-icons.css");
      let CSS7 = this.LoadCSS("query-builder.default", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/query-builder.default.css");
      let JS1 = this.LoadJS("jquery", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/jquery.js");
      let JS2 = this.LoadJS("popper", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/popper.js");
      let JS3 = this.LoadJS("bootstrap", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/bootstrap.js");
      let JS4 = this.LoadJS("chosen.jquery", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/chosen.jquery.js");
      let JS5 = this.LoadJS("bootstrap-slider", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/bootstrap-slider.js");
      let JS6 = this.LoadJS("selectize", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/selectize.js");
      let JS7 = this.LoadJS("jquery-extendext", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/jquery-extendext.js");
      let JS8 = this.LoadJS("sql-parser", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/sql-parser.js");
      let JS9 = this.LoadJS("interact", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/interact.js");
      let JS10 = this.LoadJS("bootbox.all", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/bootbox.all.js");
      let JS11 = this.LoadJS("query-builder", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@latest/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/query-builder.js");

      concat(CSS1, CSS2, CSS3, CSS4, CSS5, CSS6, CSS7, JS1, JS2, JS3, JS4, JS5, JS6, JS7, JS8, JS9, JS10, JS11).subscribe((response) => {
        if (response) {
          loadedCount++;
          if (18 <= loadedCount) {
            observer.next(true);
            observer.complete();
          }
        }
        else {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }

  LoadCSS(id: string, path: string) {
    return new Observable<string | null>((observer: Observer<string | null>) => {
      if (!document.getElementById(id)) {
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = path;
        link.media = 'all';
        head.appendChild(link);
        link.onload = () => {
          observer.next(path);
          observer.complete();
        };

        link.onerror = () => {
          observer.next(null);
          observer.complete();
        }
      }
      else {
        observer.next(path);
        observer.complete();
      }
    });
  }

  LoadJS(id: string, path: string) {
    return new Observable<string | null>((observer: Observer<string | null>) => {
      if (!document.getElementById(id)) {
        let body = document.getElementsByTagName('body')[0];
        let scriptElement = document.createElement('script');
        scriptElement.type = "text/javascript";
        scriptElement.src = path;
        body.appendChild(scriptElement);
        scriptElement.onload = () => {
          observer.next(path);
          observer.complete();
        };

        scriptElement.onerror = () => {
          observer.next(null);
          observer.complete();
        }
      }
      else {
        observer.next(path);
        observer.complete();
      }
    });

  }
}
