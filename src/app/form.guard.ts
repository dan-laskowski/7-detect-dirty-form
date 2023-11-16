import { CanDeactivateFn } from '@angular/router';
import { FormComponent } from './components/form/form.component';

export const FormGuard: CanDeactivateFn<FormComponent> = (
  component: FormComponent,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.profileForm.dirty) {
    if (confirm('Are you sure to leave and lost form data?')) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
