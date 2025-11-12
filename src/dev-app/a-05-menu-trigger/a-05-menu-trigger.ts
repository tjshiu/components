/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Component, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {Menu, MenuItem, MenuTrigger} from '@angular/aria/menu';

@Component({
  templateUrl: 'a-05-menu-trigger.html',
  styleUrl: 'a-05-menu-trigger.css',
  imports: [
    Menu,
    MenuItem,
    MenuTrigger,
    // MenuContent,
    OverlayModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class A05MenuTriggerDemo {}
