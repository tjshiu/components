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
  ViewEncapsulation,
  computed,
} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';

@Component({
  templateUrl: 'a-08-tree-single-select.html',
  styleUrl: 'a-08-tree-single-select.css',
  imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class A08TreeSingleSelectDemo {}
