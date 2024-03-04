import { Injectable } from '@angular/core';
import { Observable, Observer, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgQueryBuilderService {

  constructor() { }

  setupExternalFiles(): Observable<boolean> {
    return new Observable<any>((observer: Observer<boolean>) => {
      let AllCSSAndJS = [
        this.LoadCSS("bootstrap", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/bootstrap.css"),
        this.LoadCSS("chosen", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/chosen.css"),
        this.LoadCSS("awesome-bootstrap-checkbox", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/awesome-bootstrap-checkbox.css"),
        this.LoadCSS("bootstrap-slider", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/bootstrap-slider.css"),
        this.LoadCSS("selectize.bootstrap5", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/selectize.bootstrap5.css"),
        this.LoadCSS("bootstrap-icons", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/bootstrap-icons.css"),
        this.LoadCSS("query-builder.default", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/query-builder.default.css"),

        this.LoadJS("jquery", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/jquery.js"),
        this.LoadJS("popper", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/popper.js"),
        this.LoadJS("bootstrap", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/bootstrap.js"),
        this.LoadJS("chosen.jquery", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/chosen.jquery.js"),
        this.LoadJS("bootstrap-slider", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/bootstrap-slider.js"),
        this.LoadJS("selectize", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/selectize.js"),
        this.LoadJS("jquery-extendext", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/jquery-extendext.js"),
        this.LoadJS("sql-parser", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/sql-parser.js"),
        this.LoadJS("interact", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/interact.js"),
        this.LoadJS("bootbox.all", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/bootbox.all.js"),
        this.LoadJS("query-builder", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/query-builder.js")
      ];

      forkJoin(AllCSSAndJS).subscribe((response) => {
        observer.next(true);
        observer.complete();
      });

      // this.LoadCSS("bootstrap", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/bootstrap.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadCSS("chosen", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/chosen.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadCSS("awesome-bootstrap-checkbox", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/awesome-bootstrap-checkbox.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadCSS("bootstrap-slider", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/bootstrap-slider.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadCSS("selectize.bootstrap5", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/selectize.bootstrap5.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadCSS("bootstrap-icons", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/bootstrap-icons.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadCSS("query-builder.default", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Styles/query-builder.default.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });

      // this.LoadJS("jquery", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/jquery.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("popper", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/popper.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("bootstrap", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/bootstrap.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("chosen.jquery", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/chosen.jquery.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("bootstrap-slider", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/bootstrap-slider.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("selectize", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/selectize.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("jquery-extendext", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/jquery-extendext.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("sql-parser", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/sql-parser.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("interact", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/interact.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("bootbox.all", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/bootbox.all.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      // this.LoadJS("query-builder", "https://cdn.jsdelivr.net/gh/gamble4846/NgQueryBuilder@master/NPM%20Library/NgQueryBuilder/projects/ng-query-builder/src/lib/ng-query-builder/assets/Scripts/query-builder.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
    });
  }

  LoadCSS(id: string, path: string) {
    return new Observable<boolean>((observer: Observer<boolean>) => {
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
          observer.next(true);
          observer.complete();
        };

        link.onerror = () => {
          observer.next(false);
          observer.complete();
        }
      }
      else {
        observer.next(true);
        observer.complete();
      }
    });
  }

  LoadJS(id: string, path: string) {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      if (!document.getElementById(id)) {
        let body = document.getElementsByTagName('body')[0];
        let scriptElement = document.createElement('script');
        scriptElement.type = "text/javascript";
        scriptElement.src = path;
        body.appendChild(scriptElement);

        scriptElement.onload = () => {
          observer.next(true);
          observer.complete();
        };

        scriptElement.onerror = () => {
          observer.next(false);
          observer.complete();
        }
      }
      else {
        observer.next(true);
        observer.complete();
      }
    });

  }
}
