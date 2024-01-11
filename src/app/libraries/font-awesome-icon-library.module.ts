import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgModule} from "@angular/core";
import {faListCheck} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class FontAwesomeIconLibraryModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faListCheck
    );
  }
}
