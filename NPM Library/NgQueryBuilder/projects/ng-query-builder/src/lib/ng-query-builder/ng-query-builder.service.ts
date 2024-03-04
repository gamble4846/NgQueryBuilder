import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgQueryBuilderService {

  constructor() { }

  setupExternalFiles(): Observable<boolean> {
    return new Observable<any>((observer: Observer<boolean>) => {
      let loadedCount = 0;
      let totalCount = 5;

      this.LoadCSS("bootstrap", "assets/QueryBuilder/Styles/bootstrap.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadCSS("chosen", "assets/QueryBuilder/Styles/chosen.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadCSS("awesome-bootstrap-checkbox", "assets/QueryBuilder/Styles/awesome-bootstrap-checkbox.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadCSS("bootstrap-slider", "assets/QueryBuilder/Styles/bootstrap-slider.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadCSS("selectize.bootstrap5", "assets/QueryBuilder/Styles/selectize.bootstrap5.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadCSS("bootstrap-icons", "assets/QueryBuilder/Styles/bootstrap-icons.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadCSS("query-builder.default", "assets/QueryBuilder/Styles/query-builder.default.css").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      
      this.LoadJS("jquery", "assets/QueryBuilder/Styles/jquery.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("popper", "assets/QueryBuilder/Styles/popper.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("bootstrap", "assets/QueryBuilder/Styles/bootstrap.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("chosen.jquery", "assets/QueryBuilder/Styles/chosen.jquery.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("bootstrap-slider", "assets/QueryBuilder/Styles/bootstrap-slider.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("selectize", "assets/QueryBuilder/Styles/selectize.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("jquery-extendext", "assets/QueryBuilder/Styles/jquery-extendext.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("sql-parser", "assets/QueryBuilder/Styles/sql-parser.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("interact", "assets/QueryBuilder/Styles/interact.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("bootbox.all", "assets/QueryBuilder/Styles/bootbox.all.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });
      this.LoadJS("query-builder", "assets/QueryBuilder/Styles/query-builder.js").subscribe((response) => { if (response) { loadedCount++; if (loadedCount >= totalCount) { observer.next(true); observer.complete(); } } else { observer.next(false); observer.complete(); } }, (error) => { observer.next(false); observer.complete(); });    
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
