import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root',
})

export class searchBarService {
    private searchVisibility = new BehaviorSubject<boolean>(false);
    searchVisibility$ = this.searchVisibility.asObservable();
  
    toggleSearch() {
      this.searchVisibility.next(!this.searchVisibility.value);
    }
  }