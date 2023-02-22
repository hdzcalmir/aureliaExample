import { watch } from '@aurelia/runtime-html';

export class WelcomePage {
  message = 'Welcome to Aurelia 2!';

  name = '';

  @watch('name')
  nameChange(newName, oldName) {
    console.log(newName); // The new name value
    // console.log(oldName); // The old name value
  }

  packages: string[] = [];

  @watch('packages.length')
  log(newCount, oldCount) {
    if (newCount > oldCount) {
      // new packages came
      console.log('dodajem novi');      
    } else {
      // packages delivered
      console.log('brisem');
      
    }
  }
}
