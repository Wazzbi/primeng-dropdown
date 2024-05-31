import { bootstrapApplication } from '@angular/platform-browser';
    import { DropdownGroupDemo } from './app/dropdown-group-demo';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

    bootstrapApplication(DropdownGroupDemo, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));