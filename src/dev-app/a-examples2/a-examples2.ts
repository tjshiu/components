/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {
  ChangeDetectionStrategy,
  signal,
  Component,
  computed,
  ViewEncapsulation,
} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {Combobox, ComboboxInput} from '@angular/aria/combobox';
import {Listbox, Option} from '@angular/aria/listbox';

@Component({
  templateUrl: 'a-examples2.html',
  styleUrl: 'a-examples2.css',
  imports: [Combobox, ComboboxInput, Listbox, Option, OverlayModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AExamplesDemo2 {
  query = signal('');

  options = computed(() =>
    fruits.filter(fruit => fruit.toLowerCase().startsWith(this.query().toLowerCase())),
  );
}

const fruits = [
  'Apple',
  'Avocado',
  'Banana',
  'Blueberry',
  'Cantaloupe',
  'Cherry',
  'Grapefruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Strawberry',
  'Watermelon',
];
